const mysql = require('mysql2');

var connection = mysql.createConnection({
  host     : process.env.MYSQL_HOST || 'localhost',
  user     : process.env.MYSQL_USER || 'root',
  password : process.env.MYSQL_PASSWORD || 'root',
  database : process.env.MYSQL_DATABASE || 'integration'
});
 
connection.connect();

function createPost(description, image_url, callback) {

  const query = `
  INSERT INTO posts (description, image_url)
  VALUES (?, ?)  
  `

  const params = [description, image_url]

  connection.query(query, params, (error, result) => {
    if (error) {
      callback(error)
      return
    };
    callback(null, result.insertId)
  });

}
exports.createPost = createPost

function getPosts() {
  

}
exports.getPosts = getPosts