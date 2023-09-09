// Import the Router module from the Express library.
const router = require('express').Router();

// Import the routes for the API.
const apiRoutes = require('./api');

// Import the routes for the home page.
const homeRoutes = require('./homeRoutes');

//IMport the routes for the dashboard page.
const dashBoardRoutes = require('./dashBoardRoutes');

// Use the homeRoutes middleware for requests to the root URL ("/").
router.use('/', homeRoutes);

// Use the apiRoutes middleware for requests to URLs starting with "/api".
router.use('/api', apiRoutes);

//Routemiddleware for './dashBoard' routes
router.use('/dashBoard', dashBoardRoutes);


// Export the router object for use in other parts of the application.
module.exports = router;