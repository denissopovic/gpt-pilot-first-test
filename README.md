# Auth-Me

Auth-Me is a Node.js web application that facilitates user authentication including registration and login functionality. This project focuses on the backend part, utilizing robust technologies to manage user data and sessions.

## Key Features

- User registration and login.
- Display user information on the home page upon successful login.
- Session management to persist user login state.

## Technologies Used

- Node.js
- Express
- MongoDB
- Mongoose
- express-session
- connect-mongo
- bcrypt
- passport
- passport-local
- EJS
- Bootstrap
- HTML
- CSS3

## Installation

1. Clone the repository to your local machine.
2. Navigate to the cloned directory and run `npm install` to install the project dependencies.
3. Ensure MongoDB is running on your system.

## Configuration

- Update the `/config/database.js` with the MongoDB URI if not using the default local setup.
- The session secret in `/config/session.js` should be an environment variable for production environments.

## Running the Application

1. Start the application by running `npm start` from the root directory.
2. Open a web browser and navigate to `http://localhost:3000` to view the application.

## Project Structure

- `index.js`: The entry point for the application. Sets up the web server and middleware.
- `package.json`: Lists the project dependencies and metadata.
- `public`: Directory for static assets like CSS and JavaScript files.
- `views`: Contains the EJS templates for the application's views.
- `routes.js`: Defines the main routes used in the application.
- `/config`: Contains configuration files like database connection and session management.
- `/models`: Includes the Mongoose schema models.
- `/middlewares`: Holds the custom middleware for authentication.
- `/controllers`: Has the logic for handling user registration and login.
- `/routes`: Contains the express routes specific to user registration and login.

## Contribution

The project is currently in a prototype phase and contributions are welcome. Please ensure to follow the existing code structure and patterns when making contributions.

## Disclaimer

This is a basic application to demonstrate user authentication in Node.js. It is not intended for production use without further development and security enhancements.