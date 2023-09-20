const Services = require('./Services.js');

class PessoaServices extends Services {
  constructor() {
    super('Pessoa');
    this.matriculas = new Services('Matricula');
  }

  async pegaPessoasEscopoTodos() {
    const listaPessoas = await super.pegaRegistrosPorEscopo('todos');
    return listaPessoas;
  }

  async pegaMatriculasPorEstudante(id) {
    const listaMatriculas = await this.matriculas.pegaTodosOsRegistros({ estudante_id: id });
    // const estudante = await super.pegaUmRegistroPorId(id);
    // const listaMatriculas = await estudante.getAulasMatriculadas();
    return listaMatriculas;
  } 
}

module.exports = PessoaServices;
