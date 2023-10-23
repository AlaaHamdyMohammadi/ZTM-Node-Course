const express = require('express');
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

app.get('/friends', (req, res) => {
    res.status(200).json(friends)
})

app.get('/friends/:friendId', (req, res) => {
    const friendId = Number(req.params.friendId);
    const friend = friends[friendId];
    if(friend){
        res.status(200).json(friend);
    }else{
        res.status(404).json({
            status: 'Faild',
            message: 'NotFound!',
        })
    }
    //res.send('Test Route');
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
})