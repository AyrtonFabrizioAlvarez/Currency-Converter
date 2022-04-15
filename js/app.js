const API_KEY = "055428f3c41197681c196442e17b916a"
let LAT = "";
let LON = "";
let clima = {};

const getWeather = async () => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&units=metric&appid=${API_KEY}`)
        const data = await response.json()
        return {
            feels_like: data.main?.feels_like,
            humidity: data.main?.humidity,
            temp: data.main?.temp,
            temp_max: data.main?.temp_max,
            temp_min: data.main?.temp_min,
            icon: data.weather[0].icon,
            name: data.name,
        }        
    } catch (e) {
        console.log(`Hubo un error: ${e}`)
    }
}


const armarTarjeta = async (objeto) => {
    const cuerpo = document.querySelector(".clima")
    cuerpo.innerHTML = `
    <div class="box_0">
        <h2 class="name">${objeto.name}</h2>
        
        <img class="icon" src="http://openweathermap.org/img/w/${objeto.icon}.png" alt="">
    </div>
    <div class="box_1">
        
        <h4 class="feels_like"><span>Térmica</span> ${Number(objeto.feels_like).toFixed(0)}</h4>
        <h4 class="humidity"><span>Humedad</span> ${objeto.humidity} %</h4>
    </div>
    
    <div class="box_2">
        <h4 class="temp"><span>Temperatura</span> ${objeto.temp}</h4>
        <h4 class="temp_max"><span>Máxima</span> ${objeto.temp_max}</h4>
        <h4 class="temp_min"><span>Mínima</span> ${objeto.temp_min}</h4>
    </div>
    `
}



let LOCALIZACION = async () => {
    const localizacionActual = await navigator.geolocation.getCurrentPosition((response) => {
        LAT = response.coords.latitude;
        LON = response.coords.longitude;
        clima = getWeather().then(response => {
            armarTarjeta(response)
        })
    })
} 

LOCALIZACION()

















//CREANDO NUEVOS OBJETOS
const argentina = new Pais(1,"Argentina","peso argentino", "ARS", 1, 0.0092, 0.0084, 0.047);
const estadosUnidos = new Pais(2,"Estados unidos","dolar estado unidense", "USD", 200, 1, 0.91, 5.06);
const europa = new Pais(3,"Europa", "euro", "EU", 245, 1.09, 1, 5.53);
const brasil = new Pais(4,"Brasil", "reales", "BRL", 21.47, 0.20, 0.18, 1);


//FUNCION PARA SUMAR ELEMENTOS AL ARRAY PAISES
const agregarElementoAlArray = (pais) => {
    paises.push(pais)
}
//SUMAMOS LOS OBJETOS A NUESTRO ARRAY
agregarElementoAlArray(argentina)
agregarElementoAlArray(estadosUnidos)
agregarElementoAlArray(europa)
agregarElementoAlArray(brasil)


    //MOSTRAMOS LAS MONEDAS A SELECCIONAR EN LOS MENUS DROP-DOWN

//MONEDA A INGRESAR
Object.keys(paises).map(key => {
    const campo = document.querySelectorAll(".moneda1")
    const opcion = document.createElement("option")
    campo.forEach ((campo) => {
        opcion.setAttribute("class","monedaIngreso")
        const textoOpcion = document.createTextNode (`${paises[key].nombre} - ${paises[key].abreviatura}`)
        opcion.appendChild(textoOpcion)
        campo.appendChild(opcion)
    })
})

    //MONEDA A ENTREGAR
Object.keys(paises).map(key => {
    const campo2 = document.querySelectorAll(".moneda2")
    const opcion = document.createElement("option")
    campo2.forEach ((campo2) => {
        opcion.setAttribute("class","monedaEntrega")
        const textoOpcion = document.createTextNode (`${paises[key].nombre} - ${paises[key].abreviatura}`)
        opcion.appendChild(textoOpcion)
        campo2.appendChild(opcion)
    })
})
    





// CARGAR O INICIALIZAR LOCALSTORAGE CONVERSIONES
let arrUltimasConversiones =  JSON.parse(localStorage.getItem("conversiones")) || [];

//CREAMOS UNA NUEVA FILA EN EL HTML CON LA ULTIMA CONVERSION
const nuevaFila = (element) => {
    document.getElementById("tabla").insertRow(-1).innerHTML = `
            <td> ${element.desde} </td>
            <td> ${element.hasta} </td>
            <td> ${element.ingreso} </td>
            <td> ${element.entrega} </td>
            `;
}

//ARMAMOS LA TABLA DE ULTIMAS CONVERSIONES USANDO LA FUNCTION NUEVA FILA INTERNAMENTE
const armarTablaUltimasConversiones = (arrConversiones) => {    
    arrConversiones.map(element => {
        nuevaFila(element)
    })
}











//SI AL INICIAR HAY CONTENIDO EN LOCAL STORAGE LO VA A DIBUJAR EN EL HTML
(arrUltimasConversiones.length >0) && armarTablaUltimasConversiones(arrUltimasConversiones)




//CONVERSOR

const conversor = ()=> {

        switch (monedaIngreso) {

            //ARS
            case 1:
                const cambio = {
                    1 :   montoIngresado,
                    2 :   argentina.obtenerCambioADolar(montoIngresado),
                    3 :   argentina.obtenerCambioAEuros(montoIngresado),
                    4 :   argentina.obtenerCambioAReal(montoIngresado),
                }
                montoEntrega.value = cambio[monedaEgreso]
                break;

                //USD
            case 2:
                const cambio2 = {
                    1 :   estadosUnidos.obtenerCambioAPesosArgentinos(montoIngresado),
                    2 :   montoIngresado,
                    3 :   estadosUnidos.obtenerCambioAEuros(montoIngresado),
                    4 :   estadosUnidos.obtenerCambioAReal(montoIngresado),
                }
                montoEntrega.value = cambio2[monedaEgreso]
                break;
    
                //EU
            case 3:
                const cambio3 = {
                    1 :   europa.obtenerCambioAPesosArgentinos(montoIngresado),
                    2 :   europa.obtenerCambioADolar(montoIngresado),
                    3 :   montoIngresado,
                    4 :   europa.obtenerCambioAReal(montoIngresado),
                }
                montoEntrega.value = cambio3[monedaEgreso]
                break;

            
                //BRL
                case 4:
                const cambio4 = {
                    1 :   brasil.obtenerCambioAPesosArgentinos(montoIngresado),
                    2 :   brasil.obtenerCambioADolar(montoIngresado),
                    3 :   brasil.obtenerCambioAEuros(montoIngresado),
                    4 :   montoIngresado,
                }
                montoEntrega.value = cambio4[monedaEgreso]
                break;
        }
}



//CONVERTIR AL HACER CLICK
const convertir = document.getElementById("BtnSubmit")
convertir.addEventListener("click", () => {

    // ARMAMOS STRING PARA VERIFICAR QUE NO SE INTRODUZCAN CARACTERES QUE NO SEAN NUMEROS
    let Input = monto.value
    let arrInput = Input.split("")
    let puedeConvertir
    for (let i = 0 ; i < arrInput.length ; i++) {
            if ((arrInput[i] == 0) || (arrInput[i] == 1) || (arrInput[i] == 2) || (arrInput[i] == 3) || (arrInput[i] == 4) || (arrInput[i] == 5) || (arrInput[i] == 6) || (arrInput[i] == 7) || (arrInput[i] == 8) || (arrInput[i] == 9)) {
                puedeConvertir = true;
            } else  {
                puedeConvertir = false;
                break
            }
    }
    console.log(puedeConvertir)

    if ((4 >= monedaIngreso >= 1) & (4 >= monedaEgreso >=1) & (puedeConvertir)) {

        conversor()

        
        //CREAMOS OBJETOS CON LOS DATOS DE LA ULTIMA CONVERSION
        let ultimaConversion = {
            desde: monedaIngresa.value,
            hasta: monedaEntrega.value,
            entrega: montoEntrega.value,
            ingreso: monto.value,
        }
    
        //AGREGAMOS LA ULTIMA CONVERSION AL ARRAY
        arrUltimasConversiones.push(ultimaConversion)

        //GUARDAMOS EN LOCAL STORAGE EL ARRAY NUEVO (SUMANDO ULTIMA CONVERSION)
        localStorage.setItem("conversiones", JSON.stringify(arrUltimasConversiones))

        //CREAMOS UNA NUEVA FILA EN EL DOM PARA MOSTRAR LA ULTIMA CONVERSION
        nuevaFila(ultimaConversion)

        //CREAMOS UNA VARIABLE CON LA HORA ACTUAL
        let hora = moment().format('MMMM Do YYYY, h:mm:ss a');


        const Toast = Swal.mixin({
            toast: true,
            position: 'center',
            width: '25rem',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })
        Toast.fire({
            icon: 'success',
            title: 'Ultima conversion guardada a las:',
            html: `${hora}`
        })
    }

    else {
        const Toast = Swal.mixin({
            toast: true,
            position: 'center',
            width: '25rem',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })
        Toast.fire({
            icon: 'error',
            title: 'Falló la conversion',
            text: "Ingrese un caracter válido ('0, 1, 2, 3, 4, 5, 6, 7, 8, 9')"
        })
    }
})



// DARK/LIGHT MODE

let modoOscuro = document.getElementById("checkbox")
modoOscuro.onclick = () => {
            const principal = document.querySelector(".principal")
            let temaActual = principal.getAttribute('data-theme');
            if ( temaActual == 'dark') {
                principal.setAttribute('data-theme', 'light');
                document.querySelector(".fa-solid").classList.toggle("trash-black");
                document.querySelector(".fa-sun").classList.toggle("theme-icon-black")
                document.querySelector(".fa-moon").classList.toggle("desaparecer")
                document.querySelector(".fa-moon").classList.toggle("theme-icon-white")
                document.querySelector(".fa-sun").classList.toggle("desaparecer")
                document.querySelector(".clima").classList.toggle("black")
            }
            else {
                principal.setAttribute('data-theme', 'dark');
                document.querySelector(".fa-solid").classList.toggle("trash-black");
                document.querySelector(".fa-moon").classList.toggle("theme-icon-white")
                document.querySelector(".fa-sun").classList.toggle("desaparecer")
                document.querySelector(".fa-sun").classList.toggle("theme-icon-black")
                document.querySelector(".fa-moon").classList.toggle("desaparecer")
                document.querySelector(".clima").classList.toggle("black")

            }
    }


let trash = document.querySelector(".fa-solid")
let limpiarTabla = document.getElementById("tabla")
trash.onclick = () => {
    localStorage.clear()
    limpiarTabla.innerHTML = ` `
}