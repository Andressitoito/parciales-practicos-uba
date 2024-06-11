import { actualizar_materia_database } from "../../../../lib/mongodb/database_interaction/actualizar_materia_database";

async function handler(req, res) {
	if (req.method === "POST") {
		let totalExamsTaken;
		try {
			const { score, materia } = req.body;

			totalExamsTaken = await actualizar_materia_database(score, materia);
			// console.log("totalExamsTaken ", totalExamsTaken)
		} catch (error) {
			return res.status(500).json({
				status: 500,
				message: "Something went wrong in the server connection",
				error: error.toString(),
			});
		}

		res.status(201).json({
			status: 201,
			message: "Get exam data",
			totalExamsTaken,
		});
	}
}

export default handler;
