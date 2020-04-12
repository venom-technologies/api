var mongoose = require('mongoose');

function connectDatabase(config, eventEmitter){
    function connect(){
        mongoose.connect(config.uri, { useNewUrlParser: true });
    }
    connect();
    let db = mongoose.connection;
    db.on('disconnected', connect);
    db.on('error',console.error.bind(console,'not connected:',config.uri));
    db.once('open', () => {
        console.log('db connected to localhost');
        eventEmitter.emit('connected-db');
    })

    return mongoose;
}

module.exports = {
    connectDatabase
}