const alunos = [
{
    nome: 'Maria',
    nota: 4,
    turma: '1A'
},
{
    nome: 'João',
    nota: 7,
    turma: '1A'
},
{
    nome: 'Ana',
    nota: 9,
    turma: '2A'
},
];

function alunosAprovados(arr,media){
    let aprovados = [];

    for (let i = 0;i < arr.length;i++){
        const {nota,nome} = arr[i];

        if(nota >= media){
            aprovados.push(nome)
        }
    }
    return aprovados;
}
console.log(alunosAprovados(alunos,6));