const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'uploads/'})

const server = express();

const database = require('./database');

server.get('/images/:filename', (req, res) => {

})

server.get('/posts', (req, res) => {
  res.status(200).json({
    "message": "Success"
  });
});

server.post('/posts', upload.single('image'), (req, res) => {
  const { filename, path } = req.file
  const { description } = req.body;

  const image_url = `/image/${filename}`
  database.createPost(description, image_url, (error, insertId) => {
    if (error) {
      res.send({ error: error.message })
      return
    }
    res.send({
      id: insertId,
      description,
      image_url
    })
  })
});

module.exports = server;