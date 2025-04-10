import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

/**
 * Connects to the MongoDB database
 * If the connection already exists, it doesn't do anything
 * If the connection doesn't exist, it creates a new connection
 * @returns {Promise<void>}
 */
async function dbConnection(): Promise<void> {
  if (connection.isConnected) {
    console.log("Already connected to database");
    return;
  }

  try {
    const db = await mongoose.connect(
      process.env.MONGODB_URI as string);
    connection.isConnected = db.connection.readyState;
    console.log("Db connected successfully");
  } catch (error) {
    console.error("Connection failed", error);
    process.exit(1);
  }
}

export default dbConnection;
