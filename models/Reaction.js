const { Schema } = require("mongoose");

const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
  },
  reactionBody: {
    type: String,
    required: true,
    maxlength: 300,
  },
  userName: {
    type: String,
    required: true,
    ref: "User.username",
  },
  createdAt: {
    type: Date,
      default: Date.now,
  },
});

module.exports = reactionSchema;