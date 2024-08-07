const { getCursoById } = require('./curso');

let materiaId = 1;
const materias = [];

function getMateriaById(id) {
    return materias.find(materia => materia.id === id);
}

function addMateria(nome, horasTotais, idCurso) {
    if (!getCursoById(idCurso)) {
        throw new Error('Curso não encontrado');
    }
    materias.push({ id: materiaId++, nome, horasTotais, idCurso });
}

function updateMateria(id, nome, horasTotais, idCurso) {
    const materia = getMateriaById(id);
    if (!materia) {
        throw new Error('Matéria não encontrada');
    }
    if (!getCursoById(idCurso)) {
        throw new Error('Curso não encontrado');
    }
    materia.nome = nome;
    materia.horasTotais = horasTotais;
    materia.idCurso = idCurso;
}

module.exports = { materias, getMateriaById, addMateria, updateMateria };
