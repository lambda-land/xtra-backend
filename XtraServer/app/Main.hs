module Main where

import Api
import Servant
import Network.Wai.Handler.Warp (run)

server1 :: Server DotAPI
server1 = return . computeDot

dotroute :: XtraQuery -> Handler Trace
dotroute x@(XtraQuery p f) = return (computeDot x)

xtraAPI :: Proxy DotAPI
xtraAPI = Proxy

app1 :: Application
app1 = serve xtraAPI server1

main :: IO ()
main = do
  putStrLn "Now running Xtra API on port 8081"
  run 8081 app1
