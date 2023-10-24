const express = require("express");
const app = express();
const friendsController = require('./controllers/friends.controller')

const PORT = 3000;

// const friends = [
//   {
//     id: 0,
//     name: "alaa",
//   },
//   {
//     id: 1,
//     name: "hamdy",
//   },
//   {
//     id: 2,
//     name: "mohammadi",
//   },
// ];

app.use((req, res, next) => {
  console.log(`${req.method}, ${req.url}`);
  next();
});

//to set req.body to a js object when the content type is slash json
app.use(express.json());

app.post('/friends', friendsController.createNewFriend);

app.get("/friends", friendsController.getAllFriends);

app.get("/friends/:friendId", friendsController.getFriend);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
