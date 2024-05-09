import mongoose from "mongoose";
import { mongo_connect } from "../mongo_connect";

export async function getData() {
	try {
		await mongo_connect();

		const sampleMflixDB = mongoose.connection.useDb("sample_mflix");
		const usersCollection = sampleMflixDB.collection("users");

		const documents = await usersCollection.find({}).toArray();

		return documents;
	} catch (error) {
		console.error("Error al recuperar los datos:", error);
		return [];
	} finally {
		await mongoose.connection.close();
		console.log("Desconectado de MongoDB");
	}
}
