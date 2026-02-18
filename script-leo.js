// Função para encontrar o maior número de um array

function encontrarMaior(numeros) {
    let maior = 0

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > maior) {
            maior = numeros[i]
        }
    }

    return maior
}

let lista = [-10, -3, -50, -1]
console.log("Maior número:", encontrarMaior(lista))
