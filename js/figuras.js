/*Área y perimetro del cuadrado
console.group("Datos del cuadrado");
const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("la medida del cuadrado es: " + ladoCuadrado + "cm" );
console.log(`El perimetro del cuadrado es: ${perimetroCuadrado}` + "cm" );
console.log(`El área del cuadrado es: ${areaCuadrado}`+ "cm^2" );
console.groupEnd();

//Área y perimetro del triangulo
console.group("Datos del trinagulo");
const baseTriangulo = 6;
const ladoTriangulo1= 6;
const ladoTriangulo2 = 4.5;
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("La base del triangulo es: " + baseTriangulo + "cm" +
            " ,el lado 1 del triangulo es " + ladoTriangulo1 + "cm" +
            " ,el lado 2 del triangulo es " + ladoTriangulo2 + "cm" );

console.log("El perimetro del triangulo es " + perimetroTriangulo);
const alturaTriangulo = 5;
const areaTriangulo = (baseTriangulo * alturaTriangulo)/2;
console.log("El área del triangulo es " +  areaTriangulo);
console.groupEnd();


//Área y perimetro del circulo
console.group("Datos del circulo");
//Radio
const radioCirculo = 5 ;
console.log("El radio del circulo es: " + radioCirculo);
//Diametro
const DiametroCirculo = radioCirculo * 2 ;
console.log("El diametro del circulo es: "+ DiametroCirculo);
// Pi
const PI = Math.PI;
console.log("Pi vale: " + PI );
//Perimetro
const perimetroCirculo = PI * DiametroCirculo;
console.log("El perimetro del circulo es: " + perimetroCirculo );
//Área
const areaCirculo = PI * (radioCirculo * radioCirculo)
console.log("El área del circulo es: " + areaCirculo);
console.groupEnd();*/


//Área y perimetro del cuadrado con funciones
function perimetroCuadrado(lado){
    return lado * 4 ;
};

function areaCuadrado(lado){
    return lado * lado;
};

//Área y perimetro del triangulo con funciones
function perimetroTriangulo(lado1, lado2 , base){
    return lado1 + lado2 + base;
};

function areaTriangulo(base, altura){
    return (base * altura) / 2 ;
};


//Área y perimetro del circulo con funciones
const PI = Math.PI ;
function DiametroCirculo (radio){
    return radio * 2;    
};

function perimetroCirculo(radio){
    const diametro = DiametroCirculo(radio);
    return diametro * PI;
};

function areaCirculo(radio){
    let area = PI *(radio*radio);
    return area;
}






function areaPerimetroCuadrado(){

    let ladoAreaCuadrado = document.getElementById("ladoCuadrado").value;

   if (ladoAreaCuadrado != "") {

        let perimetro = perimetroCuadrado(ladoAreaCuadrado);
        let area = areaCuadrado(ladoAreaCuadrado);
        console.log(area);

        document.getElementById("perimetroCuadrado").innerHTML = perimetro;
        document.getElementById("areaCuadrado").innerHTML = area;

   } else {

        alert("Por favor completa todos los campos");
       
   }
}

function cleanSquare(){
    document.getElementById("ladoCuadrado").value = "";
    document.getElementById("perimetroCuadrado").innerHTML = "";
    document.getElementById("areaCuadrado").innerHTML = "";
}




function cleanTriangle(){
    document.getElementById("lado1").value = "";
    document.getElementById("lado2").value = "";
    document.getElementById("lado3").value = "";
    document.getElementById("perimetroTriangulo").innerText = "";
}

function areaPerimetroTriangulo()
{
    let tipoCalculo = document.getElementById("calcular").value;

    if(tipoCalculo === "perimetro"){

                    
        let lado1 = document.getElementById("lado1").value;
        let lado2 = document.getElementById("lado2").value;
        let lado3 = document.getElementById("lado3").value;
        
        if (lado1 == "" || lado2 == "" || lado3 == "" ) {

           alert("Por favor completa todos los campos");

        } else {

            let perimetro = perimetroTriangulo(  parseInt(lado1) , parseInt(lado2) , parseInt(lado3) );
            document.getElementById("perimetroTriangulo").innerText = perimetro;
            
        }

    }
    else{

        let lado1 = document.getElementById("lado1").value;
        let lado2 = document.getElementById("lado2").value;

        if (lado1 == "" || lado2 == "" ) {

            alert("Por favor completa todos los campos");
 
         } else {

            let area = areaTriangulo( lado1 , lado2 );
            document.getElementById("perimetroTriangulo").innerText = area;
         }
        
    }
};

function tCalculo(){

    tipoCalculo = document.getElementById("calcular").selectedIndex;

    if(tipoCalculo == 1){
        // console.log("Hola");
        let lado3 = document.getElementById("lado3");
        
        document.getElementById("calc").innerText = "Área";
        document.getElementById("spLado1").innerText = "Base";
        document.getElementById("spLado2").innerText = "Altura";

        document.getElementById("lado1").value = "";
        document.getElementById("lado2").value = "";
        document.getElementById("lado3").value = "";
        document.getElementById("perimetroTriangulo").innerText = "";
        lado3.disabled = true;


    } else{

        let lado3 = document.getElementById("lado3");
        lado3.disabled = false;
        document.getElementById("calc").innerText = "Perìmetro";
        document.getElementById("spLado1").innerText = "Lado 1";
        document.getElementById("spLado2").innerText = "Lado 2";
        document.getElementById("lado1").value = "";
        document.getElementById("lado2").value = "";

    }
}


function cleanCircle(){
    document.getElementById("radio").value = "";
    document.getElementById("perimetroCirculo").innerText = "";
    document.getElementById("areaCirculo").innerText = "";
}


function areaPerimetrocirculo(){

    let radio = document.getElementById("radio").value;

    if (radio === "") {
        alert("Por favor completa todos los campos");
    } else {
              
        let perimetro = perimetroCirculo(radio);
        document.getElementById("perimetroCirculo").innerText = perimetro.toFixed(3);

        let area = areaCirculo(parseInt(radio));
        document.getElementById("areaCirculo").innerText = area.toFixed(3);       
    }
}