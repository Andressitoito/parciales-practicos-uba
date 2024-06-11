import mongoose from "mongoose";
import { mongo_connect } from "../mongo_connect";

export async function getData(materia) {
	try {
		await mongo_connect();

		const practicasParcialesDB = mongoose.connection.useDb("practicas_parciales");
		const collection = practicasParcialesDB.collection("Counters");

		const materiaData = {
			ICSE: "663d28f7b5a35145b29d6a0b",
			PC: "adsasdasdas",
		};

		const documents = await collection.findOne({
			_id: mongoose.Types.ObjectId.createFromHexString(materiaData[materia]),
		});

		return documents;
	} catch (error) {
		console.error("Error al recuperar los datos:", error);
		return [];
	} finally {
		await mongoose.connection.close();
		// console.log("Desconectado de MongoDB");
	}
}
