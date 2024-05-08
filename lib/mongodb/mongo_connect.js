// import mongoose from "mongoose";

// mongoose.set("debug", true);

// export const mongo_connect = async () => {
//   try {
//     if (mongoose.connection.readyState === 0) {
//       mongoose.set("strictQuery", true);
//       await mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//       });
//       console.log("Connected to the database");
//     } else {
//       console.log("There is already an active connection");
//     }
//   } catch (error) {
//     console.error("Error connecting to the database:", error);
//     throw error;
//   }
// };


// import { MongoClient } from 'mongodb';

// const uri = `${process.env.MONGO_CONNECTION_STRING}`;
// const client = new MongoClient(uri);

// export async function getData() {
//  try {
//    await client.connect();
//    console.log('Connected to MongoDB');

//    const db = client.db('sample_mflix');
//    const collection = db.collection('users');



//    const documents = await collection.find({}).toArray();
//    console.log('Documents in sample_mflix collection:', documents);

//    return documents

//  } catch (error) {
//    console.error('Error retrieving data:', error);
//  } finally {
//    await client.close();
//    console.log('Disconnected from MongoDB');
//  }
// }
