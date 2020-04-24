const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FavoriteSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  contentId: {
    type: Number,
  },
  contentTitle: {
    type: String,
  },
  contentEmotion: {
    type: String,
  },
  contentUrl: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Favorite = mongoose.model("Favorite", FavoriteSchema);

module.exports = Favorite;
