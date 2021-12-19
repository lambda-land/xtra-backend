module Main where

import Api
import Servant
import Network.Wai.Handler.Warp (run)
import Network.Wai.Middleware.Cors (simpleCors)
import System.Environment.Blank (getArgs)

dotServer :: Server DotAPI
dotServer = return . computeDot

initServer :: Server InitAPI
initServer = return initInfo

staticServer :: Server DotStaticAPI 
staticServer = initServer :<|> dotServer :<|> serveDirectoryWebApp "./www"

dotroute :: XtraQuery -> Handler Trace
dotroute x@(XtraQuery p f) = return (computeDot x)

xtraAPI :: Proxy DotStaticAPI
xtraAPI = Proxy

app1 :: Application
app1 = serve xtraAPI staticServer

headOrDefault :: String -> [String] -> String
headOrDefault str [] = str
headOrDefault _ (str:_) = str

main :: IO ()
main = do
  args <- getArgs
  let port = read $ headOrDefault "8081" args :: Int
  putStrLn $ "Now starting Xtra API on port " ++ show port
  run port (simpleCors $ app1)
