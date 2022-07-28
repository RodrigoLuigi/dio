const alunos = [{
        nome: 'João',
        nota: 5,
        turma: '1B',
    },
    {
        nome: 'Sofia',
        nota: 9,
        turma: '1B',
    },
    {
        nome: 'Paulo',
        nota: 6,
        turma: '2C',
    },
    {
        nome: 'Miguel',
        nota: 3,
        turma: '2C',
    },
    {
        nome: 'Lucas',
        nota: 4,
        turma: '2C',
    },
    {
        nome: 'Artur',
        nota: 2,
        turma: '2C',
    },
    {
        nome: 'João',
        nota: 5,
        turma: '1B',
    },
    {
        nome: 'Sofia',
        nota: 9,
        turma: '1B',
    },
    {
        nome: 'Marcos',
        nota: 6,
        turma: '2C',
    },
    {
        nome: 'Elio',
        nota: 3,
        turma: '2C',
    },
    {
        nome: 'Vinicius',
        nota: 4,
        turma: '2C',
    },
    {
        nome: 'Joao Paulo',
        nota: 2,
        turma: '2C',
    },
];


function qualificaAluno(arrayAlunos, media) {
    let reprovados = [];
    let aprovados = [];

    for (let i = 0; i < arrayAlunos.length; i++) {

        const {
            nome,
            nota
        } = arrayAlunos[i];

        if (nota >= media) {
            aprovados.push(nome);
        } else {
            reprovados.push(nome);
        }
    }
    //console.log('Reprovados' , reprovados);
    // console.log('Aprovados' , aprovados);
    //return aprovados;
    return `
    Aprovados: ${aprovados} 
    Reprovados: ${reprovados}
    `
}

console.log(qualificaAluno(alunos, 5));