const session = require('express-session');
const MongoStore = require('connect-mongo');
const mongoose = require('./database');

module.exports = function (app) {
  app.use(session({
    secret: 'mySuperSecret', // INPUT_REQUIRED {Use an environment variable for the secret in production}
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: mongoose.connection.client.s.url,
    }),
    cookie: {
      maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days
    }
  }));
};
