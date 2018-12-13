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
  protocol: {
    type: String,
    unique: true,
    validate: {
      validator: v => {
        return /\d{4}-\d{4}-\d{4}/.test(v);
      }
    },
    default: function () {
      return Math.floor(1000 + Math.random() * 9000) + '-' +
        Math.floor(1000 + Math.random() * 9000) + '-' +
        Math.floor(1000 + Math.random() * 9000);
    }
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Sms = mongoose.model('Sms', SmsSchema);

module.exports = Sms;