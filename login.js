const mysql = require("mysql");
const express = require('express');

const app = express();
app.use("/assets", express.static("assets"));

const connection = mysql.createConnection(
{
    host: "localhost",
    user: "root",
    password: "",
    database: "pro"
}
)

connection.connect(function(err)
{
    if(err) return err;

    console.log("Connected");
})

app.get("/", function(req, res)
{
    res.sendFile(__dirname + "/login.html");
})

app.post("/", function(req, res)
{
    connection.query("Select * from doctor where name = ? and id = ?", function(error, results, fields)
    {
        if(results.length > 0)
        {
            res.redirect("/welcome.html");
        }
    })
})

app.listen(8080);