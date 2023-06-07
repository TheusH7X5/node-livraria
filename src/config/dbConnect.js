import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://matheush7x5:123@cluster0.kdnqmll.mongodb.net/aula-node-express-mongodb"
);

let db = mongoose.connection;

export default db;
