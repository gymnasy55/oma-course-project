var express = require('express');
var cors = require('cors');

var app = express();
var PORT = 8080;

app.use(cors());

app.get('/', cors(), function (req, res) {
  var developers = require('./developers.json');
  res.send(JSON.stringify(developers));
});

app.listen(PORT, function () {
  console.log(`Server has been started on port ${PORT}...`);
});