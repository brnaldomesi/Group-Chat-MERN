const users = [];

// Join user to chat
const userJoin = ({ id, username, room }) => {
  username = username.trim().toLowerCase();
  room = room.trim().toLowerCase();

  const existingUser = users.find((user) => user.room === room && user.username === username);

  if(!username || !room) return { error: 'Username and room are required.' };
  if(existingUser) return { error: 'Username exists.' };

  const user = { id, username, room };

  users.push(user);

  return { user };
}

// Get current user
const getCurrentUser = (id) => users.find((user) => user.id === id);

// User leaves chat
const userLeave = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if(index !== -1) return users.splice(index, 1)[0];
}

// Get room users
const getRoomUsers = (room) => users.filter((user) => user.room === room);

module.exports = {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers
};
