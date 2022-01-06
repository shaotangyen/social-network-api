const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction.js");

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 300,
    },
    createdAt: {
      type: Date,
        default: Date.now,
    },
    userName: {
      type: String,
      required: true,
      ref: "User",
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

thoughtSchema.virtual("reactionCount", {
  ref: "Reaction",
  localField: "reactions",
  foreignField: "_id",
  count: true,
});

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;