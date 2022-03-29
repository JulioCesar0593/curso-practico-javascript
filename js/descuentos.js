
function calcularPreciosConDescuento (precio,  descuento)
{
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;
    return precioConDescuento;
};


function priceDiscount(){
    /*LLamamos al elemento por el id para obtener el valor */
    const inputPrice = document.getElementById("inputPrice");
    /* asignamos el valor a una variable */
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPreciosConDescuento(priceValue, discountValue);

    const resultP =document.getElementById("resultP");
    /*Linea de código para insertar texto desde js a html*/
    document.getElementById("texto").innerText = "El precio con descuento es: ";
    resultP.innerText= "$ " +  precioConDescuento;
}

const coupons =["Desc10", "Desc20" , "Desc30"];

function priceDiscountCoupon(){

    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;
    
    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value; 

    const inputCoupon = document.getElementById("InputCoupon");
    const valueCoupon = inputCoupon.value;

    let discountPrice;
    const discount = document.getElementById("resultP")

    for (let i = 0; i < coupons.length; i++) {
        
        if (valueCoupon === coupons[i] ) {

            if (coupons[0] === coupons[i] ) {
               discountPrice = calcularPreciosConDescuento(priceValue, 10)
               document.getElementById("texto").innerText = "El valor del cupon es del 10%:";               
               discount.innerText ="$ " + discountPrice;
               break;
            }
            else if (coupons[1] === coupons[i] ) {
                discountPrice = calcularPreciosConDescuento(priceValue,20)
                document.getElementById("texto").innerText = "El valor del cupon es del 20%:";               
                discount.innerText ="$ " + discountPrice;
                break;
             }
             else{
                discountPrice = calcularPreciosConDescuento(priceValue, 30)
                document.getElementById("texto").innerText = "El valor del cupon es del 30%:";               
                discount.innerText ="$ " + discountPrice;
                break;
            } 
            break;
        }
        else{
            document.getElementById("texto").innerText = "Lo siento tu cupon no es valido :(";
        }
            
    }

}
