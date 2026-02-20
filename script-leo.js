// Função para encontrar o maior número de um array

function encontrarMaior(numeros) {
    let maior = numeros[0]

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > maior) {
            maior = numeros[i]
        }
    }

    return maior
}

let lista = [-10, -3, -50, -1, 10, 2, 3, 20]
console.log("Maior número:", encontrarMaior(lista))
