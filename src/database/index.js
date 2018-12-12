const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/smsexpress', { useNewUrlParser: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;