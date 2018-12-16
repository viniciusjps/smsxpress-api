const express = require('express');
const Sms = require('../models/Sms');
const router = express.Router();

const accountSid = 'ACe187eec0632a2f37e55b2af5dd0ec386';
const authToken = 'c82d1c862e5d52cb8f20006f2fa0c582';
const client = require('twilio')(accountSid, authToken);

router.get('/', async (req, res) => {
  try {
    const sms = await Sms.find();
    return res.send(sms);
  } catch (error) {
    return res.status(400).send({ error: 'Error getting the data, please try again' })
  }
});

router.post('/send', async (req, res) => {
  try {
    const sms = await Sms.create(req.body);
    console.log(sms);
    await client.messages
      .create({
        body: sms.text,
        from: '+19805332276',
        to: '+55' + sms.to[0].substr(1, 2) + sms.to[0].substr(4, 5) + sms.to[0].substr(10, 4)
      })
      .then(message => console.log(message.sid))
      .done();

    return res.send({ body: sms, protocol: sms.protocol });
  } catch (error) {
    return res.status(400).send({ error: 'Error sending, please try again' });
  }
});

router.get('/:smsId', async (req, res) => {
  try {
    const sms = await Sms.find({ protocol: req.params.smsId });
    return res.send(sms);
  } catch (error) {
    return res.status(400).send({ error: 'Error getting the sms, please try again' });
  }
});

router.delete('/delete/:smsId', async (req, res) => {
  try {
    const sms = await Sms.findByIdAndDelete(req.params.smsId);
    return res.send({ status: 'Deleted' });
  } catch (error) {
    return res.status(400).send({ error: 'Error deleting the sms, please try again' });
  }
});

module.exports = app => app.use('/api/sms', router);
