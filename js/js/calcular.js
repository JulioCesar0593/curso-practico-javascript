
function add(){

    var datosAcumulados;
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
}

function calculate(){
    
    const datos =document.getElementById("array").innerHTML;
    const moda = calcularMediana("["+ datos +"]");

    document.getElementById("moda").innerHTML = "La moda es; " + moda;
}
