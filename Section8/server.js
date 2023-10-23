const express = require("express");
const app = express();

const PORT = 3000;

const friends = [
  {
    id: 0,
    name: "alaa",
  },
  {
    id: 1,
    name: "hamdy",
  },
  {
    id: 2,
    name: "mohammadi",
  },
];

app.use((req, res, next) => {
  console.log(`${req.method}, ${req.url}`);
  next();
});

//to set req.body to a js object when the content type is slash json
app.use(express.json());

app.post('/friends', (req, res) => {
    if(!req.body.name){
        return res.status(400).json({
            status: 'Faild',
            message: 'Missing Friend Name'
        })
    }
    console.log('req.body is', req.body);
  const newFriend = { name: req.body.name, id: friends.length };
  friends.push(newFriend);

  res.status(200).json({
    status: "Success",
    data: newFriend,
  });
});

app.get("/friends", (req, res) => {
  res.status(200).json({
    status: "Success",
    results: friends.length,
    data: friends,
  });
});

app.get("/friends/:friendId", (req, res) => {
  const friendId = Number(req.params.friendId);
  const friend = friends[friendId];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({
      status: "Faild",
      message: "NotFound!",
    });
  }
  //res.send('Test Route');
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
