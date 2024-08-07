const { getTurnoById } = require('./turno');

let cursoId = 1;
const cursos = [];

function getCursoById(id) {
    return cursos.find(curso => curso.id === id);
}

function addCurso(nome, horasTotais, idTurno) {
    if (!getTurnoById(idTurno)) {
        throw new Error('Turno não encontrado');
    }
    cursos.push({ id: cursoId++, nome, horasTotais, idTurno });
}

function updateCurso(id, nome, horasTotais, idTurno) {
    const curso = getCursoById(id);
    if (!curso) {
        throw new Error('Curso não encontrado');
    }
    if (!getTurnoById(idTurno)) {
        throw new Error('Turno não encontrado');
    }
    curso.nome = nome;
    curso.horasTotais = horasTotais;
    curso.idTurno = idTurno;
}

module.exports = { cursos, getCursoById, addCurso, updateCurso };
