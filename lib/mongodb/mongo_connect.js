import mongoose from "mongoose";

mongoose.set("debug", true);

export const mongo_connect = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      mongoose.set("strictQuery", true);
      await mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Connected to the database");
    } else {
      console.log("There is already an active connection");
    }
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw error;
  }
};

