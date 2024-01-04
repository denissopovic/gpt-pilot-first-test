const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/register', (req, res) => {
  res.render('register', { user: req.user });
});

router.get('/login', (req, res) => {
  res.render('login', { user: req.user });
});

router.post('/register', userController.registerUser);

router.post('/login', userController.loginUser);

router.get('/logout', function(req, res, next){
  req.logout(function(err) {
    if (err) { return next(err); }
    req.session.destroy((err) => {
      if (err) {
        console.log('Error : Failed to destroy the session during logout.', err);
        next(err);
      }
      res.clearCookie('connect.sid'); // the name of the session ID cookie to clear
      return res.redirect('/login');
    });
  });
});

module.exports = router;
