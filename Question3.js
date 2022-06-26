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


app.get("/getAreaDetails", (req, resp) => {
     let pincode1 = {pincode:req.query.pincode}
    
     let pinStatus = {
        status: false, areadetails: {
            pincode
                : 0, area: ""
        }
    };
    
     con.query(
        'select pincode,area from address where pincode=?',
        [pincode1.pincode],
        (err, rows) => {
         if(err) {
             console.log(err);
            
        } else {
             if(rows.length > 0) {
         pinStatus.status = true;
         pinStatus.areadetails = rows[0];
    }
    
}
 resp.send(pinStatus);
 }
 );
});
app.listen(90, function () {
     console.log("start 90");
    
});