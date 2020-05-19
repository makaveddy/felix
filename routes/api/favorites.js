const express = require("express");
const router = express.Router();
const Favorite = require("../../models/Favorite");

router.post("/", (req, res) => {
  const { user, contentId, contentTitle, contentEmotion, contentUrl } = req.body;
  const newFavorite = new Favorite({
    user,
    contentId,
    contentTitle,
    contentEmotion,
    contentUrl,
  });
  newFavorite.save()
    .then((favorite) => res.json(favorite))
    .catch((err) => res.status(400).json(err));
});

router.delete("/:id", (req, res) => {
  Favorite.findByIdAndRemove(req.params.id)
    .then((favorite) => res.json(favorite))
    .catch((err) =>
      res
        .status(404)
        .json({ nofavoritesfound: "No favorite found with that ID" })
    );
});

router.get("/users/:user_id", (req, res) => {
  Favorite.find({ user: req.params.user_id })
    .then((favs) => {
      let favorites = {};
      favs.forEach((favorite) => {
        favorites[favorite.id] = favorite;
      })
      return res.json(favorites)})
    .catch((err) => res.status(404).json({nofavoritesfound: "No favorites found"}));
});

module.exports = router;
