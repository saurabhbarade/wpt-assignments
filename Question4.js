const express = require("express");
 const app = express();

const mysql = require("mysql2"); 
 let dbparams = {
     host: "localhost",
     user: "root",
     password: "cdac",
     database: "pleasework",
     port: 3306,
    };

const con = mysql.createConnection(dbparams);
app.use(express.static("html"));


app.get("/getAccDetails", (req, resp) => {
     let accno1 = {accno:req.query.accno}
    
     let accStatus = {
        status: false, accdetails: {
            accno
                : 0, balance: 0
        }
    };
    
     con.query(
        'select accno,balance from AccDetails where accno=?',
        [accno1.accno],
        (err, rows) => {
         if(err) {
             console.log(err);
            
        } else {
             if(rows.length > 0) {
         accStatus.status = true;
         accStatus.accdetails = rows[0];
    }
    
}
 resp.send(accStatus);
 }
 );
});
app.listen(91, function () {
     console.log("start 91");
    
});