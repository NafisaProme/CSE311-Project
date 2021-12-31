const express = require('express');
const mysql = require('mysql');
const app = express();


app.use(express.json({limit: '500mb'}));
app.use(express.urlencoded({
  extended: true,
  limit: '500mb'
}));


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

let con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "project",
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.get('/get', (req, res) => {
    con.query("SELECT * FROM doctor", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
});

app.post('/insert', (req, res) => {
    console.log(req.body);

    let name = req.body.name;
    let address = req.body.address;

    let sql = `INSERT INTO customers (name, address) VALUES ('${name}', '${address}')`;
    con.query(sql, function (err, result) {
        if (err) {
            throw err;
        };
        console.log("1 record inserted");
        res.send("Done");
    });
});

app.post('/login', (req, res) =>
{
	let name = req.body.name;
	let address = req.body.address;

	console.log(name);
	console.log(address);

	let sql = `select * from customers where name = '${name}' and address = '${address}'`;
	con.query(sql, function(err, result, fields)
	{
		if(err) throw err;

		console.log(result);

		if(result.length > 0)
		{
			res.send("Successful");
		}
		else
		{
			res.send("Hoynai");
		}
	});
})

app.listen(3000, () => {
    console.log("Cholse");
});