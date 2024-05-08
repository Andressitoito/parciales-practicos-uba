import mongoose from "mongoose";

const uri = process.env.MONGO_CONNECTION_STRING;

export async function getData() {
	try {
		await mongoose.connect(uri);

		if (mongoose.connection.readyState !== 1) {
			throw new Error("No se pudo establecer la conexión a MongoDB");
		}

		// Obtenemos una referencia a la colección "users" de la base de datos "sample_mflix"
		const sampleMflixDB = mongoose.connection.useDb("sample_mflix");
		const usersCollection = sampleMflixDB.collection("users");

		// Ejecutamos una consulta para obtener los documentos de la colección "users"
		const documents = await usersCollection.find({}).toArray();

		return documents;
	} catch (error) {
		console.error("Error al recuperar los datos:", error);
		return []; // Devolvemos un array vacío en caso de error
	} finally {
		await mongoose.connection.close();
		console.log("Desconectado de MongoDB");
	}
}
