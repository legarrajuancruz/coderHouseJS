class Usuario {
    constructor(nombre, apellido, domicilio, dni) {
        this.nombre = nombre
        this.apellido = apellido
        this.domicilio = domicilio
        this.dni = dni
    }

    setNombre(nuevoNombre) {
        if (nombre != '') {
            this.nombre = nuevoNombre
        }
    }
    setApellido(nuevoApellido) {
        if (apellido != '') {
            this.apellido = nuevoApellido
        }
    }
    setDomicilio(nuevoDomicilio) {
        if (domicilio != '') {
            this.domicilio = nuevoDomicilio
        }
    }
    setDomicilio(nuevoDni) {
        if (dni != '') {
            this.dni = nuevoDni
        }
    }

}



document.getElementById("bienvenida").innerHTML = `Hola, por favor enciende la luz y completa tus datos`

function asignarValoresAlosInputs(usuario) {
    if (usuario.nombre != '') {
        document.getElementById("bienvenida").innerHTML = `Hola de nuevo ${usuario.nombre}, enciende la luz para modificar tus datos`
        document.getElementById("inputNombre").value = usuario.nombre
        document.getElementById("inputApellido").value = usuario.apellido
        document.getElementById("inputDomicilio").value = usuario.domicilio
        document.getElementById("inputDni").value = usuario.dni

    }
}

let objetoLocalStorage = JSON.parse(localStorage.getItem("usuario"))


if (objetoLocalStorage) {

    let usuario = new Usuario(objetoLocalStorage.nombre, objetoLocalStorage.apellido, objetoLocalStorage.domicilio, objetoLocalStorage.dni, objetoLocalStorage.modoOscuro)

    console.log("usuario ===>")
    console.log(usuario)

    asignarValoresAlosInputs(usuario)
    activarModoOscuro(objetoLocalStorage.modoOscuro)

}

document.getElementById("modoOscuro").addEventListener('change', activarModoOscuro)
document.getElementById("formGrabarDatos").addEventListener("submit", grabarDatos);
document.getElementById("reload").addEventListener('click', () => {
    location.reload();
})

function grabarDatos(e) {
    e.preventDefault();
    let valorInputNombre = document.getElementById("inputNombre").value
    let valorInputApellido = document.getElementById("inputApellido").value
    let valorInputDomicilio = document.getElementById("inputDomicilio").value
    let valorInputDni = document.getElementById("inputDni").value

    localStorage.setItem("usuario", JSON.stringify({
        nombre: valorInputNombre,
        apellido: valorInputApellido,
        domicilio: valorInputDomicilio,
        dni: valorInputDni,

    }))
}

function standBy() {
    document.querySelector("#img-lampara").src = "./assets/images/apagada.jpg";
    document.querySelector("#background").classList.add("apagado");
    document.querySelector("#background").classList.remove("prendido");
    document.querySelector("#formulario").classList.add("oculto");
}

standBy()

function prender() {
    document.querySelector("#img-lampara").src = "./assets/images/encendida.jpg";
    document.querySelector("#background").classList.add("prendido");
    document.querySelector("#background").classList.remove("apagado");
    document.querySelector("#formulario").classList.remove("oculto");
    document.querySelector("#bienvenida").classList.add("oculto");
}

function apagar() {
    document.querySelector("#img-lampara").src = "./assets/images/apagada.jpg";
    document.querySelector("#background").classList.add("apagado");
    document.querySelector("#background").classList.remove("prendido");
    document.querySelector("#formulario").classList.add("oculto");
    document.querySelector("#bienvenida").classList.remove("oculto");
}


function activarModoOscuro() {
    if (document.getElementById("modoOscuro").checked) {
        document.body.className = "claro"
        prender()
    } else {
        document.body.className = "oscuro"
        apagar()
    }
}

