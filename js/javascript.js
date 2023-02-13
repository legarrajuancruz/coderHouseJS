
////////////////////////////////////////  CONSTANTES GLOBALES  ////////////////////////////////////////////////
const porcentajeLunes = 0.005;
const porcentajeMartes = 0.015;
const porcentajeMiercoles = 0.025;
const porcentajeJueves = 0.010;
const porcentajeViernes = 0.030;

////////////////////////////////////////  VARIABLES GLOBALES  ////////////////////////////////////////////////
let dia = 0;
let monto = 0;
let resultado = 0;
let reintegro = 0;
let precio = 0;


////////////////////////////////////////  DESARROLLO CONSTRUCTOR DE OBJETOS  ////////////////////////////////////////////////

class persona {
    constructor(nombre, apellido, domicilio, dni, activo) {
        this.nombre = nombre.toUpperCase();
        this.apellido = apellido.toUpperCase();
        this.domicilio = domicilio.toUpperCase();
        this.dni = dni;
        this.activo = activo;
    }

    borrarDatos() {
        this.nombre = "";
        this.apellido = "";
        this.domicilio = "";
        this.dni = dni = "";
        this.activo = false
    }
}

document.getElementById("inputDni").value

////////////////////////////////////////  GET LOCALSTORGAE  ////////////////////////////////////////////////

let objetoLocalStorage = JSON.parse(localStorage.getItem("Usuarios"))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////  LOCALSTORGAE - BUSCAR USUARIO ////////////////////////////////////////////////

document.getElementById("bienvenida").innerHTML = `Hola, por favor enciende la luz y completa tus datos`

function recepcion() {

    if (objetoLocalStorage) {
        const busqueda = objetoLocalStorage.find((encontrado) => encontrado.activo === true)
        document.getElementById("bienvenida").innerHTML = ("Hola " + busqueda.nombre + " " + busqueda.apellido + " , enciende la luz para modificar tus datos")

    }
    else (document.getElementById("bienvenida").innerHTML = `Hola, por favor enciende la luz y completa tus datos`)
}

//recepcion()

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




////////////////////////////////////////  ARREGLO CON OBJETOS - SET LOCALSTORGAE   ////////////////////////////////////////////////
const baseDatos = []

baseDatos.push(new persona("Gregorio", "Legarra", "Sarmiento 732", 11717794, false));
baseDatos.push(new persona("Paola", "Merigo", "Jurado 1279", 32181427, false));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




function busquedaUsuario() {
    let i = 0;
    if (document.getElementById("btnDni").addEventListener) {
        for (i = 0; i < baseDatos.length; i++) {
            baseDatos[i];

            if (document.getElementById("inputDni").value == baseDatos[i].dni) {
                document.getElementById("respuestaIngreso").innerHTML = `Usuario Registrado:  ${baseDatos[i].nombre} ${baseDatos[i].apellido}`

                document.querySelector("#datosUsuario").classList.add("ocultoTotal")
                document.querySelector("#formulario").classList.add("ocultoTotal");
                document.querySelector("#usuarioInicio").classList.add("mostrarTotal")
                document.querySelector("#datosUsuario").classList.remove("mostrarTotal")

                document.querySelector("#respuestaIngreso").classList.remove("ocultoTotal")
                baseDatos[i].activo = true;
                toLocalStorage(baseDatos);
                return

            }
            else {
                document.getElementById("btnForm").addEventListener('click', crearUsuario)
                document.querySelector("#respuestaIngreso").classList.remove("ocultoTotal")
                document.getElementById("respuestaIngreso").innerHTML = `Registro de nuevo usuario`

                document.querySelector("#datosUsuario").classList.remove("mostrarTotal")
                document.querySelector("#datosUsuario").classList.add("ocultoTotal")
                document.querySelector("#formulario").classList.remove("ocultoTotal");
                document.querySelector("#usuarioInicio").classList.add("ocultoTotal")

            }
        }
    }
}

document.getElementById("btnDni").addEventListener('click', busquedaUsuario)

function crearUsuario() {
    baseDatos.push(new persona(
        nombre = document.getElementById("inputNombre").value,
        apellido = document.getElementById("inputApellido").value,
        domicilio = document.getElementById("inputDni").value,
        dni = document.getElementById("inputDni").value,
        activo = true,
    )
    )
    document.querySelector("#datosUsuario").classList.remove("mostrarTotal")
    document.querySelector("#formulario").classList.add("ocultoTotal")
    document.querySelector("#usuarioInicio").classList.add("mostrarTotal")
    document.querySelector("#respuestaIngreso").classList.remove("ocultoTotal")
    let print = `Nuevo usuario registrado: ` + nombre + " " + apellido
    document.getElementById("respuestaIngreso").innerHTML = print
    toLocalStorage(baseDatos);
}


document.getElementById("usuarioInicio").addEventListener('click', usuarioInicio)

function usuarioInicio() {
    document.querySelector("#usuarioInicio").classList.remove("mostrarTotal")
    document.querySelector("#usuarioInicio").classList.add("ocultoTotal")
    document.querySelector("#datosUsuario").classList.add("mostrarTotal")
    document.querySelector("#respuestaIngreso").classList.add("ocultoTotal")

    for (i = 0; i < baseDatos.length; i++) {
        baseDatos[i];

        if (document.getElementById("inputDni").value == baseDatos[i].dni) {
            baseDatos[i].activo = false
            toLocalStorage(baseDatos);

        }
    }
}


document.getElementById("modoOscuro").addEventListener('change', activarModoOscuro)

function prender() {
    document.querySelector("#img-lampara").src = "./assets/images/encendida.jpg";
    document.querySelector("#background").classList.add("prendido");
    document.querySelector("#background").classList.remove("apagado");
    document.querySelector("#formulario").classList.remove("oculto");
    document.querySelector("#bienvenida").classList.add("ocultoTotal");
}

function apagar() {
    document.querySelector("#img-lampara").src = "./assets/images/apagada.jpg";
    document.querySelector("#background").classList.add("apagado");
    document.querySelector("#background").classList.remove("prendido");
    document.querySelector("#formulario").classList.add("oculto");
    document.querySelector("#bienvenida").classList.remove("ocultoTotal");

}

function activarModoOscuro() {

    if (document.getElementById("modoOscuro").checked) {
        document.body.className = "claro"
        document.querySelector("#teclaLuz").classList.remove("ocultoTotal")
        document.querySelector("#teclaLuz").classList.add("mostrar")
        prender()
    } else {
        document.body.className = "oscuro"
        document.querySelector("#teclaLuz").classList.add("ocultoTotal")
        document.querySelector("#teclaLuz").classList.remove("mostrar")
        apagar()
    }
}


function toLocalStorage(baseDatos) {

    const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) }
    guardarLocal("Usuarios", JSON.stringify(baseDatos))

}




