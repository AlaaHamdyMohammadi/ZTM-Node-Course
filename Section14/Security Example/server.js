const fs = require('fs');
const path = require("path");
const https = require('https');
const express = require("express");

const app = express();


app.get('/secret', (req, res) => {
    return res.send('Personal Secret');
})

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});



const PORT = 4000;
https.createServer({
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem'),
}, app).listen(PORT, () => {
    console.log(`app are working on port ${PORT}...`)
})