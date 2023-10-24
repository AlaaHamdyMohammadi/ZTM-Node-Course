const express = require("express");
const app = express();

const friendRoutes = require('./routes/friends.route');


app.use((req, res, next) => {
  const start = Date.now();
  next();
  const date = Date.now() - start;
  console.log(`URL: ${req.method} ${req.baseUrl}${req.url} ${date}ms`);
});

//to set req.body to a js object when the content type is slash json
app.use(express.json());

app.use('/friends' ,friendRoutes);


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
