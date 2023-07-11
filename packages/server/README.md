# What is this project?
This project is a proof of concept for passing realtime data from a client to another.

## File sctructure
There is a server in `server` directory, and there are two clients in `clients` directory: `client` is the final client where data is seen, while `cms` is where data is passed.

## Technologies used
Node 18.11.0 for the server and yarn 1.22.19 used for clients.\
The server is made using [`ws`](https://github.com/websockets/ws) library, which creates websocket connections. Since it is written in TypeScript, you may run
`npx tsc -w` to moify the server and modify inside `./src` folder, if necessary. Entry point remains `./build/index.js`\
Clients are made using [`Vite`](https://vitejs.dev/) and yarn.
<br></br>

# Run
### Get the server running:
`cd server`\
`npm i`\
`npm start`\

in another terminal\
Run the clients by firstly going into clients directory\
`cd clients`\

Run the recieving client:\
`cd client`\
`yarn`\
`yarn start`

in another terminal, run the CMS (sending client):\
`cd cms`\
`yarn`\
`yarn start`
<br></br>

# Use
Choose a color in the CMS by clicking on it and you will see it the Client.