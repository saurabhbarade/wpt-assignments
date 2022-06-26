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

let id =2;
let name="machinary"
let status= false;
con.query('update resourse set name =?,status =? where id=? ', 
[name,status,id], 
(err,res1) => {
if (err) {
console.log("error"); 
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