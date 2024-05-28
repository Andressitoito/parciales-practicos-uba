import mongoose from "mongoose";
import { mongo_connect } from "../mongo_connect";

export async function actualizar_materia_database(score, materia) {
	try {
		await mongo_connect();

		const practicasParcialesDB = mongoose.connection.useDb("practicas_parciales");
		const collection = practicasParcialesDB.collection("Counters");

		const materiaData = {
			ICSE: "663d28f7b5a35145b29d6a0b",
			PC: "adsasdasdas",
		};

		const counter = await collection.findOne({
			_id: mongoose.Types.ObjectId.createFromHexString(materiaData[materia]),
		});

    // console.log("counter ", counter)

		let updateFields = {
			$inc: { count: 1 },
		};

		if (score >= 4) {
			updateFields.$inc.ok = 1;
		} else {
			updateFields.$inc.fail = 1;
		}

		const result = await collection.updateOne(
			{ _id: mongoose.Types.ObjectId.createFromHexString(materiaData[materia]) },
			updateFields
		);

		return result.acknowledged;
	} catch (error) {
		console.error("Error al recuperar los datos:", error);
		return -1; // Devuelve -1 en caso de error
	} finally {
		await mongoose.connection.close();
		// console.log("Desconectado de MongoDB");
	}
}
