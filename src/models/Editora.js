import mongoose from "mongoose";

const editoraSchema = new mongoose.Schema(
  {
    id: { type: String },
    nome: {
      type: String,
      required: [true, "O nome da editora é obrigatória"],
      enum: {
        values: ["Casa do código", "Alura"],
        message: "A editora {VALUE} não é um valor permitido",
      },
    },
  },
  {
    versionKey: false,
  }
);

const editoras = mongoose.model("editoras", editoraSchema);

export default editoras;
