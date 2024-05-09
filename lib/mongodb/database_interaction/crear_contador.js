import mongoose from "mongoose";
import ExamCounterModel from "../../../src/pages/api/models/counterModel";
import { mongo_connect } from "../mongo_connect";

export async function create_counter_in_database() {
 try {
  await mongo_connect()
  // mongoose.connection.useDb("practicas_parciales");
  // Obtener una referencia a la colección

  const practicasParcialesDB = mongoose.connection.useDb("practicas_parciales");
  const collection = practicasParcialesDB.collection("Counters");

  // Insertar un documento en la colección
  // Crear un nuevo contador
  const newCounter = new ExamCounterModel({
   _id: new mongoose.Types.ObjectId(), // Crear un nuevo ObjectId
   name: "PC",
   count: 0
  });
  console.log(newCounter)

  const result = await collection.insertOne(newCounter);
  console.log("result", result)
  // Devolver el nuevo contador creado
  return newCounter;
 } catch (error) {
  console.error("Error al crear el contador");
  throw error;
 } finally {
  await mongoose.connection.close();
  console.log("Desconectado de MongoDB");
 }
}
