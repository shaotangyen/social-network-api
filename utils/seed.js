const connection = require("../config/connection");
const { Reaction, Thought, User } = require("../models");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");

  const userData = [
    { username: "Shao", email: "shao@gmail.com", },
    { username: "Yen", email: "yen@gmail.com" },
    { username: "Alpha", email: "alpha@yahoo.com" },
    { username: "Beta", email: "beta@gmail.com" },
  ];

  const thoughtData = [
    {
      thoughtText: "This movie is amazing, I love it.",
      userName: "Shao",
      reactions: [{ reactionBody: "It's the best", userName: "Yen" }],
    },
    {
      thoughtText: "I couldn't wake up this morning, I was too tried",
      userName: "Alpha",
      reactions: [
        { reactionBody: "Sleep more", userName: "Beta" },
        { reactionBody: "I feel the same", userName: "Yen" },
      ],
    },
    {
      thoughtText:
        "I think we all need to relocate to Mars.",
      userName: "Yen",
      reactions: [],
    },
  ];

  // Drop existing users
  await User.deleteMany({});

  // Drop existing thoughts
  await Thought.deleteMany({});

  // Drop existing reactions
  //await Reaction.deleteMany({});

  // Add users to the collection and await the results
  await User.collection.insertMany(userData);

  let user;
  let newThought;
  for (let thought of thoughtData) {
    console.log("Searching for ", thought.userName);
    user = await User.findOne({ username: thought.userName });
    if (!user) {
      console.log("something went wrong");
      exit();
    } else {
      console.log("Found", user.username, user.thoughts);
    }
    newThought = await Thought.collection.insertOne(thought);

    await user.thoughts.push(newThought.insertedId);
    try {
      await user.save();
      console.log("saved", user);
    } catch (error) {
      console.error(error);
    }
  }

  const newUsers = await User.find();

  let friends;
  let friendsIds;
  for (let thisUser of newUsers) {
    friends = await User.find({ _id: { $nin: [thisUser._id] } });
    friendsIds = friends.map((item) => item._id);
    thisUser.friends = friendsIds;
    await thisUser.save();
  }

  console.info("Seeding complete!");
  process.exit(0);
});