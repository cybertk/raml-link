var express = require('express');
var path = require('path');
var cors = require('cors')

var app = module.exports = express();

app.set('port', process.env.PORT || 3000);

app.use(cors())
app.use(express.static(path.join(__dirname, 'ramls')));

if (!module.parent) {
  var port = app.get('port');
  app.listen(port);
  console.log('listening on port ' + port);
}
