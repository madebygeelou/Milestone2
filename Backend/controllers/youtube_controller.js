const express = require('express');
const app = express();
const port = 3000;

let comments = [];
let nextId = 1;

app.use(express.json());

app.get('/controllers/youtube_controller', (req, res) => {
  res.json(comments);
});

app.post('/controllers/youtube_controller', (req, res) => {
  const comment = { ...req.body, id: nextId++ };
  comments.push(comment);
  res.status(201).json(comment);
});

app.delete('/controllers/youtube_controller/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const index = comments.findIndex((comment) => comment.id === id);
  if (index !== -1) {
    comments.splice(index, 1);
    res.status(204).end();
  } else {
    res.status(404).json({ message: 'Comment not found' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


module.exports = router;