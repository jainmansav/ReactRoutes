const express = require('express');
const router = express.Router();
const { connectToDB } = require('./db'); // Update the path if needed

router.get('/api/data', async (req, res) => {
  try {
    const db = await connectToDB();
    const collection = db.collection('People');
    const data = await collection.find({}).toArray();
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/api/data', async (req, res) => {
  try {
    const db = await connectToDB();
    const collection = db.collection('People');
    const data = await collection.insertMany(req.body);
    res.json(data);
  } catch (error) {
    console.error('Error saving data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.put('/api/data/:_id', async (req, res) => {
  

  try {
    const db = await connectToDB();
    const collection = db.collection('People');
    await collection.updateOne(
      { email: email },
      { $set: { first_name, last_name, email, _id } },
      { upsert: true }
    );

    return res.json({ message: 'User data updated/inserted successfully' });
  } catch (err) {
    console.error('Error updating/inserting data:', err);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
