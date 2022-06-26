/* 1. Create a table called item with itemno integer, primary key, itemname varchar(15), price 
integer, category varchar(15)
a. Demonstrate 
i. Insert
ii. Update -- category and price
iii. Multi select – query on category
iv. Single select -- query on itemno.*/
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
// console.log("chali to shuru karte hai");
let itemno = 2;
let itemname = 'cream';
let price =700;
let category = 'makeup';
con.query('insert into item(itemno,itemname,price,category) values (?,?,?,?)', 
[itemno,itemname,price,category], 
(err, res1) => {
if (err) {
console.log("error"); 
} else {
console.log(res1.affectedRows) 
}
}
);