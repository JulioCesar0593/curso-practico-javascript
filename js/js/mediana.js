// const lista1 = [100,200,300,500,700];

function calcularPromedio(lista){

    const sumarValores = lista.reduce(
        function(valorInicial = 0 , valorAcumulado){
            return valorInicial + valorAcumulado
        }
    );
    const promedio = sumarValores / lista.length;
    return promedio;
}


function OrdenarLista(lista){
     
    const listaOrdenada = lista.sort(    
        function(a, b){
             return a - b;
        });
    return listaOrdenada;
}


export function calcularMediana(lista){

    //const longitudLista = longitudLista.length;
    const listaOrdenada = OrdenarLista(lista);
    const mitadLista = parseInt(listaOrdenada.length /2);

    let mediana;

    if (listaOrdenada.length % 2 === 0) {
        mediana = calcularPromedio([ listaOrdenada[mitadLista-1] , listaOrdenada[mitadLista] ]);
    } else {
        mediana = listaOrdenada[lista.length];        
    }
    return mediana;
}
 