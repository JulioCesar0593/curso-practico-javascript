const  lista= [10,11,12,12];


function mediaAritmetica( lista ){

    // let sumaValores = 0;
    // for (let i = 0; i < lista.length; i++) {
    //     sumaValores = sumaValores + lista[i];     
    // }
    // const promedio = sumaValores / lista.length;
    const sumaLista = lista.reduce(

        /* En la variable de valor acumulado se van sumando los valores del array
        y se iguala a cero para que en la primera iteracion tengaun valor
        por defecto y en el nuevo elemento se guardael valor sumado del array */
        function (valorAcumulado = 0, nuevoElemento) {
            
            return valorAcumulado + nuevoElemento;            
        }
    )
    const promedio = valorAcumulado / lista.length;

    return promedio;
}