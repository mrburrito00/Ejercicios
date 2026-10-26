var paisesOriginales = [
    "México", "Argentina", "Colombia", "Chile", "Perú",
    "España", "Japón", "Brasil", "Canadá", "Francia"
];
var paises = paisesOriginales.slice();

function textoDeArreglo(arreglo) {
    var texto = "";
    for (var i = 0; i < arreglo.length; i++) {
        if (i > 0) {
            texto = texto + ", ";
        }
        if (i in arreglo) {
            texto = texto + arreglo[i];
        } else {
            texto = texto + "(vacío)";
        }
    }
    return texto;
}

function actualizarPaises() {
    document.getElementById("listaPaises").textContent = textoDeArreglo(paises);
    document.getElementById("cantidadPaises").textContent = paises.length;
}

function reiniciarPaises() {
    paises = paisesOriginales.slice();
    actualizarPaises();
    document.getElementById("mensajeArreglo").textContent = "Se recuperó el arreglo original.";
}

function ejecutarArreglo(operacion) {
    var antes = textoDeArreglo(paises);
    var resultado = "";

    switch (operacion) {
        case "pop":
            resultado = "Se eliminó el último país: " + paises.pop();
            break;
        case "shift":
            resultado = "Se eliminó el primer país: " + paises.shift();
            break;
        case "push":
            paises.push("Alemania");
            resultado = "Se agregó Alemania al final.";
            break;
        case "unshift":
            paises.unshift("Italia");
            resultado = "Se agregó Italia al inicio.";
            break;
        case "splice":
            paises.splice(2, 1, "Uruguay");
            resultado = "Se reemplazó el país de la posición 3 por Uruguay.";
            break;
        case "delete":
            if (paises.length > 2) {
                delete paises[2];
                resultado = "Se borró el contenido de la posición 3; queda un espacio vacío.";
            } else {
                resultado = "El arreglo debe tener al menos 3 posiciones.";
            }
            break;
        case "reverse":
            paises.reverse();
            resultado = "Se invirtió el orden de los países.";
            break;
        case "sort":
            paises.sort();
            resultado = "Se ordenaron los países alfabéticamente.";
            break;
        case "concat":
            var nuevoArreglo = paises.concat(["Ecuador", "Costa Rica"]);
            resultado = "Nuevo arreglo: " + textoDeArreglo(nuevoArreglo) +
                "\nEl arreglo original no cambia.";
            break;
        case "join":
            resultado = "Texto unido con guiones: " + paises.join(" - ");
            break;
        case "length":
            resultado = "Número de posiciones: " + paises.length;
            break;
    }

    var despues = textoDeArreglo(paises);
    document.getElementById("resultado-" + operacion).textContent =
        "Antes: " + antes + "\n" + resultado + "\nAhora: " + despues;
    document.getElementById("mensajeArreglo").textContent = "Última operación: " + operacion;
    actualizarPaises();
}

actualizarPaises();
