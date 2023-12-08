//Gustavo Parada 
const precio = 400000;

let precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = formatearNumero(precio);

//Agregar Item
function addItem(){
    let cantidad = document.querySelector(".cantidad");
    let total = document.querySelector(".valor-total");
    cantidad.innerHTML = Number(cantidad.innerHTML) + 1;
    total.innerHTML =  formatearNumero(Number(cantidad.innerHTML) * precio);
    
}

//Quitar Item
function removeItem(){
    let cantidad = document.querySelector(".cantidad");
    let total = document.querySelector(".valor-total");
    if (Number(cantidad.innerHTML) > 0){ 
        cantidad.innerHTML = Number(cantidad.innerHTML) - 1;
        total.innerHTML =  formatearNumero(Number(cantidad.innerHTML) * precio);
    }
    else{
        cantidad.innerHTML = "0";
    }
}

//Separador de miles
function formatearNumero(numero){
    return new Intl.NumberFormat("es-CL").format(numero);
}