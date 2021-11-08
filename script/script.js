//pasos 1#
//Captura del elemento mostrar definido en el html y luego se oculta
document.getElementById("mostrar").style.display="none";     

//paso 2
//Capturar datos por pantalla.
function capturarDatos() {
    let nombre = document.getElementById("inputName").value;
    let producto = document.getElementById("selectProducto").value;
    let cantidad = document.getElementById("inputProducto").value;

     if(nombre === "" || cantidad === "") {              //=== sirve para calcular todo mejor
       alert("Todos los campos son requeridos")

        }else {
            calcular(producto, cantidad)
     }
}

function calcular(producto, cantidad) {
    document.getElementById("mostrar").style.display="block";

    let totalCompra = 0;
    let totalDescuento = 0;
    let totalPagar = 0;
    
    if(producto === "Aseo") {
        totalCompra = cantidad * 5300;
        totalDescuento = totalCompra * 0.1;

    } else if(producto === "Carne"){
        totalCompra = cantidad * 6200;
        totalDescuento = totalCompra * 0.2;

    }else if(producto === "Frutas") {
        totalCompra = cantidad * 6900;
        totalDescuento = totalCompra * 0.3;

    } else{
        totalCompra = cantidad * 4700;
        totalDescuento = 0;


    }
    totalPagar = totalCompra - totalDescuento;
    document.getElementById("descuento").value = totalDescuento;
    document.getElementById("totalPagar").value = totalPagar;
}