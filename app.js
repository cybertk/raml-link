var express = require('express');
var path = require('path');
var cors = require('cors')

var app = module.exports = express();

// Openshift first
host = process.env.OPENSHIFT_NODEJS_IP || process.env.HOST || '0.0.0.0';
port = process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 3000;

app.use(cors());
app.use(express.static(path.join(__dirname, 'ramls')));

app.get('/', function(req, res) {
  res.redirect('https://github.com/cybertk/raml-link')
});

app.listen(port, host, function () {
  console.log( "Listening on " + host + ":" + port )
});
