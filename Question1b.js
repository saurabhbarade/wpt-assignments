//update

let dbparams=
{
host: 'localhost',
user: 'root',
password: 'cdac',
database: 'pleasework',
port:3306
};
const mysql = require('mysql2');
const con=mysql.createConnection(dbparams);

let price =500;
let category = 'cosmetics';
let itemno = 2;
con.query('update item set price =?,category =? where itemno=? ', 
[price,category,itemno], 
(err,res1) => {
if (err) {
console.log("error has occured let us see"); 
} else {
if(res1.affectedRows===0)
{
console.log("update failed");
} 
else
console.log("update successful!!"); 
}
}
);