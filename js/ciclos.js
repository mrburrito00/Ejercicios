function sumarImpares() {
    var numero = 1;
    var suma = 0;
    while (numero <= 100) {
        if (numero % 2 !== 0) {
            suma = suma + numero;
        }
        numero++;
    }
    document.getElementById("resultadoImpares").textContent =
        "La suma de los números impares del 1 al 100 es: " + suma;
}

function mostrarAsteriscos() {
    var campo = document.getElementById("cantidadAsteriscos");
    var cantidad = Number(campo.value);
    if (campo.value === "" || !Number.isInteger(cantidad) || cantidad < 1 || cantidad > 60) {
        document.getElementById("resultadoAsteriscos").textContent = "Escribe un número entero entre 1 y 60.";
        return;
    }
    var asteriscos = "";
    for (var i = 0; i < cantidad; i++) {
        asteriscos = asteriscos + "*";
    }
    document.getElementById("resultadoAsteriscos").textContent = asteriscos;
}

function mostrarTablas() {
    var contenedor = document.getElementById("resultadoTablas");
    contenedor.innerHTML = "";

    for (var tabla = 1; tabla <= 10; tabla++) {
        var texto = "Tabla del " + tabla + "\n";
        for (var numero = 1; numero <= 10; numero++) {
            texto = texto + tabla + " x " + numero + " = " + (tabla * numero) + "\n";
        }
        var columna = document.createElement("div");
        columna.className = "col-sm-6 col-md-4";
        var recuadro = document.createElement("div");
        recuadro.className = "tabla-multiplicar";
        recuadro.textContent = texto;
        columna.appendChild(recuadro);
        contenedor.appendChild(columna);
    }
}
