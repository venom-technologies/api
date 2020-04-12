var express = require('express');
let db = require('./config/db');
let config = require('./config/config')
let events = require('events');
let eventEmitter = new events.EventEmitter();

function startapp() {

    let app = express();
    require('./common/express')(app, config);
    require('./common/middleware/pre-middleware').loadPreMiddleware(app)
    require('./controller/index').loadControllers(app);
    require('./common/middleware/post-middleware').loadPostMiddleware(app);
    app.listen(port = 3000, function () {
        console.log('listening in http://localhost:' + port);
    });
}

db.connectDatabase(config.mongoose, eventEmitter);
eventEmitter.once('connected-db', startapp);



