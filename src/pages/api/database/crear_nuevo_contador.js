import { create_counter_in_database } from "../../../../lib/mongodb/database_interaction/crear_contador";

async function handler(req, res) {
 if (req.method === "POST") {
  let newCounter
  try {
		newCounter =	await create_counter_in_database();
  } catch (error) {
   console.log("error ", error);

   return res.status(500).json({
    status: 500,
    message: "Something went wrong in the server connection",
    error: error.toString(),
   });
  }

  res.status(201).json({
   status: 200,
   message: "New counter created",
   newCounter
  });
 }
}

export default handler;
