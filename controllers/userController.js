const User = require("../models/User.js");
const Thought = require("../models/Thought.js");

module.exports = {
  // Get all users
  getUsers(req, res) {
    User.find()
      .then((user) => res.json(user))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Get a user
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select("-__v")
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with that ID" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Create a user
  createUser(req, res) {
    User.create({ username: req.body.username, email: req.body.email })
      .then((user) => res.json(user))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Delete a user
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with that ID" })
          : Thought.deleteMany({ _id: req.params.userId })
      )
      .then(() => res.json({ message: "User and thoughts deleted!" }))
      .catch((err) => res.status(500).json(err));
  },
  // Update a user
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with this id!" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Add a friend
  addFriend(req, res) {
    User.findByIdAndUpdate(
      req.params.id,
      { $push: { friends: req.params.friendId } },
      { new: true },
    )
      .select('-__v')
      .then(user =>
        !user
          ? res.status(404).json({ message: "Error: User does not exist." })
          : res.json({ message: `Friends updated successfully`, user })
      )
      .catch((err) => {
        console.log("An error ha occurred: ", err);
        res.status(500).json(err);
      });
  },

  // Delete a friend
  deleteFriend(req, res) {
    User.findByIdAndUpdate(
      { _id: req.params.id },
      { $pull: { friends: req.params.friendId } },
      { new: true }
    )
      .select('-__v')
      .then(user =>
        !user
          ? res.status(404).json({ message: "Error: User does not exist." })
          : res.json({ message: `Friend removed successfully`, user })
      )
      .catch(err => res.status(400).json(err));
  },
};
