var io = require('socket.io')(process.env.PORT || 3500);
var socket = io;

io.on('connection', function (socket) {
  console.log('Connected');
  socket.emit('pong');

  socket.on('disconnect', function () {
    console.log('Disconnected');
  });
});
