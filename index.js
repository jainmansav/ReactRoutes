const express = require('express');
const app = express();

// Import the routes
const routes = require('./Routes Example');

// Express middleware to parse JSON request bodies
app.use(express.json());

// Use the routes as middleware
app.use('/', routes);

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
