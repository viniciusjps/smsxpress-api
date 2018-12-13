const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send({ status: 'working' });
});

require('./controllers/smsController')(app);

app.listen(port, function() {
  console.log('listening on port ' + port);
});