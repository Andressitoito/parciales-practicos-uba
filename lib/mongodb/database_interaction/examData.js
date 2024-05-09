import { MongoClient } from 'mongodb';

const uri = `${process.env.MONGO_CONNECTION_STRING}`;
const client = new MongoClient(uri);

async function saveExamResult(score, materia) {
  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db('tu_base_de_datos');
    const collection = db.collection('examResults');

    // Incrementar el contador en la base de datos
    await collection.updateOne({}, { $inc: { counter: 1 } }, { upsert: true });

    // Guardar el resultado del examen
    await collection.insertOne({ score, materia });

    console.log('Exam result saved successfully');
  } catch (error) {
    console.error('Error saving exam result:', error);
  } finally {
    await client.close();
    console.log('Disconnected from MongoDB');
  }
}

// Ejemplo de uso
const score = 85;
const materia = 'Matemáticas';
saveExamResult(score, materia);
