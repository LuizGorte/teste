let turnoId = 1;
const turnos = [];

function getTurnoById(id) {
    return turnos.find(turno => turno.id === id);
}

function addTurno(nome, inicio, termino) {
    turnos.push({ id: turnoId++, nome, inicio, termino });
}

function updateTurno(id, nome, inicio, termino) {
    const turno = getTurnoById(id);
    if (!turno) {
        throw new Error('Turno não encontrado');
    }
    turno.nome = nome;
    turno.inicio = inicio;
    turno.termino = termino;
}

module.exports = { turnos, getTurnoById, addTurno, updateTurno };
