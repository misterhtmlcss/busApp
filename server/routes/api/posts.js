const express = require("express");
const router = express.Router();

// Post model
const Post = require("../../model/posts");

// Get all posts
router.get("/", (req, res) => {
  Post.find()
    .sort({ date: -1 })
    .then(posts => res.json(posts))
    .catch(err => console.log(err));
});

router.post("/add", (req, res) => {
  const newPost = new Post({
    name: req.body.name,
    reason: req.body.reason,
    comment: req.body.comment,
    route: req.body.route
  });

  newPost
    .save()
    .then(post => res.json(post))
    .catch(err => console.log(err));
});

router.delete("/:id", (req, res) => {
  Post.findById(req.params.id)
    .then(post => post.remove().then(() => res.json({ success: true })))
    .catch(() => res.json({ success: false }));
});

module.exports = router;