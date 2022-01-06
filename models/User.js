const { Schema, model } = require('mongoose');

// Schema to create Student model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      max_length: 50,
    },
    email: {
      type: String,
      required: true,
      max_length: 50,
      match: /\b^([\da-z\._%+-]+)@([\da-z\.-]+)\.([a-z]{2,10})\b/i, 
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thoughts'
      }
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      }
    ]
    
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

userSchema.virtual("friendCount", {
  ref: "User",
  localField: "friends",
  foreignField: "_id",
  count: true,
});

const User = model('user', userSchema);

module.exports = User;
