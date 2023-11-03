const express = require('express');
const app = express();

function delay(duration){
    const startTime = Date.now();
    while(Date.now() - startTime < duration){
        // event loop is blocked
    }
}

app.get('/', (req, res) => {
    res.send('Performance example');
});

app.get('/timer', (req, res) => {
    //Delay response
    delay(5000);
    res.send('Waiting')
});

const PORT = 3333;
app.listen(PORT, () => {
    console.log(`Successfully running on ${PORT}...`);
})