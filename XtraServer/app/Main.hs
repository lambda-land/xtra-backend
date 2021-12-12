module Main where

import Api
import Servant
import Network.Wai.Handler.Warp (run)
import Network.Wai.Middleware.Cors (simpleCors)

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
app1 = serve xtraAPI staticServer --server1

main :: IO ()
main = do
  putStrLn "Now running Xtra API on port 8081"
  run 8081 (simpleCors $ app1)
