const express = require('express');
const Sms = require('../models/Sms');
const router = express.Router();

router.post('/send', async (req, res) => {
  try {
    const sms = await Sms.create(req.body);
    return res.send({ sms });
  } catch (error) {
    return res.status(400).send({ error: 'Error' });
  }
});

module.exports = app => app.use('/sms', router);