// including the modules 
var http = require('http'); //http server
var url = require('url'); //url parsings
var fs = require ('fs'); // file read, write and all the functions
var events = require('events'); // events and event handlers
var formidable = require('formidable'); // uploading files

// import own modules 
// let date_time = require('./nodeJS_demo');

// function to create a server 
// http.createServer(function(req, res)
// {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.end('Hello Prome!');
// }).listen(8080);

// the function to be exported 
// exports.myDateTime = function ()
// {
//     return Date();
// };

// slicing url
// http.createServer(function(req, res)
// {
//     res.writeHead(200, {'Content-Type' : 'text/html'});
//     let q = url.parse(req.url, true).query;
//     let txt = q.year + " " + q.month;
//     res.end(txt);
// }).listen(8080);

// printing date and time
// http.createServer(function(req, res)
// {
//     res.writeHead(200, {'Content-Type' : 'text/html'});
//     res.write("The date and time are currently: " + date_time.myDateTime());
//     res.end();
// }).listen(8080);

// var rs = fs.createReadStream('readme.txt');
// rs.on('open', function()
// {
//     console.log('The file is open');
// });

// read from a file
// fs.readFile('readme.txt', 'utf8', function(err, demo)
// {
//     // console.log(demo);
//     fs.writeFileSync('output.txt', demo);
// });

// write into a file
// fs.writeFileSync('output.txt', readMe, 'utf-8');

// writing an array into a file
// var num = [[1, 2], [3, 4]];
// var file = fs.createWriteStream('array.txt');
// file.on('error', function(err)
// {

// });

// num.forEach(function(v)
// {
//     file.write(v.join(', ') + '\n');
// })
// file.end();

// //handling an event and showing the outcome
// var eventEmitter = new events.EventEmitter();
// //Create an event handler:
// var myEventHandler = function () {
//     console.log('I hear a scream!');
// }
// //Assign the eventhandler to an event:
// eventEmitter.on('scream', myEventHandler);
// //Fire the 'scream' event:
// eventEmitter.emit('scream');

