import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config(); 

let cachedClient = null;

export default async function handler(req, res) {
  console.log("Handler called with method:", req.method);

  if (req.method === 'POST') {
    try {
      const { name, email, message } = req.body;
      console.log("Received data:", { name, email, message });

      if (!name || !email || !message) {
        console.error("Validation error: Missing fields");
        return res.status(400).json({ error: 'All fields are required' });
      }

      const client = await connectToDatabase();
      const db = client.db(); // Connects to 'fantastical' as per MONGODB_URI
      console.log("Connected to database:", db.databaseName); // Logs the connected database name

      const collection = db.collection('contacts');
      console.log("Using collection:", collection.collectionName); // Logs the collection name

      const result = await collection.insertOne({
        name,
        email,
        message,
        createdAt: new Date(),
      });

      console.log("Data inserted successfully:", result);

      res.status(200).json({ message: 'Message sent successfully', result });
    } catch (error) {
      console.error("Error occurred:", error);
      res.status(500).json({ error: 'Failed to send message' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

async function connectToDatabase() {
  if (cachedClient) {
    console.log("Using cached MongoDB client.");
    return cachedClient;
  }

  const client = new MongoClient(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log("Connecting to MongoDB...");

  await client.connect();
  cachedClient = client;

  console.log("MongoDB connected.");

  return client;
}
