const listaM =[1, 2, 1, 1, 1, 2, 2, 3, 3, 2, 3, 4, 1, 1];

function calcularModa(lista){

    const listaOblject = {};
    
    lista.map(
       function(elemento){
           if (listaOblject[elemento]) {
                listaOblject += 1;               
           } else {
            listaOblject[elemento ] = 1;                              
           }
       });
    
    const listaArray = Object.entries(listaOblject).sort(
        function(elemetoA, elementoB){
            return elemetoA[1] - elementoB[1];
        }
    );

    const moda = listaArray[listaArray.length - 1 ]

    return  moda;
};