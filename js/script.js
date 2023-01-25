
////////////////////////////////////////  CONSTANTES GLOBALES  ////////////////////////////////////////////////
const porcentajeLunes = 0.005;
const porcentajeMartes = 0.015;
const porcentajeMiercoles = 0.025;
const porcentajeJueves = 0.010;
const porcentajeViernes = 0.030;

////////////////////////////////////////  VARIABLES GLOBALES  ////////////////////////////////////////////////
let dia = 0;
let monto = 0;
let reintegro = 0;
let lobby = 0;
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
        this.apellido = ""; F
        this.domicilio = "";
        this.dni = dni = "";
        this.activo = false
    }
}

class compras {
    constructor(producto, precio) {
        this.producto = producto.toLowerCase();
        this.precio = precio;
    }
    sumarIva() {
        this.precio = parseInt(this.precio * 1.21);
    }
}

////////////////////////////////////////  DESARROLLO ARREGLO CON OBJETOS  ////////////////////////////////////////////////

const baseDatos = []

baseDatos.push(new persona("Gregorio", "Legarra", "Sarmiento 732", 11717794, false));
baseDatos.push(new persona("Paola", "Merigo", "Jurado 1279", 32181427, false));


////////////////////////////////////////  MODULO IDENTIFICACION USUARIO  ////////////////////////////////////////////////

alert("Bienvenido a cuenta DNI \n Sistema de registro de usuarios")

function recepcion() {
    lobby = parseFloat(prompt("Ingrese su numero de dni"));
    while (isNaN(lobby) || (typeof lobby != "number")) {
        lobby = parseFloat(prompt("Ingrese su numero de dni"));
    } return lobby
}

recepcion();

function busqueda(baseDatos, lobby) {
    let i = 0;


    for (i = 0; i < baseDatos.length; i++) {
        baseDatos[i];
        if (lobby == baseDatos[i].dni) {
            alert("Usuario Registrado \n \n Hola " + baseDatos[i].nombre + " " + baseDatos[i].apellido + "\n Domicilio: " + baseDatos[i].domicilio + "\n DNI: " + baseDatos[i].dni)
            return baseDatos[i].activo = true;
        }
    }

    alert("Usuario, no registrado \n Por favor complete los datos para su registro")
    crearUsuario();
}


////////////////////////////////////////  CREACION NUEVO OBJETO-USUARIO  ////////////////////////////////////////////////

function crearUsuario() {
    baseDatos.push(new persona(
        nombre = prompt("Ingrese nombre"),
        apellido = prompt("Ingrese su apellido"),
        domicilio = prompt("Ingrese su domicilio"),
        dni = parseFloat(prompt("Ingrese su dni")),
        activo = true,
    )
    )
    alert("Nuevo usuario registrado")
}

busqueda(baseDatos, lobby);

alert("Promocion ENERO \n con la compra de 3 productos se le reintegrara un % de dinero a su CUENTA DNI \n A todos los productos se les suma automaticamente el IVA")

////////////////////////////////////////  MODULO DESCUENTOS  ////////////////////////////////////////////////

function cuenta(monto, porcentaje) {
    return (parseInt(monto * porcentaje))
}

function ingresoMonto() {
    monto = 0;

    for (let i = 0; i < cantidadProductos; i++) {
        monto = mercado[i].precio + monto;
    }

    return monto;
}

function devolucion(dia) {
    dia = prompt("Ingrese un dia de la semana, pulse 0 para salir").toLowerCase();
    while (dia != 0) {

        switch (dia) {
            case "lunes":
                ingresoMonto()

                reintegro = cuenta(monto, porcentajeLunes)
                alert("Los dias " + dia + " el reintegro sera de " + (porcentajeLunes * 100) + "%")
                alert("Total suma productos $ " + monto + "\n Se le reintegraran " + " $" + reintegro + " en su cuenta DNI")
                break;

            case "martes":
                ingresoMonto()

                reintegro = cuenta(monto, porcentajeMartes);
                alert("Los dias " + dia + " el reintegro sera de " + (porcentajeMartes * 100) + "%")
                alert("Total suma productos $ " + monto + "\n Se le reintegraran " + " $" + reintegro + " en su cuenta DNI")
                break;

            case "miercoles":
                ingresoMonto()

                reintegro = cuenta(monto, porcentajeMiercoles);
                alert("Los dias " + dia + " el reintegro sera de " + (porcentajeMiercoles * 100) + "%")
                alert("Total suma productos $ " + monto + "\n Se le reintegraran " + " $" + reintegro + " en su cuenta DNI")
                break;

            case "jueves":
                ingresoMonto()

                reintegro = cuenta(monto, porcentajeJueves);
                alert("Los dias " + dia + " el reintegro sera de " + (porcentajeJueves * 100) + "%")
                alert("Total suma productos $ " + monto + "\n Se le reintegraran " + " $" + reintegro + " en su cuenta DNI")
                break;

            case "viernes":
                ingresoMonto()

                reintegro = cuenta(monto, porcentajeViernes);
                alert("Los dias " + dia + " el reintegro sera de " + (porcentajeViernes * 100) + "%")
                alert("Total suma productos $ " + monto + "\n Se le reintegraran " + " $" + reintegro + " en su cuenta DNI")
                break;

            case "sabado": case "domingo":
                alert("No Aplica reintegro")
                break;

            default:
                alert("Recuerde ingresar un dia de la semana - Lunes a Viernes")
                break;
        }
        dia = prompt("Ingrese un dia de la semana, pulse 0 para salir");
    }
}

const mercado = [];

let cantidadProductos = 3;

function ingresarNumero() {
    precio = parseFloat(prompt("Ingrese precio del producto"));

    while (isNaN(precio) || (typeof precio != "number")) {
        precio = parseFloat(prompt("Ingrese precio del producto"));
    }
    return precio
}

for (let i = 0; i < cantidadProductos; i++) {
    mercado[i];
    mercado.push(new compras(
        producto = prompt("Ingrese Producto"),
        precio = ingresarNumero(),
    )
    )
    for (let iva of mercado) {
        iva.sumarIva()
    }
}

devolucion();

function despedida(baseDatos) {
    const busqueda = baseDatos.find((encontrado) => encontrado.activo === true)
    alert("Volve Pronto " + busqueda.nombre + " " + busqueda.apellido)

}

despedida(baseDatos);


