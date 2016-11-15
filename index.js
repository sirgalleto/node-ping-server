var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(process.env.PORT || 3500);

app.get('/', function (req, res) {
  res.send('Its working');
});

io.on('connection', function (socket) {
  console.log('Connected');
  socket.emit('pong');

  socket.on('disconnect', function () {
    console.log('Disconnected');
  });
});
