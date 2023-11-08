const path = require("path");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`app are working on port ${PORT}...`)
})