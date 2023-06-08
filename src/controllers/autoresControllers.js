import NaoEncontrado from "../erros/NaoEncontrado.js";
import { autores } from "../models/index.js";

class AutorController {
  static listarAutores = async (req, res, next) => {
    try {
      const autoresResultado = autores.find();
      req.resultado = autoresResultado;

      next();
    } catch (error) {
      console.error(error);
      next(error);
    }
  };

  static listarAutorPorId = async (req, res, next) => {
    try {
      const id = req.params.id;
      const autoresResultado = await autores.findById(id);

      if (autoresResultado !== null) {
        res.status(200).send(autoresResultado);
      } else {
        next(new NaoEncontrado("Id do autor não localizado"));
      }
    } catch (error) {
      next(error);
    }
  };

  static cadastrarAutor = async (req, res, next) => {
    try {
      let autor = new autores(req.body);
      const autoresResultado = await autor.save();
      res.status(201).send(autoresResultado.toJSON());
    } catch (error) {
      next(error);
    }
  };

  static atualizarAutor = async (req, res, next) => {
    try {
      const id = req.params.id;
      const autoresResultado = await autores.findByIdAndUpdate(id, {
        $set: req.body,
      });
      res.status(200).send({
        message: `Autor ${autoresResultado.nome} atualizado com sucesso!`,
      });
    } catch (error) {
      next(error);
    }
  };

  static excluirAutor = async (req, res, next) => {
    try {
      const id = req.params.id;
      const autoresResultado = await autores.findByIdAndDelete(id);
      res.status(200).send({
        message: `Autor ${autoresResultado.nome} removido com sucesso!`,
      });
    } catch (error) {
      next(error);
    }
  };
}

export default AutorController;
