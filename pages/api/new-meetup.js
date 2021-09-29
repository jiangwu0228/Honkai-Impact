import { MongoClient } from "mongodb";

// /api/new-meetup

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://jiangwu0228:UKUj4Pgi5wTwktw@cluster0.yl0xg.mongodb.net/HonkaiImpact3?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection("HonkaiImpact3");

    const result = await meetupsCollection.insertOne({ data });

    console.log(result);
    
    client.close();
    res.status(201).json({message: 'Meetup inserted!'})
  }
}

export default handler;
