{-# OPTIONS_GHC -Wno-name-shadowing #-}
{-# OPTIONS_GHC -Wno-unused-matches #-}
{-# LANGUAGE BlockArguments #-}

module Trace where

import Prelude hiding (lex)

----- Xtrarun.hs

import Xtra.Language.Prog ( Prog )
import Xtra.Interface.Monad ( REPL, RState(Env, qEnv), applyG, graph, QueryEnv)
import Xtra.Interface.QueryLang ( QueryVar, QueryFunction (QueryFunction), Query (EvalPattern, Except, Then, Root, QApp, BindingPattern, Fix, Try) )
import Xtra.Interface.Repl ( prelude )
import Xtra.Interface.Parser ( parseLine, Parser, parseOperation, ident, parseQuery, lex )
import Xtra.Language.Parser ( parseProg )
import Xtra.Runtime.Eval ( progTrace )
import Xtra.Transformations.Operations ( Operation, perform )
import Xtra.Runtime.EvalDAG

import Data.Map.Internal (Map, foldr')
-- import qualified Data.Text.Lazy as T
import Data.List (foldl')
import Text.Parsec (parse, ParseError, (<|>), many, try)


--------------- Interface.Monad

import qualified Data.Graph.Inductive.Graph    as G
import qualified Data.GraphViz.Types.Canonical as G4
import qualified Data.GraphViz.Attributes as G3
import qualified Data.GraphViz.Attributes.Colors as G2
import qualified Data.GraphViz.Attributes.Complete as G5
import qualified Data.Set as S
import qualified Data.GraphViz.Attributes.HTML as G1
import qualified Data.Text.Lazy as T1

--------------- Views.DagView
import Data.GraphViz --(runGraphviz, GraphvizOutput(Png) )
import Xtra.Views.DagView
import Data.GraphViz.Attributes.HTML (TextItem(Font))
import qualified Data.Map as M
import Xtra.Language.Syntax (NodeId, ExtExpr (ExprExt), NamedExtVal (NamedVal), ExtVal (ValExt), ExtPat (PatExt), Op (Minus))
import qualified Data.GraphViz as G
import qualified Data.GraphViz.Attributes as G
import qualified Data.GraphViz.Attributes as G1
import Xtra.Language.Hole

import Text.Regex ( mkRegex, subRegex )

--------------- Xtrarun.hs

getDotFromInput :: String -> String -> IO FilePath
getDotFromInput prog query =
    case parseProg prog of
        Left _ -> undefined
        Right e -> do
            let
                state = Env (progTrace e) Nothing undefined Trace.prelude :: RState
            visualize . createGraph . head $ foldl' runQuery [state] (lines query)

getDotStringFromInput :: String -> String -> Either String String
getDotStringFromInput prog query =
  let fixQuery = map (fixFunDef . fixLimitRec . fixCase . fixCond . fixTrivial) (lines query) in
    case parseProg prog of
        Left e -> Left e
        Right e -> do
            let
                state = Env (progTrace e) Nothing undefined Trace.prelude :: RState
            Right (getTrace. head $ foldl' runQuery [state] fixQuery)

runQuery :: [RState] -> String -> [RState]
runQuery state@(st1:sts) input =
    case queryParseLine (qEnv st1) input of
        Right (Left o) -> applyG (perform o) input state
        Right (Right (name,qFunc)) -> st1 {qEnv = M.insert name (Left qFunc) (qEnv st1)} : state
        Left _ -> state
runQuery [] _ = []


queryParseLine :: Map String QueryVar -> String -> Either ParseError (Either Operation (String, QueryFunction))
queryParseLine q = Text.Parsec.parse (parseLineBackend q) ""

visualize :: G4.DotGraph G.Node -> IO FilePath
visualize g = runGraphviz g Png "./output.png"

parseLineBackend :: M.Map String QueryVar -> Parser (Either Operation (String, QueryFunction))
parseLineBackend f = Left <$> parseOperation f <|>
                     Right <$> parseSys

parseSys :: Parser (String, QueryFunction)
parseSys = do
             name <- ident
             vars <- many ident
             lex "="
             q <- parseQuery
             pure (name, QueryFunction vars q)

--------------- Interface.Monad

getTrace :: RState -> String
getTrace e = getDotString $ createV $ graph e

createGraph :: RState -> G4.DotGraph G.Node
createGraph e = viewGraph $ createV $ graph e

--------------- Interface.Repl

runOnceXtra :: Prog -> String
runOnceXtra p = getTrace $ Env (progTrace p) Nothing undefined Trace.prelude

runOnceScript :: Prog -> [String] -> String
runOnceScript p _ = runOnceXtra p


prelude :: QueryEnv
prelude = M.fromList
    [ ("all", Left $ QueryFunction [] $ EvalPattern $ EvalHole $ Hole "X")
    , ("first", Left $ QueryFunction ["s"] $ s `Except` (s `Then` (s `Except` Root)))
    , ("firsttwo", Left $ QueryFunction ["s"] $ s `Except` (s `Then` ((s `Except` Root) `Then` QApp "descendants" [])))
    , ("last", Left $ QueryFunction ["s"] $ Fix $ Try $ s `Except` Root)
    --, ("lasttwo", Left $ QueryFunction ["s"] $ QApp "last" [s] `Or` ((QApp "all" [] `Except` QApp "last" [s]) `Then` QApp "last" [s]))
    , ("descendants", Left $ QueryFunction [] $ QApp "all" [] `Except` Root)
    , ("children", Left $ QueryFunction [] $ QApp "first" [QApp "descendants" []])
    , ("nonFirst", Left $ QueryFunction ["s"] $ (s `Except` QApp "first" [s]) `Then` QApp "descendants" [])
    , ("nonFirstTwo", Left $ QueryFunction ["s"] $ (s `Except` QApp "firsttwo" [s]) `Then` QApp "descendants" [])
    , ("afterLast", Left $ QueryFunction ["s"] $ QApp "last" [s] `Then` QApp "all" [])
    , ("reflexive", Left $ QueryFunction [] $ EvalPattern $ HEval (ExprExt x) (NamedVal (ValExt x) []))
    , ("binding", Left $ QueryFunction [] $ BindingPattern (Left x) (Left y))
    , ("pattern", Left $ QueryFunction [] $ EvalPattern $ HMatch (NamedVal (ValExt x) []) (PatExt y))
--    , ("limitrec", Left $ QueryFunction ["s"] $ QApp "nonFirstTwo" [s] `Except` QApp "afterLast" [s] )
--    , ("dec", Left $ QueryFunction [] $ EvalPattern (HPrim Minus (ValExt x) (ValExt y) (ValExt z)) `Then` QApp "all" [] )--dec= <_X - 1 => _Y>
    ]
    where
        s = QApp "s" []
        x = Hole "X"
        y = Hole "Y"
        z = Hole "Z"


textPrelude :: String
textPrelude = unlines
  [ "recursive s = (nonFirstTwo s) except (afterLast s)"
  , "dec = <_X - 1 => _Y> then all"
  , "add = <_X + _Y => _Z> then all"
  , ""
  ]

fixFunDef :: String -> String
fixFunDef str = subRegex (mkRegex "^(hide|factor|accept) (fundef) ([a-zA-Z0-9]+)") str "\\1 <let \\3 = _X in _Y => _Z>"

fixLimitRec :: String -> String
fixLimitRec str = subRegex (mkRegex "^(hide|factor|accept) (limitrec) ([a-zA-Z0-9]+)") str "\\1 recursive <\\3 _X => _Y>"

--this seems incorrect
--in factorial script:
--  cases = <fact _X => _Y> then children
--  hide cases
fixCase :: String -> String
fixCase str = subRegex (mkRegex "^(hide|factor|accept) (case)") str "\\1 <_Z _X => _Y> then children"

fixCond :: String -> String
fixCond str = subRegex (mkRegex "^(hide|factor|accept) (cond)") str "\\1 <_X > _Y => _Z> then all"

fixTrivial :: String -> String
fixTrivial str = subRegex (mkRegex "^(hide|factor|accept) (trivial) ([a-zA-Z0-9]+)") str "\\1 <\\3 _X => _Y> then descendants"

--------------- Views.DagView

getDotString :: DagView a -> String
getDotString x = T1.unpack $ viewText x


viewText :: DagView a -> T1.Text
viewText x = printDotGraph $ graphToDot nonClusteredParams{globalAttributes = [G4.GraphAttrs [G3.ordering G3.OutEdges]]
                          , fmtNode = \(_, l) -> case l of
                              VNode n x a ->
                                [ shape PlainText
                                , G5.FontName (T1.pack "Courier")
                                , toLabel $ nodeToString n
                                ]
                              VRef n a ->
                                [ shape Ellipse
                                , toLabel $ show n
                                , style dotted
                                , fontColor Blue
                                ]
                              Box a ->
                                [ shape PlainText
                                , toLabel "..."
                                ]
                          , fmtEdge = const []} x


viewGraph :: DagView a -> DotGraph G.Node
viewGraph = graphToDot nonClusteredParams{globalAttributes = [G4.GraphAttrs [G3.ordering G3.OutEdges]]
                          , fmtNode = \(_, l) -> case l of
                              VNode n x a ->
                                shape PlainText : toAttrs S.empty n
                              VRef n a ->
                                [ shape Ellipse
                                , toLabel (G1.Text [G1.Str $ T1.pack $ show n])
                                , style dotted
                                , fontColor Gray
                                ]
                              Box a ->
                                [ shape PlainText
                                , toLabel "..."
                                ]
                          , fmtEdge = const []}

nodeToString :: Node -> String
nodeToString (SNode _ e) = case e of
  (Eval env e nv el) -> show e ++ " ⇒ " ++ show nv
  (Match nv pn vb ml) -> show nv ++ "|" ++ show pn ++ "↝" ++ show vb
  (Prim o v1 v2 result pl) -> show v1 ++ show o ++ show v2 ++ "=" ++ show result
nodeToString (RNode _ v nv sp) = v ++ " is " ++ show nv

{-
toAttrsBackend :: Settings -> Node -> NodeId -> [Attribute]
toAttrsBackend sns (SNode _ e) id = case e of
  (Eval env e nv el) -> [ toText (show e ++ " ⇒ " ++ show nv ++ idSpacing) (nodeIDToTextItem (show id))
                         , G5.FontName nodeLabelFont
                         ] ++ [toPlainText (show el) | EmitLabels `S.member` sns]
  (Match nv pn vb ml) -> [ toText (show nv ++ "|" ++ show pn ++ "↝" ++ show vb ++ idSpacing) (nodeIDToTextItem (show id))
                         , G5.FontName nodeLabelFont
                         ] ++ [toPlainText (show ml) | EmitLabels `S.member` sns]
  (Prim o v1 v2 result pl) -> [toText (show v1 ++ show o ++ show v2 ++ "=" ++ show result ++ idSpacing) (nodeIDToTextItem (show id))]
toAttrsBackend sns (RNode _ v nv sp) id = [ toPlainText (v ++ " is " ++ show nv ++ idSpacing), G5.FontName nodeLabelFont ]

idSpacing :: String 
idSpacing = "  "

nodeIDToTextItem :: String -> TextItem
nodeIDToTextItem id = G1.Format G1.Superscript [G1.Font [G1.Face nodeIDFont, G1.Color (G2.RGB 0 0 255), G1.PointSize 9.0] [G1.Str (T1.pack id)]]

toText :: String -> TextItem -> Attribute
toText s txtit = G.toLabel $ G1.Text [G1.Str $ T1.pack s, txtit]

toPlainText :: String -> Attribute
toPlainText s = G.toLabel $ G1.Text [G1.Str $ T1.pack s]


nodeLabelFont :: T1.Text 
nodeLabelFont = T1.pack "Courier"

nodeIDFont :: T1.Text 
nodeIDFont = T1.pack "Courier"

{-

        runInput :: UI ()
        runInput = void $ do
            progIn <- get value elProgIn
            filtIn <- get value elFiltIn
            liftIO $ getDotFromInput progIn filtIn
            newurl <- loadFile "image/png" (pwd ++ "/output.png")
            element elOutputImage # set UI.src newurl
            redoLayout


-}

-}