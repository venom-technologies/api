let user = require('./user/index')
module.exports = {
    loadControllers
}

function loadControllers (app){
    console.log('loading controllers');
    app.use('/', user);
}