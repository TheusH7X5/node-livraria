import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

let db = mongoose.connection;

export default db;
