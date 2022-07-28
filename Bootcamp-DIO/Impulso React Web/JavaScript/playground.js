function calculaIdade(anos, raca) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade. e raça ${raca}`;
}


const pessoa1 = {
    nome: 'João',
    idade: 25,

};
const pessoa2 = {
    nome: 'Sofia',
    idade: 39,

};
const animal = {
    nome: 'bauruk',
    idade: 10,
    raca: 'bulldog',

};

console.log(calculaIdade.call(animal,5,'bull'))