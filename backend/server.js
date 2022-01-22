const express = require('express');

const server = express();

server.get('posts', (req, res) => {
  res.status(200).json();
});

server.post('/posts', (req, res) => {
  res.status(200).json();
});

module.exports = server;