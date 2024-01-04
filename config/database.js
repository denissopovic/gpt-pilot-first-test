const mongoose = require('mongoose');

const connectionString = process.env.MONGO_URI || 'mongodb://localhost:27017/auth-me'; // INPUT_REQUIRED {Add your MongoDB URI if not using local}

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connection has been established successfully.'))
.catch(err => console.error('MongoDB connection error:', err));

module.exports = mongoose;
