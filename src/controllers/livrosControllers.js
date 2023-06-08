import { autores, editoras, livros } from "../models/index.js";

class LivroController {
  static listarLivros = async (req, res, next) => {
    try {
      const buscaLivros = livros.find();
      req.resultado = buscaLivros;

      next();
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

  static listarLivroPorFiltro = async (req, res, next) => {
    try {
      const busca = await processoBusca(req.query);

      if (busca !== null) {
        const livrosResultado = livros.find(busca).populate("autor editora");

        req.resultado = livrosResultado;
        
        next();
      } else {
        res.status(200).send([]);
      }
    } catch (error) {
      next(error);
    }
  };
}

async function processoBusca(parametros) {
  const { nomeEditora, titulo, minPagina, maxPagina, nomeAutor } = parametros;

  let busca = {};

  if (titulo) busca.titulo = { $regex: titulo, $options: "i" };

  if (minPagina || maxPagina) busca.numeroPaginas = {};

  if (minPagina) busca.numeroPaginas.$gte = minPagina;
  if (maxPagina) busca.numeroPaginas.$lte = maxPagina;

  if (nomeAutor) {
    const autor = await autores.findOne({
      nome: { $regex: nomeAutor, $options: "i" },
    });

    if (autor !== null) {
      busca.autor = autor._id;
    } else {
      busca = null;
    }
  }

  if (nomeEditora) {
    const editora = await editoras.findOne({
      nome: { $regex: nomeEditora, $options: "i" },
    });

    if (editora !== null) {
      busca.editora = editora._id;
    } else {
      busca = null;
    }
  }

  return busca;
}

export default LivroController;
