const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length/2;

module.exports = (app, config) => {

    if (cluster.isMaster) {
        console.log(`Master ${process.pid} is running`);
      
        // Fork workers.
        for (let i = 0; i < 1; i++) {
          let newWorked = cluster.fork();
          let workerId = newWorked.process.pid;
          console.log('Started worker process'+' '+workerId);
        }
      
        cluster.on('exit', (worker, code, signal) => {
            let newWorked = cluster.fork();
            let workerId = newWorked.process.pid;
            console.log(`worker ${worker.process.pid} died`);
            console.log('Started worker process'+ workerId);
        });
      } else {
        app.listen(port = 3000, function(){
                  console.log('listening in http://localhost:' + port);
         });
      }

}

