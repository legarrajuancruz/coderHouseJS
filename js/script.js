const porcentajeLunes = 0.005;
const porcentajeMartes = 0.015;
const porcentajeMiercoles = 0.025;
const porcentajeJueves = 0.010;
const porcentajeViernes = 0.030;
let dia = 0;
let monto = 0;
let reintegro = 0;
let nombreUsuario = "";
let apellidoUsuario = "";

function informacion() {
    alert("Bienvenido a CUENTA DNI \n Sistema de reintegros mes de Enero")
    let nombre = prompt("Ingrese nombre de usuario");
    let apellido = prompt("Ingrese su apellido");
    if (nombre != "" && apellido != "") {
        alert("Hola " + nombre + " " + apellido);
        nombreUsuario = nombre;
        apellidoUsuario = apellido;
    }
    else if (nombre == "" && apellido != "") {
        alert("Hola " + apellido);
    }
    else if (nombre != "" && apellido == "") {
        alert("Hola " + nombre);
    }
    else {
        alert("Usuario no registrado");
    }
}
alert(nombreUsuario);

function cuenta(monto, porcentajeLunes) {
    return (monto * porcentajeLunes)
}

function ingresoMonto() {
    monto = parseInt(prompt("Ingrese un monto para ver su reintegro"))
    while (isNaN(monto) || (typeof monto != "number")) {
        monto = parseInt(prompt("Ingrese un monto para ver su reintegro"))

    } return monto;
}

function devolucion(dia) {
    dia = prompt("Ingrese un dia de la semana (sin mayusculas), pulse 0 para salir")
    while (dia != 0) {

        switch (dia) {
            case "lunes":
                ingresoMonto()

                reintegro = cuenta(monto, porcentajeLunes)
                alert("Los dias " + dia + " el reintegro sera de " + (porcentajeLunes * 100) + "%")
                alert("Usted ingreso $ " + monto + "\n Se le reintegraran " + " $" + reintegro + " en su cuenta DNI")
                break;

            case "martes":
                ingresoMonto()

                reintegro = cuenta(monto, porcentajeMartes);
                alert("Los dias " + dia + " el reintegro sera de " + (porcentajeMartes * 100) + "%")
                alert("Usted ingreso $ " + monto + "\n Se le reintegraran " + " $" + reintegro + " en su cuenta DNI")
                break;

            case "miercoles":
                ingresoMonto()

                reintegro = cuenta(monto, porcentajeMiercoles);
                alert("Los dias " + dia + " el reintegro sera de " + (porcentajeMiercoles * 100) + "%")
                alert("Usted ingreso $ " + monto + "\n Se le reintegraran " + " $" + reintegro + " en su cuenta DNI")
                break;

            case "jueves":
                ingresoMonto()

                reintegro = cuenta(monto, porcentajeJueves);
                alert("Los dias " + dia + " el reintegro sera de " + (porcentajeJueves * 100) + "%")
                alert("Usted ingreso $ " + monto + "\n Se le reintegraran " + " $" + reintegro + " en su cuenta DNI")
                break;

            case "viernes":
                ingresoMonto()

                reintegro = cuenta(monto, porcentajeViernes);
                alert("Los dias " + dia + " el reintegro sera de " + (porcentajeViernes * 100) + "%")
                alert("Usted ingreso $" + monto + "\n Se le reintegraran " + " $" + reintegro + " en su cuenta DNI")
                break;

            case "sabado": case "domingo":
                alert("No Aplica reintegro")
                break;

            default:
                alert("Recuerde ingresar un dia de la semana - Lunes a Viernes sin mayusculas")
                break;
        }
        dia = prompt("Ingrese un dia, pulse 0 para salir");
    }
}

function despedida() {
    alert("Gracias por utilizar Cuenta DNI")

    if (nombreUsuario != "" && apellidoUsuario != "") {
        alert("Volve pronto " + nombreUsuario + " " + apellidoUsuario);
    }

    else {
        alert("Volve pronto");
    }
}

informacion();
devolucion();
despedida()