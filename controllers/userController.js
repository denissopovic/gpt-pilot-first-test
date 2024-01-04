const passport = require('passport');
const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.loginUser = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.render('login', { messages: { error: info.message } });
    }
    req.login(user, (err) => {
      if (err) {
        return next(err);
      }
      return res.redirect('/home');
    });
  })(req, res, next);
};

exports.registerUser = async (req, res, next) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const newUser = new User({
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: hashedPassword
    });

    await newUser.save();
    req.login(newUser, (err) => {
      if (err) {
        return next(err);
      }
      res.redirect('/home');
    });
  } catch (err) {
    res.render('register', { messages: { error: 'Unable to register user.' } });
  }
};

exports.logoutUser = (req, res) => {
  req.logout();
  res.redirect('/login');
};
