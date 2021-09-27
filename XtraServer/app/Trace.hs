{-# OPTIONS_GHC -Wno-name-shadowing #-}
{-# OPTIONS_GHC -Wno-unused-matches #-}

module Trace where


----- Xtrarun.hs

import Xtra.Language.Prog ( Prog )
import Xtra.Interface.Monad ( REPL, RState(Env, qEnv), applyG, graph)
import Xtra.Interface.QueryLang ( QueryVar )
import Xtra.Interface.Repl ( prelude )
import Xtra.Interface.Parser ( parseLine )
import Xtra.Language.Parser ( parseProg )
import Xtra.Runtime.Eval ( progTrace )
import Xtra.Transformations.Operations ( Operation, perform )

import Data.Map.Internal (Map)
-- import qualified Data.Text.Lazy as T
import Data.List (foldl')
import Text.Parsec (parse, ParseError)


--------------- Interface.Monad

import qualified Data.Graph.Inductive.Graph    as G
import qualified Data.GraphViz.Types.Canonical as G4
import qualified Data.GraphViz.Attributes as G3
import qualified Data.Set as S
import qualified Data.GraphViz.Attributes.HTML as G1
import qualified Data.Text.Lazy as T1

--------------- Views.DagView
import Data.GraphViz --(runGraphviz, GraphvizOutput(Png) )
import Xtra.Views.DagView

--------------- Xtrarun.hs

getDotFromInput :: String -> String -> IO FilePath
getDotFromInput prog query =
    case parseProg prog of
        Left _ -> undefined
        Right e -> do
            let
                state = Env (progTrace e) Nothing undefined prelude :: RState
            (visualize . createGraph. head) $ foldl' runQuery [state] (lines query)

getDotStringFromInput :: String -> String -> String
getDotStringFromInput prog query =
    case parseProg prog of
        Left e -> "Error: " ++ e
        Right e -> do
            let
                state = Env (progTrace e) Nothing undefined prelude :: RState
            (getTrace. head) $ foldl' runQuery [state] (lines query)

runQuery :: [RState] -> String -> [RState]
runQuery state input = 
    case queryParseLine (qEnv (head state)) input of
        Right (Left o) -> applyG (perform o) input state
        Right (Right _) -> state
        Left _ -> state

queryParseLine :: Map String QueryVar -> String -> Either ParseError (Either Operation (REPL ()))
queryParseLine q = Text.Parsec.parse (parseLine q) ""

visualize :: G4.DotGraph G.Node -> IO FilePath
visualize g = runGraphviz g Png "./output.png"

--------------- Interface.Monad

getTrace :: RState -> String
getTrace e = getDotString $ createV $ graph e

createGraph :: RState -> G4.DotGraph G.Node
createGraph e = viewGraph $ createV $ graph e

--------------- Interface.Repl

runOnceXtra :: Prog -> String
runOnceXtra p = getTrace $ Env (progTrace p) Nothing undefined prelude

runOnceScript :: Prog -> [String] -> String
runOnceScript p _ = runOnceXtra p

--------------- Views.DagView

getDotString :: DagView a -> String
getDotString x = T1.unpack $ viewText x


viewText :: DagView a -> T1.Text
viewText x = printDotGraph $ graphToDot nonClusteredParams{globalAttributes = [G4.GraphAttrs [G3.ordering G3.OutEdges]]
                          , fmtNode = \(_, l) -> case l of
                              VNode n x a ->
                                [shape PlainText
                                , xLabel x
                                ] ++ toAttrs S.empty n
                              VRef n a ->
                                [ shape Ellipse
                                , toLabel (G1.Text [G1.Str $ T1.pack $ show n])
                                , style dotted
                                , fontColor Gray
                                ]
                              Box a ->
                                [ shape BoxShape
                                , toLabel "..."
                                ]
                          , fmtEdge = const []} x


viewGraph :: DagView a -> DotGraph G.Node
viewGraph = graphToDot nonClusteredParams{globalAttributes = [G4.GraphAttrs [G3.ordering G3.OutEdges]]
                          , fmtNode = \(_, l) -> case l of
                              VNode n x a ->
                                [shape PlainText
                                , xLabel x
                                ] ++ toAttrs S.empty n
                              VRef n a ->
                                [ shape Ellipse
                                , toLabel (G1.Text [G1.Str $ T1.pack $ show n])
                                , style dotted
                                , fontColor Gray
                                ]
                              Box a ->
                                [ shape BoxShape
                                , toLabel "..."
                                ]
                          , fmtEdge = const []}

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