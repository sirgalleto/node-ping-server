# Node Ping Server
NodeJS server to calculate the approximate ping from the browser to any server using web-sockets.

# Aclaration

This is not a perfect ping calculation but I came to a good approximation improving the client flow.

# Installation

  - `$ git clone git@github.com:sirgalleto/ping-server.git`
  - `$ cd ping-server`
  - `$ npm install`

# Usage

  1. Run the service `$ npm start`.
  3. Create a socket connection to port 3500 *(you can change the port creating a env var called PORT)*
  2. Emit a `ping2` event.
  3. Receive a `pong2` event.
  4. Calculate the events interval.
