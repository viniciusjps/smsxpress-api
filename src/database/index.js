const mongoose = require('mongoose');

mongoose.connect('mongodb://admin:admin404@ds125272.mlab.com:25272/smsxpress', { useNewUrlParser: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;