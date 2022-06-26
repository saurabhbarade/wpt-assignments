/*3.	Create a table called  resource with resource id integer, primary key, resourcename varchar(15), status boolean
a.	Demonstrate 
i.	Insert
ii.	Update  -- category and price
iii.	Multi select – query on status
iv.	Single select  -- query on resourceid.
*/

let dbparams =
{
    host: 'localhost',
    user: 'root',
    password: 'cdac',
    database: 'pleasework',
    port: 3306
};
const mysql = require('mysql2');
const con = mysql.createConnection(dbparams);

let id = 2;
let name = 'machinary';
let status = true;

con.query('insert into resourse(id,name,status) values(?,?,?)',
    [id,name,status],
    (err, res1) => {
        if (err) {
            console.log("error");
        } 
        else {
            console.log(res1.affectedRows)
        }
    }
);