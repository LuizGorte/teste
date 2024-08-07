const { getProfessorById } = require('./professor');
const { getMateriaById } = require('./materia');
const { getSalaById } = require('./sala');

let aulaId = 1;
const aulas = [];

function getAulaById(id) {
    return aulas.find(aula => aula.id === id);
}

function addAula(idProfessor, idMateria, idSala) {
    if (!getProfessorById(idProfessor)) {
        throw new Error('Professor não encontrado');
    }
    if (!getMateriaById(idMateria)) {
        throw new Error('Matéria não encontrada');
    }
    if (!getSalaById(idSala)) {
        throw new Error('Sala não encontrada');
    }
    aulas.push({ id: aulaId++, idProfessor, idMateria, idSala });
}

function updateAula(id, idProfessor, idMateria, idSala) {
    const aula = getAulaById(id);
    if (!aula) {
        throw new Error('Aula não encontrada');
    }
    if (!getProfessorById(idProfessor)) {
        throw new Error('Professor não encontrado');
    }
    if (!getMateriaById(idMateria)) {
        throw new Error('Matéria não encontrada');
    }
    if (!getSalaById(idSala)) {
        throw new Error('Sala não encontrada');
    }
    aula.idProfessor = idProfessor;
    aula.idMateria = idMateria;
    aula.idSala = idSala;
}

module.exports = { aulas, getAulaById, addAula, updateAula };
