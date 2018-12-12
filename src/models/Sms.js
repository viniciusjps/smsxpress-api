const mongoose = require('../database');

const SmsSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  from: {
    type: String,
    required: true
  },
  to: [{
    type: String,
    required: true
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Sms = mongoose.model('Sms', SmsSchema);

module.exports = Sms;