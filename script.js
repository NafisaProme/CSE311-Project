var express = require('express');
var mysql = require('mysql');
var app = express();

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'pro'
});

connection.connect(function(err)
{
    if(err) return err;

    console.log('Connected');
});

app.get('/', function(req, res)
{
    connection.query('select * from info', function(err, res, fields)
    {
        if(err) return err;

        console.log(res);
    })
})

app.listen(8080);