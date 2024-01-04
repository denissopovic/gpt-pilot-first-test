const express = require('express');
const router = express.Router();
const userRoutes = require('./routes/userRoutes');

router.get('/ping', (req, res) => {
  res.status(200).send('pong');
});

router.use(userRoutes);

// Modify the existing '/home' route to render the home page with user information
router.get('/home', (req, res) => {
  if(req.isAuthenticated()){
    res.render('home', { user: req.user });
  } else {
    res.redirect('/login');
  }
});

module.exports = router;
