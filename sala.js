let salaId = 1;
const salas = [];

function getSalaById(id) {
    return salas.find(sala => sala.id === id);
}

function addSala(numero) {
    salas.push({ id: salaId++, numero });
}

function updateSala(id, numero) {
    const sala = getSalaById(id);
    if (!sala) {
        throw new Error('Sala não encontrada');
    }
    sala.numero = numero;
}

module.exports = { salas, getSalaById, addSala, updateSala };
