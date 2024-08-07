const readline = require('readline');
const { turnos, addTurno, updateTurno } = require('./turno');
const { cursos, addCurso, updateCurso } = require('./curso');
const { materias, addMateria, updateMateria } = require('./materia');
const { alunos, addAluno, updateAluno } = require('./aluno');
const { professores, addProfessor, updateProfessor } = require('./professor');
const { salas, addSala, updateSala } = require('./sala');
const { aulas, addAula, updateAula } = require('./aula');
const { alunoAulas, addAlunoAula, updateAlunoAula } = require('./aluno_aula');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mainMenu() {
    console.log('\n--- MENU ---');
    console.log('1. Adicionar Turno');
    console.log('2. Atualizar Turno');
    console.log('3. Adicionar Curso');
    console.log('4. Atualizar Curso');
    console.log('5. Adicionar Matéria');
    console.log('6. Atualizar Matéria');
    console.log('7. Adicionar Aluno');
    console.log('8. Atualizar Aluno');
    console.log('9. Adicionar Professor');
    console.log('10. Atualizar Professor');
    console.log('11. Adicionar Sala');
    console.log('12. Atualizar Sala');
    console.log('13. Adicionar Aula');
    console.log('14. Atualizar Aula');
    console.log('15. Adicionar Aluno em Aula');
    console.log('16. Atualizar Aluno em Aula');
    console.log('17. Listar Dados');
    console.log('18. Sair');

    rl.question('Escolha uma opção: ', (option) => {
        switch (option) {
            case '1':
                rl.question('Nome do turno: ', (nome) => {
                    rl.question('Hora de início (HH:MM): ', (inicio) => {
                        rl.question('Hora de término (HH:MM): ', (termino) => {
                            addTurno(nome, inicio, termino);
                            console.log('Turno adicionado com sucesso!');
                            mainMenu();
                        });
                    });
                });
                break;
            case '2':
                console.log('Turnos disponíveis:', turnos);
                rl.question('ID do turno para atualizar: ', (id) => {
                    rl.question('Novo nome do turno: ', (nome) => {
                        rl.question('Nova hora de início (HH:MM): ', (inicio) => {
                            rl.question('Nova hora de término (HH:MM): ', (termino) => {
                                try {
                                    updateTurno(parseInt(id), nome, inicio, termino);
                                    console.log('Turno atualizado com sucesso!');
                                } catch (error) {
                                    console.error(error.message);
                                }
                                mainMenu();
                            });
                        });
                    });
                });
                break;
            case '3':
                rl.question('Nome do curso: ', (nome) => {
                    rl.question('Horas totais: ', (horasTotais) => {
                        console.log('Turnos disponíveis:', turnos);
                        rl.question('ID do turno: ', (idTurno) => {
                            try {
                                addCurso(nome, parseInt(horasTotais), parseInt(idTurno));
                                console.log('Curso adicionado com sucesso!');
                            } catch (error) {
                                console.error(error.message);
                            }
                            mainMenu();
                        });
                    });
                });
                break;
            case '4':
                console.log('Cursos disponíveis:', cursos);
                rl.question('ID do curso para atualizar: ', (id) => {
                    rl.question('Novo nome do curso: ', (nome) => {
                        rl.question('Novas horas totais: ', (horasTotais) => {
                            console.log('Turnos disponíveis:', turnos);
                            rl.question('Novo ID do turno: ', (idTurno) => {
                                try {
                                    updateCurso(parseInt(id), nome, parseInt(horasTotais), parseInt(idTurno));
                                    console.log('Curso atualizado com sucesso!');
                                } catch (error) {
                                    console.error(error.message);
                                }
                                mainMenu();
                            });
                        });
                    });
                });
                break;
            case '5':
                rl.question('Nome da matéria: ', (nome) => {
                    rl.question('Horas totais: ', (horasTotais) => {
                        console.log('Cursos disponíveis:', cursos);
                        rl.question('ID do curso: ', (idCurso) => {
                            try {
                                addMateria(nome, parseInt(horasTotais), parseInt(idCurso));
                                console.log('Matéria adicionada com sucesso!');
                            } catch (error) {
                                console.error(error.message);
                            }
                            mainMenu();
                        });
                    });
                });
                break;
            case '6':
                console.log('Matérias disponíveis:', materias);
                rl.question('ID da matéria para atualizar: ', (id) => {
                    rl.question('Novo nome da matéria: ', (nome) => {
                        rl.question('Novas horas totais: ', (horasTotais) => {
                            console.log('Cursos disponíveis:', cursos);
                            rl.question('Novo ID do curso: ', (idCurso) => {
                                try {
                                    updateMateria(parseInt(id), nome, parseInt(horasTotais), parseInt(idCurso));
                                    console.log('Matéria atualizada com sucesso!');
                                } catch (error) {
                                    console.error(error.message);
                                }
                                mainMenu();
                            });
                        });
                    });
                });
                break;
            case '7':
                rl.question('Nome do aluno: ', (nome) => {
                    console.log('Cursos disponíveis:', cursos);
                    rl.question('ID do curso: ', (idCurso) => {
                        try {
                            addAluno(nome, parseInt(idCurso));
                            console.log('Aluno adicionado com sucesso!');
                        } catch (error) {
                            console.error(error.message);
                        }
                        mainMenu();
                    });
                });
                break;
            case '8':
                console.log('Alunos disponíveis:', alunos);
                rl.question('ID do aluno para atualizar: ', (id) => {
                    rl.question('Novo nome do aluno: ', (nome) => {
                        console.log('Cursos disponíveis:', cursos);
                        rl.question('Novo ID do curso: ', (idCurso) => {
                            try {
                                updateAluno(parseInt(id), nome, parseInt(idCurso));
                                console.log('Aluno atualizado com sucesso!');
                            } catch (error) {
                                console.error(error.message);
                            }
                            mainMenu();
                        });
                    });
                });
                break;
            case '9':
                rl.question('Nome do professor: ', (nome) => {
                    addProfessor(nome);
                    console.log('Professor adicionado com sucesso!');
                    mainMenu();
                });
                break;
            case '10':
                console.log('Professores disponíveis:', professores);
                rl.question('ID do professor para atualizar: ', (id) => {
                    rl.question('Novo nome do professor: ', (nome) => {
                        try {
                            updateProfessor(parseInt(id), nome);
                            console.log('Professor atualizado com sucesso!');
                        } catch (error) {
                            console.error(error.message);
                        }
                        mainMenu();
                    });
                });
                break;
            case '11':
                rl.question('Número da sala: ', (numero) => {
                    addSala(parseInt(numero));
                    console.log('Sala adicionada com sucesso!');
                    mainMenu();
                });
                break;
            case '12':
                console.log('Salas disponíveis:', salas);
                rl.question('ID da sala para atualizar: ', (id) => {
                    rl.question('Novo número da sala: ', (numero) => {
                        try {
                            updateSala(parseInt(id), parseInt(numero));
                            console.log('Sala atualizada com sucesso!');
                        } catch (error) {
                            console.error(error.message);
                        }
                        mainMenu();
                    });
                });
                break;
            case '13':
                console.log('Professores disponíveis:', professores);
                rl.question('ID do professor: ', (idProfessor) => {
                    console.log('Matérias disponíveis:', materias);
                    rl.question('ID da matéria: ', (idMateria) => {
                        console.log('Salas disponíveis:', salas);
                        rl.question('ID da sala: ', (idSala) => {
                            try {
                                addAula(parseInt(idProfessor), parseInt(idMateria), parseInt(idSala));
                                console.log('Aula adicionada com sucesso!');
                            } catch (error) {
                                console.error(error.message);
                            }
                            mainMenu();
                        });
                    });
                });
                break;
            case '14':
                console.log('Aulas disponíveis:', aulas);
                rl.question('ID da aula para atualizar: ', (id) => {
                    console.log('Professores disponíveis:', professores);
                    rl.question('Novo ID do professor: ', (idProfessor) => {
                        console.log('Matérias disponíveis:', materias);
                        rl.question('Novo ID da matéria: ', (idMateria) => {
                            console.log('Salas disponíveis:', salas);
                            rl.question('Novo ID da sala: ', (idSala) => {
                                try {
                                    updateAula(parseInt(id), parseInt(idProfessor), parseInt(idMateria), parseInt(idSala));
                                    console.log('Aula atualizada com sucesso!');
                                } catch (error) {
                                    console.error(error.message);
                                }
                                mainMenu();
                            });
                        });
                    });
                });
                break;
            case '15':
                console.log('Alunos disponíveis:', alunos);
                rl.question('ID do aluno: ', (idAluno) => {
                    console.log('Aulas disponíveis:', aulas);
                    rl.question('ID da aula: ', (idAula) => {
                        try {
                            addAlunoAula(parseInt(idAluno), parseInt(idAula));
                            console.log('Aluno adicionado à aula com sucesso!');
                        } catch (error) {
                            console.error(error.message);
                        }
                        mainMenu();
                    });
                });
                break;
            case '16':
                console.log('Aluno_Aulas disponíveis:', alunoAulas);
                rl.question('ID do registro para atualizar: ', (id) => {
                    rl.question('Novo ID do aluno: ', (idAluno) => {
                        rl.question('Novo ID da aula: ', (idAula) => {
                            try {
                                updateAlunoAula(parseInt(id), parseInt(idAluno), parseInt(idAula));
                                console.log('Registro de Aluno-Aula atualizado com sucesso!');
                            } catch (error) {
                                console.error(error.message);
                            }
                            mainMenu();
                        });
                    });
                });
                break;
            case '17':
                console.log('Turnos:', turnos);
                console.log('Cursos:', cursos);
                console.log('Matérias:', materias);
                console.log('Alunos:', alunos);
                console.log('Professores:', professores);
                console.log('Salas:', salas);
                console.log('Aulas:', aulas);
                console.log('Aluno_Aulas:', alunoAulas);
                mainMenu();
                break;
            case '18':
                rl.close();
                break;
            default:
                console.log('Opção inválida. Tente novamente.');
                mainMenu();
                break;
        }
    });
}

mainMenu();
