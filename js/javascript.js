const STUDENT = 'JuanCruz'
if (STUDENT == '')
    console.error("Ingresa el usuario!")

document.getElementById("loader").style.display = "none";

/////////////////////// CONSTRUCTOR OBJETOS CON CLASE ///////////////////////

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


/////////////////////// INGRESO DATOS USUARIO ////////////////////////

document.getElementById("bienvenida").innerHTML = `Hola, por favor enciende la luz y completa tus datos`

function ValoresInputs(usuario) {
    if (usuario.nombre != '') {
        document.getElementById("bienvenida").innerHTML = `Hola de nuevo ${usuario.nombre}, enciende la luz para modificar tus datos`
        document.getElementById("inputNombre").value = usuario.nombre
        document.getElementById("inputApellido").value = usuario.apellido
        document.getElementById("inputDomicilio").value = usuario.domicilio
        document.getElementById("inputDni").value = usuario.dni
    }
}

///////////////////////LOCALSTORAGE JSON PARSE////////////////////////

let objetoLocalStorage = JSON.parse(localStorage.getItem("usuario"))

if (objetoLocalStorage) {
    let usuario = new Usuario(objetoLocalStorage.nombre, objetoLocalStorage.apellido, objetoLocalStorage.domicilio, objetoLocalStorage.dni)
    ValoresInputs(usuario)

} else {
    let usuario = new Usuario('', '', '', '',)
    ValoresInputs(usuario)
}

/////////////////////// EVENTOS ////////////////////////

document.getElementById("teclaLuz").addEventListener('change', todoApagado)
document.getElementById("formGrabarDatos").addEventListener("submit", grabarDatos);
document.getElementById("reload").addEventListener('click', () => {
    location.reload();
})
document.getElementById("traerUsuario").addEventListener("click", () => {
    buscarUsuario(document.getElementById("inputNombre").value)
});
document.getElementById("actualizarUsuario").addEventListener("click", () => {
    actualizarUsuario({
        userId: document.getElementById("inputNombre").value,
        userApellido: document.getElementById("inputApellido").value,
        userDomicilio: document.getElementById("inputDomicilio").value,
        userDni: document.getElementById("inputDni").value,
    })
});


///////////////////////LOCALSTORAGE JSON STRINGIFY - GRABAR EN SERVER ////////////////////////

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
    grabarDatosServer({
        userId: valorInputNombre,
        userApellido: valorInputApellido,
        userDomicilio: valorInputDomicilio,
        userDni: valorInputDni,
    })
}

///////////////////////FETCH GET - async-await +spinner ////////////////////////

const buscarUsuario = async (userId) => {
    document.getElementById("loader").style.display = "";
    document.getElementById("main").style.display = "none";

    const respuesta = await fetch(`https://api.fabianjanuszewski.com/34165/user/${userId}`)
    const data = await respuesta.json()
    if (!respuesta.ok) {
        mostrarMensaje({
            titulo: "¡Usuario no registrado!",
            comentario: `respuesta del servidor: ${data.error.message}`,
            icono: "warning"
        })

        document.getElementById("loader").style.display = "none";
        document.getElementById("main").style.display = "";
        return
    }

    let usuario = new Usuario(data.userId, data.userApellido, data.userDomicilio, data.userDni)
    ValoresInputs(usuario)

    document.getElementById("loader").style.display = "none";
    document.getElementById("main").style.display = "";
}


///////////////////////FETCH POST - async-await +spinner ////////////////////////

const grabarDatosServer = async (user) => {
    document.getElementById("loader").style.display = "";
    document.getElementById("main").style.display = "none";
    const respuesta = await fetch('https://api.fabianjanuszewski.com/34165/user/', {
        method: 'POST',
        body: JSON.stringify({
            userId: user.userId,
            userApellido: user.userApellido,
            userDomicilio: user.userDomicilio,
            userDni: user.userDni,
        })
    })
    const data = await respuesta.json()

    if (respuesta.ok) {
        mostrarMensaje({
            titulo: "¡Nuevo usuario!",
            comentario: `¡El usuario ${user.userId} ${user.userApellido} fue grabado con exito`,
            icono: "success"
        })
    }
    else {
        mostrarMensaje({
            titulo: "¡oops, algo ah salido mal!",
            comentario: `respuesta del servidor: ${data.error.message}`,
            icono: "error"
        })
    }
    document.getElementById("loader").style.display = "none";
    document.getElementById("main").style.display = "";
    return data
}

document.getElementById("traerUsuario").addEventListener("click", () => {
    buscarUsuario(document.getElementById("inputNombre").value)
});



///////////////////////FETCH PUT - async-await +spinner ////////////////////////

const actualizarUsuario = async (user) => {
    document.getElementById("loader").style.display = "";
    document.getElementById("main").style.display = "none";

    const respuesta = await fetch('https://api.fabianjanuszewski.com/34165/user/', {
        method: 'PUT',
        body: JSON.stringify({
            userId: user.userId,
            userApellido: user.userApellido,
            userDomicilio: user.userDomicilio,
            userDni: user.userDni,
        })
    })

    const data = await respuesta.json()
    if (respuesta.ok) {
        mostrarMensaje({
            titulo: "¡Usuario actualizado!",
            comentario: `El usuario ${user.userId} ${user.userApellido} fue actualizado con exito`,
            icono: "success"
        })
    }
    else {
        mostrarMensaje({
            titulo: "¡El usuario no fue actualizado!",
            comentario: `respuesta del servidor: ${data.error.message}`,
            icono: "error"
        })
    }
    document.getElementById("loader").style.display = "none";
    document.getElementById("main").style.display = "";
    return data
}


///////////////////////FETCH DELETE/ - sync-await +spinner ///////////////////////

const deleteUsuario = async (user) => {
    document.getElementById("loader").style.display = "";
    document.getElementById("main").style.display = "none";
    const respuesta = await fetch(`https://api.fabianjanuszewski.com/34165/user/${user}`, {
        method: 'DELETE'
    })
    const data = await respuesta.json()
    if (respuesta.ok) {
        mostrarMensaje({
            titulo: "¡Usuario eliminado!",
            comentario: `El usuario ${user} fue eliminado con exito`,
            icono: "success"
        })
    }
    else {
        mostrarMensaje({
            titulo: "¡El usuario no fue eliminado!",
            comentario: `respuesta del servidor: ${data.error.message}`,
            icono: "error"
        })
    }
    document.getElementById("loader").style.display = "none";
    document.getElementById("main").style.display = "";
    return data
}
document.getElementById("deleteUsuario").addEventListener("click", () => {
    deleteUsuario(document.getElementById("inputNombre").value)
});


/////////////////////// MENSAJE RESPUESTA ///////////////////////

function mostrarMensaje(mensaje) {
    Swal.fire({
        title: mensaje.titulo,
        text: mensaje.comentario,
        icon: mensaje.icono,
        showCancelButton: false,
        showConfirmButton: true
    })
}


/////////////////////// FUNCIONES TECLA LUZ ///////////////////////

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

function todoApagado() {
    if (document.getElementById("teclaLuz").checked) {
        document.body.className = "claro"
        prender()
    } else {
        document.body.className = "oscuro"
        apagar()
    }
}

