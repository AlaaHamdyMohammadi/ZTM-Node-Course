const express = require("express");
const friendsController = require('../controllers/friends.controller');
const friendRoutes = express.Router();

friendRoutes.post("/", friendsController.createNewFriend);

friendRoutes.get("/", friendsController.getAllFriends);

friendRoutes.get("/:friendId", friendsController.getFriend);

module.exports = friendRoutes;