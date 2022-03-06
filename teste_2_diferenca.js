/*
Dado um vetor de inteiros n e um inteiro qualquer x. 
Construa um algoritmo que determine o número de elementos pares do vetor que tem uma diferença igual ao valor de x.
Exemplo:
Entrada: n = [1, 5, 3, 4, 2] x: 2
Saída: 3 Explicação:
Existem 3 pares de inteiros no vetor com uma diferença de 2: [5, 3], [4, 2] e [3, 1].
*/

function buscaParPelaDiferenca(vetor, valorDiferenca){
    vetor.sort(function(a, b) {
        return b - a;
    });
     
    var totalPares = 0;
    let arrayPares = [];

    for( var i = 0; i < vetor.length -1; i++){
        let atual = vetor[i];

        for ( var j = i+1; j < vetor.length; j++){ 
            let proxima = vetor[j];
            let subtracao = atual - proxima;

            if(subtracao == valorDiferenca){
                let par = [atual,proxima];
                arrayPares.push(par);
                totalPares++;
            }
        }
    }

    console.log("Total de pares encontrados: ", totalPares, " - Pares encontrados: ", arrayPares);
    return totalPares;

}
