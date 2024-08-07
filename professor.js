let professorId = 1;
const professores = [];

function getProfessorById(id) {
    return professores.find(professor => professor.id === id);
}

function addProfessor(nome) {
    professores.push({ id: professorId++, nome });
}

function updateProfessor(id, nome) {
    const professor = getProfessorById(id);
    if (!professor) {
        throw new Error('Professor não encontrado');
    }
    professor.nome = nome;
}

module.exports = { professores, getProfessorById, addProfessor, updateProfessor };
