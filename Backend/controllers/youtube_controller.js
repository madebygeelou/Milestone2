const express = require('express');
const router = express.Router();

let comments = [];

router.get('/comments', (req, res) => {
  res.json(comments);
});

router.post('/comments', (req, res) => {
  const newComment = { text: req.body.text };
  comments.push(newComment);
  res.json(newComment);
});

module.exports = router;