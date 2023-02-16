const mysql = require('mysql');

// Connection Pool
let connection = mysql.createConnection({
  host:'localhost',
  user: 'root',
  password: 'root123',
  database: 'mysqltoform'
});
connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("MySQL Connection Success");
  }
});

// Add new user
exports.create = (req, res) => {
  const { name,email,address , city, slist, pincode,checkbox } = req.body;

    try {
          const { name,email,address , city, slist, pincode,checkbox } = req.body;
      if (!name || !email ||!address ||!city ||!slist ||!pincode ) {
          return res.redirect('error') 
          

      }   
      
 // User the connection
    connection.query('INSERT INTO form SET name = ?, email = ?, address = ?, city = ?,slist = ?,pincode = ?', [name,email,address,city,slist,pincode], (err, rows) => {
      if (!err) {
        res.render('thanks',{ rows } );
        console.log('The data from user table: \n', rows);
      } else {
        console.log(err);
      }
    });
  
  }catch{
    console.log("Update error on fields.")
  }
  }

  // View Users
exports.view = (req, res) => {
  // User the connection
  connection.query('SELECT * FROM mysqltoform.form', (err, rows) => {
    // When done with the connection, release it
    if (!err) {       
      res.render('viewuser', { rows });
    } else {
      console.log(err);
    }
  });
}

exports.delete = (req, res) => {
  // Delete a record
  // User the connection
  connection.query('DELETE FROM mysqltoform.form WHERE id = ?',[req.params.id], (err, rows) => {

    if(!err) {
        res.redirect('viewuser')
    } else {
      console.log(err);
    }
  });
  
}