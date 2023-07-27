const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://jainmansav01:g4LpcIRE8l0tH3pt@cluster0.tgno7zb.mongodb.net/'; // Replace this with your MongoDB URL
const dbName = 'ImpData';

const client = new MongoClient(url, { useUnifiedTopology: true });

async function connectToDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    return client.db(dbName); // Ensure you are returning the 'db' object here
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}

module.exports = { connectToDB };
