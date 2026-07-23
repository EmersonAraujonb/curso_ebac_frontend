// Array de objetos
const alunos = [
    { nome: "João", nota: 8.5 },
    { nome: "Maria", nota: 5.0 },
    { nome: "Pedro", nota: 6.0 },
    { nome: "Ana", nota: 9.2 },
    { nome: "Carlos", nota: 4.8 }
];

// Função que retorna apenas os alunos aprovados
function alunosAprovados(listaAlunos) {
    return listaAlunos.filter(aluno => aluno.nota >= 6);
}

// Exibindo o resultado
console.log(alunosAprovados(alunos));