const express = require('express');
const app = express();
// const cluster = require('cluster');
//const os = require('os');

function delay(duration){
    const startTime = Date.now();
    while(Date.now() - startTime < duration){
        // event loop is blocked
    }
}

app.get('/', (req, res) => {
    res.send(`Performance example ${process.pid}`);
});

app.get('/timer', (req, res) => {
    //JSON.stringify({}) => "{}"
    //JSON.parse("{}") => {}

    delay(5000);
    res.send(`Waiting ${process.pid}`);
});


    // If true the code will execute as master process
    console.log('Master has been started');
    

    // else the code will execute as worker process
    console.log('Worker proces started');

    const PORT = 3333;
    app.listen(PORT, () => {
        console.log(`Successfully running on ${PORT}...`);
    })


