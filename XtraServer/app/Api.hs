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


import Control.Monad.Except
import Control.Monad.Reader
import Data.Aeson
import Data.Aeson.Types
import Data.Attoparsec.ByteString
import Data.ByteString (ByteString)
import Data.List
import Data.Maybe
import Data.String.Conversions
import Data.Time.Calendar
import GHC.Generics
--import Lucid
--import Network.HTTP.Media ((//), (/:))
import Network.Wai
import Network.Wai.Handler.Warp
import Servant
--import System.Directory
--import Text.Blaze
--import Text.Blaze.Html.Renderer.Utf8
import Servant.Types.SourceT (source)
import qualified Data.Aeson.Parser
--import qualified Text.Blaze.Html
import Trace

data XtraQuery = XtraQuery
  {
    prog :: String,
    filter :: String
  } deriving (Eq, Show, Generic)
instance FromJSON XtraQuery

newtype Trace = Trace
  {
    dot :: String
  } deriving (Eq, Show, Generic)
instance ToJSON Trace

data Info = Info
  {
    actions :: [String],
    funcFormat :: [String],
    filters :: [Filter],
    shortenTokens :: [String]
  } deriving (Eq, Show, Generic)
instance ToJSON Info

data Filter = Filter
  {
    name :: String,
    param :: Bool
  } deriving (Eq, Show, Generic)
instance ToJSON Filter

computeDot :: XtraQuery -> Trace
computeDot (XtraQuery p f) = do
  let result = getDotStringFromInput p f
  --let 
  Trace result

initInfo :: Info
initInfo = Info {
  actions 
    = ["hide"
      ,"factor"],
  funcFormat = ["let","=","in"],
  filters               
    = [ Filter "reflexive" False
      , Filter "pattern" False      --PatMatch
      , Filter "partialapp" False
      , Filter "fundef" False
      , Filter "limitRec" False
      , Filter "outercase" False
      , Filter "binding" False
      , Filter "case" False
      , Filter "trivial" False
      , Filter "dec" False         
      , Filter "add" False          
      , Filter "cond" False
      , Filter "fundef" True
      , Filter "limitrec" True
      , Filter "trivial" True
      , Filter "" True
      ],
  shortenTokens = ["=","⇒","of","in",";"]
}

type DotAPI = "trace" :> ReqBody '[JSON] XtraQuery :> Post '[JSON] Trace

type InitAPI = "init" :> Get '[JSON] Info

type DotStaticAPI = InitAPI :<|> DotAPI :<|> "files" :> Raw

