const Controller = require('./Controller.js');
const PessoaServices = require('../services/PessoaServices.js');

const pessoaServices = new PessoaServices();

class PessoaController extends Controller {
  constructor() {
    super(pessoaServices);
  }

  async pegaTodasAsPessoas(req, res) {
    try {
      const listaTodasAsPessoas = await pessoaServices.pegaPessoasEscopoTodos();
      return res.status(200).json(listaTodasAsPessoas);
    } catch (erro) {
      // erro
    }
  }

  async pegaMatriculas(req, res) {
    const { estudanteId } = req.params;
    try {
      const listaMatriculas = await pessoaServices.pegaMatriculasPorEstudante(Number(estudanteId));
      return res.status(200).json(listaMatriculas);
    } catch (erro) {
      // erro
    }
  }
}

module.exports = PessoaController;
