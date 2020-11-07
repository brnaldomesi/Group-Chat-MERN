const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const router = require('./routes');
const { formatMessage } = require('./utils/helpers');
const {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers
} = require('./utils/users');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(router);

const botName = 'Raise Bot';
const PORT = process.env.PORT || 5000;

// Run when client connects
io.on('connect', (socket) => {
  socket.on('join', ({ username, room }, callback) => {
    const { error, user } = userJoin({ id: socket.id, username, room });

    if(error) return callback(error);

    socket.join(user.room);

    // Welcome current user
    socket.emit('message', formatMessage(botName, 'Welcome to Raise!'));

    // Broadcast when a user connects
    socket.broadcast
      .to(user.room)
      .emit(
        'message',
        formatMessage(botName, `${user.username} has joined`)
      );

    // Send users and room info
    io.to(user.room).emit('roomData', { 
      room: user.room, 
      users: getRoomUsers(user.room) 
    });

    callback();
  });

  // Listen for chatMessage
  socket.on('sendMessage', (message, callback) => {
    const user = getCurrentUser(socket.id);

    io.to(user.room).emit('message', formatMessage(user.username, message));

    callback();
  });

  // Runs when client disconnects
  socket.on('disconnect', () => {
    const user = userLeave(socket.id);

    if(user) {
      io.to(user.room).emit('message', formatMessage(botName, `${user.username} has left.`));

      // Send users and room info
      io.to(user.room).emit('roomData', { 
        room: user.room, 
        users: getRoomUsers(user.room)
      });
    }
  })
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
