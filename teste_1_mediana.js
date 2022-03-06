/*
A mediana de uma lista de números é basicamente o elemento que se encontra no meio da lista após a ordenação. 
Dada uma lista de números com um número ímpar de elementos, desenvolva um algoritmo que encontre a mediana.
Exemplo:
Entrada: arr = [9, 2, 1, 4, 6] Saída: 4
*/

function calculaMedianaImpar(vetor){
    let tamanho = vetor.length;
    let isImpar = tamanho%2 !== 0;

    if(!isImpar){
        return '';
    }

    vetor.sort(function(a, b) {
        return a - b;
    });

    let posicaoMediana = Math.floor(tamanho/2);

    console.log("Posição mediana: ", posicaoMediana, " - Mediana: ", vetor[posicaoMediana]);
    return vetor[posicaoMediana];

}
