let express = require('express');
let router = express.Router();
let oauthController = require('./oauth');

router.get('/auth/google', oauthController.googleOauth() )

router.get('/auth/google/callback', oauthController.googleOauthCallback(), async (req, res, next) => {
    try{
          
    } catch(ex){
        next(ex)
    }
});

module.exports = router;