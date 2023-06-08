import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conectado ao banco de dados MongoDB");
  })
  .catch((error) => {
    console.error("Erro ao conectar ao banco de dados:", error);
  });

let db = mongoose.connection;

export default db;
