// Import the required modules
const router = require('express').Router();

// Import the routes for users, posts, and comments
const userRoutes = require('./userRoutes.js');
const postRoutes = require('./postRoutes.js');
const commentRoutes = require('./commentRoutes.js');

// Set up the router to use the respective routes for users, posts, and comments
router.use('/userRoutes', userRoutes);
router.use('/postRoutes', postRoutes);
router.use('/commentRoutes', commentRoutes);

// Export the router as a module
module.exports = router;