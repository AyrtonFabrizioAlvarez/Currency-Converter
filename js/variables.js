//CREANDO ARRAY PAISES (VACIO)
const paises = []



        //TOMAMOS VALORES SELECCIONADOS POR EL USUARIO EN LOS MENUS DROP-DOWN

//MONEDA A INGRESAR
const monedaIngresa = document.querySelector(".moneda1")
const isoIngresa = document.querySelector(".ISO-ingresa");
let monedaIngreso
monedaIngresa.addEventListener("change",() => {
    const opcionSeleccionada = monedaIngresa.options[monedaIngresa.selectedIndex].value;

    if (opcionSeleccionada == "Argentina - ARS") {
        monedaIngreso = 1;
        isoIngresa.textContent = 'ARS';
    } else if (opcionSeleccionada == "Estados unidos - USD") {
        monedaIngreso = 2
        isoIngresa.textContent = 'USD';
    } else if (opcionSeleccionada == "Europa - EU") {
        monedaIngreso = 3
        isoIngresa.textContent = 'EU';
    } else if (opcionSeleccionada == "Brasil - BRL") {
        monedaIngreso = 4
        isoIngresa.textContent = 'BRL';
    } 
})


 // MONEDA A ENTREGAR
const monedaEntrega = document.querySelector(".moneda2")
const isoEntrega = document.querySelector(".ISO-entrega");
let monedaEgreso
monedaEntrega.addEventListener("change",() => {
    const opcionSeleccionada2 = monedaEntrega.options[monedaEntrega.selectedIndex].value;

    if (opcionSeleccionada2== "Argentina - ARS") {
        monedaEgreso = 1
        isoEntrega.textContent = 'ARS';
    } else if (opcionSeleccionada2 == "Estados unidos - USD") {
        monedaEgreso = 2
        isoEntrega.textContent = 'USD';
    } else if (opcionSeleccionada2== "Europa - EU") {
        monedaEgreso = 3
        isoEntrega.textContent = 'EU';
    } else if (opcionSeleccionada2== "Brasil - BRL") {
        monedaEgreso = 4
        isoEntrega.textContent = 'BRL';
    }
})

        //TOMAMOS INPUT MONTO A INGRESAR Y MONTO A ENTREGAR

//MONTO A INGRESAR
const monto = document.getElementById("montoAIngresar")
let montoIngresado
monto.addEventListener("change", () => {
    montoIngresado = monto.value
})

//MONTO A ENTREGAR
const montoEntrega = document.getElementById("montoAEntregar")









