const mysql = require('mysql');

var connection = mysql.createConnection({
  host     : process.env.MYSQL_HOST || 'localhost',
  user     : process.env.MYSQL_USER || 'root',
  password : process.env.MYSQL_PASSWORD || '',
  database : process.env.MYSQL_DATABASE || 'integration'
});
 
connection.connect();

function createPost() {

  const query = `
  INSERT INTO posts (descri)  
  `

  connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
  });
   
  connection.end();

}
exports.createPost = createPost

function getPosts() {
  

}
exports.getPosts = getPosts