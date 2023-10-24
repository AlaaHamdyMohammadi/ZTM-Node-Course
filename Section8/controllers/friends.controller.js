const friends = require('./../models/friends.model');

exports.getAllFriends = (req, res) => {
  res.status(200).json({
    status: "Success",
    results: friends.length,
    data: friends,
  });
}

exports.createNewFriend = (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({
      status: "Faild",
      message: "Missing Friend Name",
    });
  }
  console.log("req.body is", req.body);
  const newFriend = { name: req.body.name, id: friends.length };
  friends.push(newFriend);

  res.status(200).json({
    status: "Success",
    data: newFriend,
  });
};

exports.getFriend = (req, res) => {
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
};