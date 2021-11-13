function substituiPares(array) {
    if(!array) return "Array não existe ! -1";
    if(!array.length) return "Array vazio ! -1";

    for (let i = 0; i < array.length; i++) {

        if (array[i] === 0) {
            console.log("Você ja é zero !!")
        } else if (array[i] % 2 === 0) {
            console.log(`Substituindo ${array[i]} por 0...`)
            array[i] = 0;
            par += `\nArray na posição ${i} é par !`;
        }
    }
   
    return array;
}

let par = '';
let array = [5,6,2];

console.log(substituiPares(array));
console.log(par);