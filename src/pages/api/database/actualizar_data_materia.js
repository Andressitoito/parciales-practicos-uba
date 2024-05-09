import { actualizar_materia_database } from "../../../../lib/mongodb/database_interaction/actualizar_materia_database";

async function handler(req, res) {
	if (req.method === "POST") {
		let totalExamsTaken;

		try {
			totalExamsTaken = await actualizar_materia_database();
		} catch (error) {
			console.log("error ", error);

			return res.status(500).json({
				status: 500,
				message: "Something went wrong in the server connection",
				error: error.toString(),
			});
		}

		res.status(200).json({
			status: 200,
			message: "Get total exams taken successfully",
			totalExamsTaken,
		});
	}
}

export default handler;
