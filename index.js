const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public')); // Serve static assets

app.set('views', path.join(__dirname, 'views')); // Define the directory where the templates are located
app.set('view engine', 'ejs'); // Set the template engine to EJS

require('./config/database');
const setupSessions = require('./config/session');
setupSessions(app);
const initializeAuthentication = require('./middlewares/authentication');
initializeAuthentication(app);

app.use((req, res, next) => {
  res.locals.messages = res.locals.messages || { error: null };
  next();
});

const routes = require('./routes');
app.use('/', routes);

// New middleware for 404 Not Found
app.use((req, res, next) => {
  res.status(404).send('Page not found');
});

// Corrected error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('An error occurred, and we\'re working to fix the issue!');
});

app.listen(port, () => {
  console.log(`Auth-Me app listening at http://localhost:${port}`);
});
