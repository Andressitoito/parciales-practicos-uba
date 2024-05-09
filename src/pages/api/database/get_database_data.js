import { getData } from "../../../../lib/mongodb/database_interaction/getData";

async function handler(req, res) {
	if (req.method === "GET") {
		let documents;
		try {
			documents = await getData();
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
			message: "Get all data successfully",
			documents,
		});
	}
}

export default handler;
