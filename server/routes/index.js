module.exports = function(app, passport) {

    app.get('/page/:view', function(req, res){
      if(req.user){
        res.render(req.params.view);
      }
      else if(req.params.view == 'home'){
        res.render('home')
      }
      else{
        res.render('login');
      }
    });

    app.get('/getUser', function(req, res){
      res.json(req.user);
    })

/*
LOCAL LOGIN
*/

    app.post('/login',

      passport.authenticate('local-login',
      { successRedirect: '/posts',
      failureRedirect: '/login',
      failureFlash : true
    }));


    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

/*
GOOGLE ROUTES
*/
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.profile']
    }));

    app.get('/auth/google/callback', passport.authenticate('google', {
          successRedirect: '/posts',
         failureRedirect: '/login'
        }),
          function(req, res) {
          res.redirect('/');
      });
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}
