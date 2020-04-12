var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;

module.exports = {
    googleOauth,
    googleOauthCallback
}

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/oauth/google/callback"
},
    function (accessToken, refreshToken, profile, cb) {
        console.log(accessToken);
        console.log(refreshToken);
        cb(null, profile);
    }
));

async function googleOauth() {
    passport.authenticate('google', { scope: ['profile'] });
}

async function googleOauthCallback(){
    passport.authenticate('google', { failureRedirect: '/login' });
};

