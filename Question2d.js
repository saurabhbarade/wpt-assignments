//multi select
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

let name = "machinary";
con.query('select *from resourse where name=?',
    [name],
    (err, rows) => {
        if (err) {
            console.log("error");
        }
        else {
            if (rows.length > 0) {
                for (let i = 0; i < rows.length; i++)
                    console.log(rows[i].id+ " " + rows[i].name + " " +
                        rows[i].status);
            }
            else
                console.log("no resourse found with " + id)
        }
    }
);