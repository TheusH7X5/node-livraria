import express from "express";
import AutorController from "../controllers/autoresControllers.js";
import bodyParser from "body-parser";
import paginar from "../middlewares/paginar.js";

const router = express.Router();

router.use(bodyParser.json());

router
  .get("/autores", AutorController.listarAutores, paginar)
  .get("/autores/:id", AutorController.listarAutorPorId)
  .post("/autores", AutorController.cadastrarAutor)
  .put("/autores/:id", AutorController.atualizarAutor)
  .delete("/autores/:id", AutorController.excluirAutor);
export default router;
