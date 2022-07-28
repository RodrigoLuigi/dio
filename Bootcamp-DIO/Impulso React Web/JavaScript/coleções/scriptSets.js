const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(array) {

    const mySet = new Set(array);

    return [...mySet];
}

function ordenaArray(array) {

    console.log('ARRAY:', array);
    let maior;

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                maior = array[i];
                array[i] = array[j];
                array[j] = maior;
            }
        }
    }
    console.log('Ordenado:', array);
    return array;
}

ordenaArray(valoresUnicos(meuArray));