let express = require('express');
let router = express.Router();
let userController = require('./user')

router.get('/', async (req, res, next) => {
    try {
        let response = await userController.getLogin(req, res, next);
        res.json({ status: true, data: response });
    } catch (ex) {
        next(ex)
    }

});

router.post('/', async (req, res, next) => {
    try {
        let response = await userController.addUserDeatils(req, res, next);
        res.json({ status: true, data: response });
    } catch (ex) {
        next(ex);
    }

});


module.exports = router;