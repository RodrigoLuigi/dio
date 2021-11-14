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
];


function qualificaAluno(arrayAlunos, media) {

    let aprovados = [];

    for (let i = 0; i < arrayAlunos.length; i++) {

        const {
            nome,
            nota
        } = arrayAlunos[i];

        if (nota >= media) {
            aprovados.push(nome);
        }
    }
    return aprovados;
}

qualificaAluno(alunos, 5);
console.log('Os aprovados são', qualificaAluno(alunos, 5));