{-# LANGUAGE DataKinds #-}
{-# LANGUAGE DeriveGeneric #-}
{-# LANGUAGE FlexibleInstances #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
{-# LANGUAGE MultiParamTypeClasses #-}
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE RankNTypes #-}
{-# LANGUAGE ScopedTypeVariables #-}
{-# LANGUAGE TypeOperators #-}

module Api where

import Data.Aeson ( FromJSON, ToJSON )
import Data.ByteString (ByteString)
import GHC.Generics ( Generic )
import Network.Wai.Handler.Warp ()
import Servant
    ( type (:<|>), JSON, Raw, ReqBody, type (:>), Get, Post )
import Servant.Types.SourceT (source)
import qualified Data.Aeson.Parser
import Trace ( getDotStringFromInput, textPrelude )

data XtraQuery = XtraQuery
  {
    prog :: String,
    filter :: String
  } deriving (Eq, Show, Generic)
instance FromJSON XtraQuery

data Trace = Trace
  {
    dot :: String,
    error :: String
  } deriving (Eq, Show, Generic)
instance ToJSON Trace

data Info = Info
  {
    actions :: [String],
    funcFormat :: [String],
    filters :: [Filter],
    shortenTokens :: [String],
    examples :: [Example]
  } deriving (Eq, Show, Generic)
instance ToJSON Info

data Filter = Filter
  {
    name :: String,
    param :: Bool
  } deriving (Eq, Show, Generic)
instance ToJSON Filter

data Example = Example
  {
    progName :: String,
    progText :: String
  } deriving (Eq, Show, Generic)
instance ToJSON Example

computeDot :: XtraQuery -> Trace
computeDot (XtraQuery p f) = do
  let result = getDotStringFromInput p (textPrelude ++ f)
  --let
  case result of
    Left err -> Trace "" err
    Right result -> Trace result ""

initInfo :: Info
initInfo = Info {
  actions 
    = ["hide"
      ,"factor"
      ,""],
  funcFormat = ["let","=","in"],
  filters               
    = [ Filter "reflexive" False
      , Filter "pattern" False
      , Filter "binding" False
      , Filter "limitrec" True
      , Filter "fundef" True
      , Filter "dec" False         
      , Filter "add" False          
      , Filter "case" False
      , Filter "cond" False
      , Filter "trivial" True
      , Filter "-partialapp" False
      , Filter "-outercase" False
      , Filter "" True
      ],
  shortenTokens = ["=","⇒","of","in",";"],
  examples
    = [ Example "" ""
      , Example "factorial" factorialText
      , Example "twice-fact" twiceFactText
      , Example "equals" eqText
      ]
}

factorialText = "let fact = \\x -> case x of 0 -> 1; y -> x * fact (x-1); in fact 6"

twiceFactText = "let twice = \\f -> \\x -> f (f x) in let fact = \\x -> case x of 0 -> 1; y -> x*fact (x-1); in twice fact 2"

eqText = "let not = \\y -> case y of True -> False; False -> True; in let eq = \\x -> \\n -> case x>n of True -> False; False -> not (n>x); in eq (2+1) 3"

type DotAPI = "trace" :> ReqBody '[JSON] XtraQuery :> Post '[JSON] Trace

type InitAPI = "init" :> Get '[JSON] Info

type DotStaticAPI = InitAPI :<|> DotAPI :<|> "files" :> Raw

