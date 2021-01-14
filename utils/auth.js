// boilerPlate for middleware for Express to see if the user is logged in

const withAuth = (req, res, next) => {
    console.log(req.session);
    if (!req.session.user_id) {
        console.log("you aren't logged in");
        res.redirect('/login');
    } else {
        console.log("you are logged in");
        next();
    }
};

module.exports = withAuth;