# Tracr (xtra-backend)
Backend Server/API for creating Xtra traces.

![image](https://user-images.githubusercontent.com/43552143/182763741-0949ac6d-c446-41bf-8f5d-92230edf0a7e.png)

## Prereqs

These are the prereqs that I used to run this project on a ubuntu-based machine. These instructions have worked for me on WSL and hosting the server on AWS. However they may need to be modified to fit your environment. Hopefully this will be enough information for you to get this running.

```
sudo apt install -y gcc build-essential curl libffi-dev libffi7 libgmp-dev libgmp10 libncurses-dev libncurses5 libtinfo5 hpack zlib1g-dev

curl --proto '=https' --tlsv1.2 -sSf https://get-ghcup.haskell.org | sh

curl -LO http://archive.ubuntu.com/ubuntu/pool/main/libf/libffi/libffi6_3.2.1-8_amd64.deb

sudo dpkg -i libffi6_3.2.1-8_amd64.deb
```

## Building

First clone the repository.

Then:

```
cd xtra-backend/

git submodule init

git submodule update

cd Xtra

hpack

cd ..

```
## Running the Project

```
cabal run server
```

The port can be configured via command line argument, or from within the source. Default is 8081.

Once the server is running just navigate (or be routed) to port 8081 at the server address.

If you are updating the frontend js file (by building your own from the frontend repo: xtra-ui), just replace elm.js in the ```\www``` folder. Do note that my own recent version already exists in this repo, and you do not need to build your own to get the project up and running.

## Notes

Please take note that Tracr relies directly on Xtra, and uses it as a git submodule. Xtra itself is not available publically at the time of writing. You must have access to the Xtra repository to be able to pull it in as a submodule in order to run this project.

## Another Example Program

Here is an additional example that is not included on the backend, and is a little less trivial. Hopefully this provides a better view of the syntax so that you can built your own programs.

```
let gt = \x -> \y -> y>x in let lt = \x -> \y -> x>y in let filter = \f -> \l -> case l of [] -> []; (x:xs) -> case f x of False -> filter f xs; True -> x:filter f xs;; in let concat = \l -> \r -> case l of [] -> r; (x:xs) -> x:concat xs r; in let quicksort = \list -> case list of [] -> list; (pivot:xs) -> concat (quicksort (filter (lt pivot) xs)) (pivot:quicksort (filter (gt pivot) xs)); in quicksort ([2, 4, 2, 1, 3])
```

## Project Report

Tracr is my Master's Project, but is not actively maintained by myself anymore.

However, I do have a nice report that explains most of the project, available here: [https://ir.library.oregonstate.edu/concern/graduate_projects/9306t607n](https://ir.library.oregonstate.edu/concern/graduate_projects/9306t607n)

## Contact

If you have questions or other inquiries about the project, feel free to email me: jack@jackbarnes.dev

