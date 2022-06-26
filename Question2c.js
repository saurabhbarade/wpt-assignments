//Single select
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

let id = 1;
con.query('select *from resourse where id=?',
    [id],
    (err, rows) => {
        if (err) {
            console.log("error");
        }
        else {
            if (rows.length > 0)
                console.log(rows[0].id + " " + rows[0].name + " " +
                    rows[0].status);
            else
                console.log("no resourse found with " + id);
        }
    }
);