const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: '*' },
});

app.get('/', (req, res) => {
  res.send('Notifications Center Backend');
});


const getRandomNotification = () => {
  const types = [
    { type: 'alert', message: 'New account activity detected!' },
    { type: 'update', message: 'System update available!' },
  ];
  return types[Math.floor(Math.random() * types.length)];
};


setInterval(() => {
  const notification = getRandomNotification();
  notification.timestamp = new Date().toLocaleTimeString();
  io.emit('notification', notification);
}, 10000);

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

server.listen(4000, () => {
  console.log('Server running on http://localhost:4000');
});





