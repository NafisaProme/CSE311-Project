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
    database: "project",
});

con.connect(function (err)
{
    if(err) throw err;
    console.log("Connected!");
})

app.get('/get_data', (req, res) => 
{
    con.query("SELECT * FROM patient", function (err, result, fields)
    {
        if (err) throw err;
        // console.log(result);
        
        res.send(result);
    });
});

app.get('/get_data_doctor', (req, res) => 
{
    con.query("SELECT * FROM doctor", function (err, result, fields)
    {
        if (err) throw err;
        console.log(result);
        
        res.send(result);
    });
});

app.post('/create_patient', (req, res) =>
{
    const fname = req.body.fname;
    const lname = req.body.lname;
    const username = req.body.username;
    const email = req.body.email;
    const gender = req.body.gender;
    const blood = req.body.blood;
    const birth_date = req.body.birth_date;
    const phone = req.body.phone;
    const occupation = req.body.occupation;
    const address = req.body.address;
    const password = req.body.password;

    console.log(occupation);

    let sql = `insert into patient values(null, '${username}','${fname}', '${lname}', '${phone}', '${email}','${gender}','${blood}','${birth_date}','${occupation}','${address}','${password}')`;

    con.query(sql, function(err, result)
    {
        if(err) throw err;
    })
})

app.post('/create_doctor', (req, res) =>
{
    const fname = req.body.fname;
    const lname = req.body.lname;
    const username = req.body.username;
    const email = req.body.email;
    const gender = req.body.gender;
    const blood = req.body.blood;
    const birth_date = req.body.birth_date;
    const phone = req.body.phone;
    const spec = req.body.spec;
    const address = req.body.address;
    const password = req.body.password;

    let sql = `insert into doctor values(null, '${username}','${fname}', '${lname}', '${phone}', '${email}','${gender}','${blood}','${birth_date}','${spec}','${address}','${password}')`;

    con.query(sql, function(err, result)
    {
        if(err) throw err;
    })
})

app.post('/appoint', (req, res) =>
{
    const app_user_id = req.body.app_user_id;
    const app_doc_id = req.body.app_doc_id;
    const app_username = req.body.app_username;
    const app_date = req.body.app_date;

    let sql = `insert into appointment values(null, '${app_user_id}', '${app_doc_id}', '${app_date}')`;

    con.query(sql, function(err, result)
    {
        if(err) throw err;
        console.log('Appointment done!');
    })
})

app.post('/login', (req, res) =>
{
    const username = req.body.username;
    const password = req.body.password;

    let sql = `select * from patient where username = '${username}' and pass = '${password}'`;

    con.query(sql, function(err, result, fields)
    {
        if(err) throw err;

        if(result.length > 0)
            res.send(result);
        else
            res.send("Wrong Username or password!!");
    })
})

app.post('/login_doctor', (req, res) =>
{
    const username = req.body.username;
    const password = req.body.password;

    let sql = `select * from doctor where username = '${username}' and pass = '${password}'`;

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