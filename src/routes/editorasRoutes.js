import express from "express";
import EditoraController from "../controllers/editorasControllers.js";
import bodyParser from "body-parser";

const router = express.Router();

router.use(bodyParser.json());

router
  .get("/editoras", EditoraController.listarEditoras)
  .get("/editoras/:id", EditoraController.listarEditoraPorId)
  .post("/editoras", EditoraController.cadastrarEditora)
  .put("/editoras/:id", EditoraController.atualizarEditora)
  .delete("/editoras/:id", EditoraController.excluirEditora);
export default router;
