const express = require('express');
const mysql = require('mysql');
const app = express();


app.use(express.json({ limit: '500mb' }));
app.use(express.urlencoded({
    extended: true,
    limit: '500mb'
}));


app.use(function (req, res, next) 
{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

let con = mysql.createConnection(
    {
    host: "localhost",
    user: "root",
    password: "",
    database: "pro",
});

con.connect(function (err) 
{
    if (err) throw err;
    console.log("Connected!");
});

app.get('/get', (req, res) => 
{
    con.query("SELECT name, id FROM doctor", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
});

app.listen(8080);

// app.listen(3000, () => {
//     console.log("Cholse");
// });