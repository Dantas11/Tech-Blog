// Define a middleware function to check if a user is authenticated
const withAuth = (req, res, next) => {
    // If there is no user_id in the session object of the request
    if (!req.session.user_id) { 
        // Redirect the user to the login page
        res.redirect('/login');
        // If there is a user_id in the session object 
    } else { 
        // Continue to the next middleware function or route handler
        next(); 
    }
};

// Export the withAuth function so it can be used in other files
module.exports = withAuth; 