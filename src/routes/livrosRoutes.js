import express from "express";
import LivroController from "../controllers/livrosControllers.js";
import bodyParser from "body-parser";

const router = express.Router();

router.use(bodyParser.json());

router
  .get("/livros", LivroController.listarLivros)
  .get("/livros/busca", LivroController.listarLivroPorEditora)
  .get("/livros/:id", LivroController.listarLivroPorId)
  .post("/livros", LivroController.cadastrarLivro)
  .put("/livros/:id", LivroController.atualizarLivro)
  .delete("/livros/:id", LivroController.excluirLivro);
export default router;
