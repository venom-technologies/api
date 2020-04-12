let bodyParser  =   require('body-parser');
let cors        =   require('cors');


module.exports = (app, config) => {
    console.log('Started Express');
    app.use(cors());
    app.use(bodyParser.json({limit : '5mb'}));
    app.use(bodyParser.urlencoded({limit : '5mb', extended: true }));
}

