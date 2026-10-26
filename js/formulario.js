function mostrarFormulario() {
    document.getElementById("formIngreso").classList.remove("d-none");
    document.getElementById("mensajeIngreso").textContent = "Escribe tu correo y contraseña.";
}

function ocultarFormulario() {
    document.getElementById("formIngreso").classList.add("d-none");
    document.getElementById("mensajeIngreso").textContent = "Formulario oculto.";
}

function simularIngreso() {
    var correo = document.getElementById("correo").value.trim();
    var contrasena = document.getElementById("contrasena").value;

    if (correo === "" || contrasena === "") {
        document.getElementById("mensajeIngreso").textContent = "Completa los dos campos.";
    } else if (!correo.includes("@")) {
        document.getElementById("mensajeIngreso").textContent = "El correo debe contener @.";
    } else {
        document.getElementById("mensajeIngreso").textContent =
            "Formulario enviado de prueba para: " + correo;
    }
}
