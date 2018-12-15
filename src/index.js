const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send({ status: 'working' });
});

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Credentials', false);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  next();
}

require('./controllers/smsController')(app);

app.listen(port, function() {
  console.log('listening on port ' + port);
});
