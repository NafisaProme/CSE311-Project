const { response } = require('express');
const express = require('express');
const mysql = require('mysql');
const app = express();
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer');
const path = require('path');

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
    database: "project",
});

con.connect(function (err)
{
    if(err) throw err;
    console.log("Connected!");
})

// email sender 
// app.engine('handlebars', exphbs);
// app.set('view engine', 'handlebars');

// app.use('/public', express.static(path.join(__dirname, 'public')));

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// app.get('/', (req, res) =>
// {
//     res.send('contact');
// });

app.get('/get_data', (req, res) => 
{
    con.query("SELECT * FROM doctor", function (err, result, fields)
    {
        if (err) throw err;
        console.log(result);
        
        res.send(result);
    });
});

app.post('/create', (req, res) =>
{
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const birth_date = req.body.birth_date;

    let sql = `insert into doctor values(null, '${username}', '${password}', '${email}', '${birth_date}')`;

    con.query(sql, function(err, result)
    {
        if(err) throw err;
    })
})

app.post('/login', (req, res) =>
{
    const username = req.body.username;
    const password = req.body.password;

    let sql = `select * from doctor where name = '${username}' and password = '${password}'`;

    con.query(sql, function(err, result, fields)
    {
        if(err) throw err;

        if(result.length > 0)
            res.send(result);
        else
            res.send("Wrong Username or password!!");
    })
})

// app.post('/login', (req, res) => {
//     let name = req.body.name;
//     let address = req.body.address;

//     console.log(name);
//     console.log(address);

//     let sql = `select * from customers where name = '${name}' and address = '${address}'`;
//     con.query(sql, function (err, result, fields) {
//         if (err) throw err;

//         console.log(result);

//         if (result.length > 0) {
//             res.send("Successful");
//         }
//         else {
//             res.send("Hoynai");
//         }
//     });
// })

app.listen(8080);