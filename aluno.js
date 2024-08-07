const { getCursoById } = require('./curso');

let alunoId = 1;
const alunos = [];

function getAlunoById(id) {
    return alunos.find(aluno => aluno.id === id);
}

function addAluno(nome, idCurso) {
    if (!getCursoById(idCurso)) {
        throw new Error('Curso não encontrado');
    }
    alunos.push({ id: alunoId++, nome, idCurso });
}

function updateAluno(id, nome, idCurso) {
    const aluno = getAlunoById(id);
    if (!aluno) {
        throw new Error('Aluno não encontrado');
    }
    if (!getCursoById(idCurso)) {
        throw new Error('Curso não encontrado');
    }
    aluno.nome = nome;
    aluno.idCurso = idCurso;
}

module.exports = { alunos, getAlunoById, addAluno, updateAluno };
