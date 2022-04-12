//CREANDO ARRAY PAISES (VACIO)
const paises = []


//MOSTRAMOS LAS MONEDAS DISPONIBLES EN UNA TABLA AL OBTENER EL EVENTO "CLICK"
const BtnMonedasDisponibles = document.getElementById("BtnMonedasDisponibles")
    BtnMonedasDisponibles.addEventListener("click", () => {

        const armarTabla = () => {
            const contenedor = document.getElementById("contenedor1")
            contenedor.innerHTML = `
            <div class="container">
            <h1 class="titulo">Monedas Disponibles</h1>
            </div>
        <table id="fila1">
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">Pais</th>
                    <th scope="col">Moneda</th>
                    <th scope="col">ISO</th>
                    <th scope="col">Cambio a ARS</th>
                    <th scope="col">Cambio a USD</th>
                    <th scope="col">Cambio a EUR</th>
                    <th scope="col">Cambio a BRL</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                </tr>
                <tr>
                </tr>
                <tr>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                </tr>
            </tfoot>
        </table>
            `
        }

        armarTabla()

        const llenarTabla = () => {
            Object.keys(paises).map(key => {
                document.getElementById("fila1").insertRow(-1).innerHTML = `
                <th> ${paises[key].indice} </th>
                <td> ${paises[key].nombre} </td>
                <td> ${paises[key].moneda} </td>
                <td> ${paises[key].abreviatura} </td>
                <td class="texto-amarillo"> ${paises[key].valorRespectoAlPesoArgentino} </td>
                <td class="texto-amarillo"> ${paises[key].valorRespectoAlDolar} </td>
                <td class="texto-amarillo"> ${paises[key].valorRespectoAlEuro} </td>
                <td class="texto-amarillo"> ${paises[key].valorRespectoAlReal} </td>
                `;
            })
        }
        
        llenarTabla()

    })


        //TOMAMOS VALORES SELECCIONADOS POR EL USUARIO EN LOS MENUS DROP-DOWN

//MONEDA A INGRESAR
const monedaIngresa = document.querySelector(".moneda1")
let monedaIngreso
monedaIngresa.addEventListener("change",() => {
    const opcionSeleccionada = monedaIngresa.options[monedaIngresa.selectedIndex].value;
    console.log(opcionSeleccionada)

    if (opcionSeleccionada == "Argentina - ARS") {
        monedaIngreso = 1
    } else if (opcionSeleccionada == "Estados unidos - USD") {
        monedaIngreso = 2
    } else if (opcionSeleccionada == "Europa - EU") {
        monedaIngreso = 3
    } else if (opcionSeleccionada == "Brasil - BRL") {
        monedaIngreso = 4
    } else {
        console.log("seleccione una opcion")
    }

})


 // MONEDA A ENTREGAR
const monedaEntrega = document.querySelector(".moneda2")
let monedaEgreso
monedaEntrega.addEventListener("change",() => {
    const opcionSeleccionada2 = monedaEntrega.options[monedaEntrega.selectedIndex].value;
    console.log(opcionSeleccionada2)

    if (opcionSeleccionada2== "Argentina - ARS") {
        monedaEgreso = 1
    } else if (opcionSeleccionada2 == "Estados unidos - USD") {
        monedaEgreso = 2
    } else if (opcionSeleccionada2== "Europa - EU") {
        monedaEgreso = 3
    } else if (opcionSeleccionada2== "Brasil - BRL") {
        monedaEgreso = 4
    } else {
        console.log("seleccione una opcion")
    }

})

        //TOMAMOS INPUT MONTO A INGRESAR Y MONTO A ENTREGAR

//MONTO A INGRESAR
const monto = document.getElementById("montoAIngresar")
let montoIngresado
monto.addEventListener("change", () => {
    montoIngresado = monto.value
    console.log(montoIngresado)
})

//MONTO A ENTREGAR
const montoEntrega = document.getElementById("montoAEntregar")









