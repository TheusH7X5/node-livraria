import RequisicaoIncorreta from "./RequisicaoIncorreta.js";

class ErroValidacao extends RequisicaoIncorreta {
  constructor(error) {
    const mensagensError = Object.values(error.errors)
      .map((erro) => erro.message)
      .join("; ");
    console.log(error.errors);
    super(`Os seguintes erros foram encontrados: ${mensagensError}`);
  }
}

export default ErroValidacao;
