import {editoras} from "../models/index.js";

class EditoraController {
  static listarEditoras = async (req, res, next) => {
    try {
      const editorasResultado = await editoras.find();
      res.status(200).json(editorasResultado);
    } catch (error) {
      next(error);
    }
  };

  static listarEditoraPorId = async (req, res, next) => {
    try {
      const id = req.params.id;
      const editorasResultado = await editoras.findById(id);
      res.status(200).send(editorasResultado);
    } catch (error) {
      next(error);
    }
  };

  static cadastrarEditora = async (req, res, next) => {
    try {
      let editora = new editoras(req.body);
      const editorasResultado = await editora.save();
      res.status(201).send(editorasResultado.toJSON());
    } catch (error) {
      next(error);
    }
  };

  static atualizarEditora = async (req, res, next) => {
    try {
      const id = req.params.id;
      const editorasResultado = await editoras.findByIdAndUpdate(id, {
        $set: req.body,
      });
      res.status(200).send({
        message: `Editora ${editorasResultado.nome} atualizado com sucesso!`,
      });
    } catch (error) {
      next(error);
    }
  };

  static excluirEditora = async (req, res, next) => {
    try {
      const id = req.params.id;
      const editorasResultado = await editoras.findOneAndDelete(id);
      res.status(200).send({
        message: `Editora ${editorasResultado.nome} removido com sucesso!`,
      });
    } catch (error) {
      next(error);
    }
  };
}

export default EditoraController;
