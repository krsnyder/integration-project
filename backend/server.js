const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'uploads/'})
const server = express();

server.get('/posts', (req, res) => {
  res.status(200).json({
    "message": "Success"
  });
});

server.post('/posts', upload.single('image'), (req, res) => {
  console.log(req.file)
  const { description } = req.body;
  res.status(200).json();
});

module.exports = server;