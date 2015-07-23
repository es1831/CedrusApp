var LocalStrategy   = require('passport-local').Strategy;
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

var Users = require('../fakeUsers.json');
var configAuth = require('./auth');

// expose this function to our app using module.exports
module.exports = function(passport) {

    passport.serializeUser(function(user, done) {
        done(null, user);
    });

    // used to deserialize the user
    passport.deserializeUser(function(user, done) {
        done(null, user);
    });


/*
LOCAL
*/
    passport.use('local-login', new LocalStrategy({
        usernameField : 'username',
        passwordField : 'password',
        passReqToCallback : true
      },
      function(req, username, password, done) {
        var i = 0;
          for(i = 0; i<Users.length; i++){
            if(Users[i].username == username){
              if(Users[i].password == password){
                return done(null, Users[i]);
              }
              else{
                return done(null, false, { message: 'Incorrect password.' });
              }
            }
          }
          return done(null, false, { message: 'Incorrect User.' });

    }));


/*
GOOGLE
*/

passport.use('google', new GoogleStrategy({

        clientID        : configAuth.googleAuth.clientID,
        clientSecret    : configAuth.googleAuth.clientSecret,
        callbackURL     : configAuth.googleAuth.callbackURL,

    },
    function(token, refreshToken, profile, done) {

        process.nextTick(function() {
            return done(null, profile);
        });

    }));
};
