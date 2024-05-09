import mongoose from "mongoose";
import ExamCounterModel from "../../../src/pages/api/models/counterModel";

const uri = process.env.MONGO_CONNECTION_STRING;

export async function actualizar_materia_database() {
  try {
    await mongoose.connect(uri);

    if (mongoose.connection.readyState !== 1) {
      throw new Error("No se pudo establecer la conexión a MongoDB");
    }

    const practicas_parciales = mongoose.connection.useDb("practicas_parciales");

    let examCounter = await ExamCounterModel.findOne();

    if (!examCounter) {
      examCounter = new ExamCounterModel();
    }

    examCounter.totalExamsTaken++;

    await examCounter.save();

    return examCounter.totalExamsTaken;
  } catch (error) {
    console.error("Error al recuperar los datos:", error);
    return -1; // Devuelve -1 en caso de error
  } finally {
    await mongoose.connection.close();
    console.log("Desconectado de MongoDB");
  }
}
