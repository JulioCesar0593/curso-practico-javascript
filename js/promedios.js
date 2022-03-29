// const listaM =[1, 2, 1, 1, 1, 2, 2, 3, 3, 2, 3, 4, 1, 1];
/*Calculo de la mediana */
function OrdenarLista(lista){
     
    const listaOrdenada = lista.sort(    
        function(a, b){
             return a - b;
        });
    return listaOrdenada;
}


function calcularMediana(lista){

    let listaOrdenada = OrdenarLista(lista);
    let mitadLista = parseInt(listaOrdenada.length /2);

    let mediana;

    if (listaOrdenada.length % 2 === 0) {
        mediana = calcularPromedio([ listaOrdenada[mitadLista-1] , listaOrdenada[mitadLista] ]);
    } else {
        mediana = listaOrdenada[mitadLista];        
    }
    return mediana;
};



/* Moda */

function calcularModa(lista){

    let listaOblject = {};
    
    lista.map(
       function(elemento){
           if (listaOblject[elemento]) {
                listaOblject[elemento] += 1;               
           } else {
            listaOblject[elemento] = 1;                              
           }
       })
    const listaArray = Object.entries(listaOblject).sort(
        function(elemetoA, elementoB){
            return elemetoA[1] - elementoB[1];
        }
    );

    const moda = listaArray[listaArray.length - 1 ]

    return  moda;
};



/* Promedio */

function calcularPromedio( lista ){

    const sumaLista = lista.reduce(

        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;            
        }
    )
    const promedio = sumaLista / lista.length;
    return promedio;
}



function extraerArray(cadenaValores){
    
    let valorArreglo = "";
    let arreglo = [];
    let caracterExtraido; 
    let contador = 1;
    
    for (let i = 1; i < cadenaValores.length + 1 ; i++) {
        caracterExtraido = cadenaValores.substring(i - 1 , i);
        valorArreglo = valorArreglo +  caracterExtraido;
        if(caracterExtraido === "," ){
            if (contador == 1) {
                arreglo.push(parseInt(valorArreglo));
                valorArreglo = ""; 
            }else if(contador > 1){
                valorArreglo.slice(1);
                arreglo.push(parseInt(valorArreglo));
                valorArreglo = "";
            }   
        }     
    }

    return arreglo;

}


/* Funciones de botones */

function add(){

    let datosAcumulados;
    datosAcumulados = document.getElementById("array").innerHTML;
    const datosCalculo = document.getElementById("datos").value;
    
    if (datosCalculo === "") {
        alert("Por favor ingresa un numero");
    } else {
        const datos = document.getElementById("array").innerText = datosAcumulados + " " +  datosCalculo + ",";  
        document.getElementById("datos").value = "";
        document.getElementById("datos").focus();
    }
}
 
function clean(){
    var limpiar =document.getElementById("array").innerText = "";
    var limpiar =document.getElementById("media").innerText = "";
    var limpiar =document.getElementById("moda").innerText = "";
    var limpiar =document.getElementById("mediana").innerText = "";
}


function calculate(){

    let arreglo = extraerArray(document.getElementById("array").innerHTML);

    let media = calcularPromedio(arreglo);
    document.getElementById("media").innerHTML = media.toFixed(2);

    let moda = calcularModa(arreglo);
    document.getElementById("moda").innerHTML = moda[0];

    let mediana = calcularMediana(arreglo);
    document.getElementById("mediana").innerHTML = mediana;
}

