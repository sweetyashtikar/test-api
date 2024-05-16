const express = require('express');
const mongoose = require('mongoose');
const app = express();
const User = require('./models/user');
const usersRoutes = require('./routes/users');

app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Routes
app.use('/api/users', usersRoutes);

// Specify the port number
const PORT = process.env.PORT || 3001; // Default port is 3001

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
