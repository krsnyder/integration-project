create database integration;
use integration;

CREATE TABLE posts (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  description VARCHAR(255),
  image_url VARCHAR(255),
  `timestamp` TIMESTAMP DEFAULT NOW()
);