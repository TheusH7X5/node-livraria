import {livros} from "../models/index.js";

class LivroController {
  static listarLivros = async (req, res, next) => {
    try {

      const livrosResultado = await livros
        .find()
        .populate("autor editora", "nome")
        .exec();
      res.status(200).json(livrosResultado);
    } catch (error) {
      next(error);
    }
  };

  static listarLivroPorId = async (req, res, next) => {
    try {
      const id = req.params.id;
      const livrosResultado = await livros
        .findById(id)
        .populate("autor editora")
        .exec();
      res.status(200).send(livrosResultado);
    } catch (error) {
      next(error);
    }
  };

  static cadastrarLivro = async (req, res, next) => {
    try {
      let livro = new livros(req.body);
      const livrosResultado = await livro.save();
      res.status(201).send(livrosResultado.toJSON());
    } catch (error) {
      next(error);
    }
  };

  static atualizarLivro = async (req, res, next) => {
    try {
      const id = req.params.id;
      const livrosResultado = await livros.findByIdAndUpdate(id, {
        $set: req.body,
      });
      res.status(200).send({
        message: `Livro ${livrosResultado.titulo} atualizado com sucesso!`,
      });
    } catch (error) {
      next(error);
    }
  };

  static excluirLivro = async (req, res, next) => {
    try {
      const id = req.params.id;
      const livrosResultado = await livros.findByIdAndDelete(id);
      res.status(200).send({
        message: `Livro ${livrosResultado.titulo} removido com sucesso!`,
      });
    } catch (error) {
      next(error);
    }
  };

  static listarLivroPorEditora = async (req, res, next) => {
    try {
      const editora = req.query.editora;
      const response = await livros.find({ editora: editora }, {});
      res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  };
}

export default LivroController;
