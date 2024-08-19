const express = require('express');
const { MongoClient } = require('mongodb');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

let cachedClient = null;

async function connectToDatabase() {
  if (cachedClient) {
    return cachedClient;
  }

  const client = new MongoClient(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  await client.connect();
  cachedClient = client;

  return client;
}

app.post('/api/submitContact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const client = await connectToDatabase();
    const db = client.db('fantastical');
    const collection = db.collection('contacts');

    const result = await collection.insertOne({
      name,
      email,
      message,
      createdAt: new Date(),
    });

    res.status(200).json({ message: 'Message sent successfully', result });
  } catch (error) {
    console.error('Error saving data to MongoDB:', error);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
