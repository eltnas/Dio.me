const valorInput = [10, 5, 50, 10, 98, 23, 33, 44, 100, 1, 7]; // Aqui vai os valores de entrada.
let i = 0;

function gets() {
    const value = valorInput[i];
    i++;
    return value;
}

function print(text) {
    console.log(text);
}

module.exports = { gets, print };