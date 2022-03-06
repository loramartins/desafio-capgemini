/* Um texto precisa ser encriptado usando o seguinte esquema. Primeiro, os espaços são removidos do texto. 
Então, os caracteres são escritos em um grid, no qual as linhas e colunas tem as seguintes regras:
raiz(T)<=linha<=coluna<raiz(T) 
*/
function encriptaFrase(fraseEntrada){
    let fraseSemEspaco = fraseEntrada.replace(/\s+/g, '');
    let fraseSemEspacoArray = fraseSemEspaco.split('',fraseSemEspaco.length);

    let raizTamanho = Math.sqrt(fraseSemEspaco.length);
    let tamanhoMaxGrid = Math.ceil(raizTamanho);
    let grid =[];

    //criar o grid
    for(let i = 0; i<tamanhoMaxGrid; i++){
        grid.push(['']);
    }

    var posicaoNaFrase = 0;

    while(posicaoNaFrase < fraseSemEspacoArray.length ){
        for(let j = 0; j < tamanhoMaxGrid ; j++){
            if(!fraseSemEspacoArray?.[posicaoNaFrase]){
                break;
            }
            
            grid[j].push(fraseSemEspacoArray[posicaoNaFrase]);
            posicaoNaFrase++;
        }
    }

    var fraseFinal = '';
    for(let i=0; i < grid.length; i++){
        fraseFinal = fraseFinal + grid[i].join('') + " ";
    }

    return fraseFinal.trim();
}
