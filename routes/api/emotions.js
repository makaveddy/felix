const express = require("express");
const router = express.Router();
const Emotion = require("../../models/Emotion");

router.get("/", (req, res) => {
    Emotion.find()
        .then((emotes) => {
            let emotions = {};
            emotes.forEach((emotion) => {
                emotions[emotion.id] = emotion;
            });
            
            return res.json(emotions)})
        .catch((err) => res.status(404).json({ noemotionsfound: "No emotions found" }));
});

router.get("/:id", (req, res) => {
    Emotion.findById(req.params.id)
        .then((emotion) => res.json(emotion))
        .catch((err) =>
            res.status(404).json({ noemotionfound: "No emotion found with that ID" })
        );
});

module.exports = router;