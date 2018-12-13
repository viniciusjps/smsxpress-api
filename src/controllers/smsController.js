const express = require('express');
const Sms = require('../models/Sms');
const router = express.Router();

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
    return res.send({ sms });
  } catch (error) {
    return res.status(400).send({ error: 'Error sending, please try again' });
  }
});

router.get('/:smsId', async (req, res) => {
  try {
    const sms = await Sms.findById(req.params.smsId);
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