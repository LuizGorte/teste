const { getAlunoById } = require('./aluno');
const { getAulaById } = require('./aula');

let alunoAulaId = 1;
const alunoAulas = [];

function getAlunoAulaById(id) {
    return alunoAulas.find(alunoAula => alunoAula.id === id);
}

function addAlunoAula(idAluno, idAula) {
    if (!getAlunoById(idAluno)) {
        throw new Error('Aluno não encontrado');
    }
    if (!getAulaById(idAula)) {
        throw new Error('Aula não encontrada');
    }
    alunoAulas.push({ id: alunoAulaId++, idAluno, idAula });
}

function updateAlunoAula(id, idAluno, idAula) {
    const alunoAula = getAlunoAulaById(id);
    if (!alunoAula) {
        throw new Error('Registro de Aluno-Aula não encontrado');
    }
    if (!getAlunoById(idAluno)) {
        throw new Error('Aluno não encontrado');
    }
    if (!getAulaById(idAula)) {
        throw new Error('Aula não encontrada');
    }
    alunoAula.idAluno = idAluno;
    alunoAula.idAula = idAula;
}

module.exports = { alunoAulas, getAlunoAulaById, addAlunoAula, updateAlunoAula };
