var votosNorte = 0;
var votosSur = 0;
var votosCentro = 0;
var votosA = 0;
var votosB = 0;
var votosC = 0;

function votar() {
    var zona = document.getElementById("zona").value;
    var candidato = document.getElementById("candidato").value;
    var nombreZona = "";

    // Usamos switch para saber de qué sección es el voto.
    switch (zona) {
        case "norte":
            votosNorte++;
            nombreZona = "Norte";
            break;
        case "sur":
            votosSur++;
            nombreZona = "Sur";
            break;
        case "centro":
            votosCentro++;
            nombreZona = "Centro";
            break;
        default:
            document.getElementById("resultadoVoto").textContent = "Selecciona una sección.";
            return;
    }

    switch (candidato) {
        case "A":
            votosA++;
            break;
        case "B":
            votosB++;
            break;
        case "C":
            votosC++;
            break;
        default:
            return;
    }

    document.getElementById("resultadoVoto").textContent =
        "Voto registrado para el candidato " + candidato + " en la sección " + nombreZona + ".\n" +
        "Por sección: Norte " + votosNorte + ", Sur " + votosSur + ", Centro " + votosCentro + ".\n" +
        "Por candidato: A " + votosA + ", B " + votosB + ", C " + votosC + ".";
}

function reiniciarVotos() {
    votosNorte = 0;
    votosSur = 0;
    votosCentro = 0;
    votosA = 0;
    votosB = 0;
    votosC = 0;
    document.getElementById("resultadoVoto").textContent = "Los votos se reiniciaron.";
}

var suma = 0;
var cantidad = 0;

function agregarNumero() {
    var campo = document.getElementById("numeroSuma");
    var numero = Number(campo.value);

    if (campo.value === "" || !Number.isFinite(numero)) {
        document.getElementById("resultadoSuma").textContent = "Escribe un número primero.";
    } else if (numero > 0) {
        suma = suma + numero;
        cantidad++;
        document.getElementById("resultadoSuma").textContent =
            "Llevas " + cantidad + " números positivos. Suma actual: " + suma;
        campo.value = "";
        campo.focus();
    } else {
        document.getElementById("resultadoSuma").textContent =
            "Programa terminado. Ingresaste " + cantidad + " números positivos. Suma final: " + suma;
        document.getElementById("botonAgregar").disabled = true;
        campo.disabled = true;
    }
}

function reiniciarSuma() {
    suma = 0;
    cantidad = 0;
    document.getElementById("numeroSuma").value = "";
    document.getElementById("numeroSuma").disabled = false;
    document.getElementById("botonAgregar").disabled = false;
    document.getElementById("resultadoSuma").textContent = "Escribe números positivos y presiona Agregar.";
}

function ordenarNumeros() {
    var campo1 = document.getElementById("orden1");
    var campo2 = document.getElementById("orden2");
    var campo3 = document.getElementById("orden3");
    if (campo1.value === "" || campo2.value === "" || campo3.value === "") {
        document.getElementById("resultadoOrden").textContent = "Llena los tres campos.";
        return;
    }

    var a = Number(campo1.value);
    var b = Number(campo2.value);
    var c = Number(campo3.value);
    var temporal;

    if (a < b) {
        temporal = a;
        a = b;
        b = temporal;
    }
    if (a < c) {
        temporal = a;
        a = c;
        c = temporal;
    }
    if (b < c) {
        temporal = b;
        b = c;
        c = temporal;
    }
    document.getElementById("resultadoOrden").textContent =
        "De mayor a menor: " + a + ", " + b + ", " + c;
}

function calcularImporte() {
    var campo = document.getElementById("importeBruto");
    var bruto = Number(campo.value);
    if (campo.value === "" || bruto < 0) {
        document.getElementById("resultadoImporte").textContent = "Escribe un importe igual o mayor que cero.";
        return;
    }
    var porcentaje;
    if (bruto > 15000) {
        porcentaje = 0.16;
    } else {
        porcentaje = 0.10;
    }

    var impuesto = bruto * porcentaje;
    var neto = bruto - impuesto;
    document.getElementById("resultadoImporte").textContent =
        "Impuesto aplicado: " + (porcentaje * 100) + "%\n" +
        "Impuestos: €" + impuesto.toFixed(2) + "\n" +
        "Importe neto: €" + neto.toFixed(2);
}

function calcularSueldo() {
    var campo = document.getElementById("antiguedad");
    var anios = Number(campo.value);
    if (campo.value === "" || !Number.isInteger(anios) || anios < 0) {
        document.getElementById("resultadoSueldo").textContent = "Escribe años completos de antigüedad (0 o más).";
        return;
    }
    var porcentaje;
    if (anios > 10) {
        porcentaje = 0.10;
    } else if (anios > 5) {
        porcentaje = 0.07;
    } else if (anios > 3) {
        porcentaje = 0.05;
    } else {
        porcentaje = 0.03;
    }

    var sueldoBase = 40000;
    var aumento = sueldoBase * porcentaje;
    var total = sueldoBase + aumento;
    document.getElementById("resultadoSueldo").textContent =
        "Sueldo base: €40000.00\n" +
        "Aumento: " + (porcentaje * 100) + "% (€" + aumento.toFixed(2) + ")\n" +
        "Sueldo anual final: €" + total.toFixed(2);
}
