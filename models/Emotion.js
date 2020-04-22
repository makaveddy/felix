const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmotionSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    contents: {
        type: Array,
        default: []
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Emotion = mongoose.model("Emotion", EmotionSchema);