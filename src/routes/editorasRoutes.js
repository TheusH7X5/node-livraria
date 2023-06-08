import express from "express";
import EditoraController from "../controllers/editorasControllers.js";
import bodyParser from "body-parser";
import paginar from "../middlewares/paginar.js";

const router = express.Router();

router.use(bodyParser.json());

router
  .get("/editoras", EditoraController.listarEditoras, paginar)
  .get("/editoras/:id", EditoraController.listarEditoraPorId)
  .post("/editoras", EditoraController.cadastrarEditora)
  .put("/editoras/:id", EditoraController.atualizarEditora)
  .delete("/editoras/:id", EditoraController.excluirEditora);
export default router;
