const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const http = require('http');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', function(req, res) {
  res.status(200).send("it works");
});

var server = app.listen(process.env.OPENSHIFT_NODEJS_PORT || 3000, process.env.OPENSHIFT_NODEJS_IP || 'localhost',function () {
  console.log("Listening on port %s", server.address().port);
});