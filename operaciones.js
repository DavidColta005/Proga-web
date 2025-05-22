function obtenerValores() {
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);
    return { numero1, numero2 };
}

function mostrarResultado(resultado) {
    document.getElementById("resultado").textContent = `El resultado es: ${resultado}`;
}

function sumar() {
    const { numero1, numero2 } = obtenerValores();
    mostrarResultado(numero1 + numero2);
}

function restar() {
    const { numero1, numero2 } = obtenerValores();
    mostrarResultado(numero1 - numero2);
}

function multiplicar() {
    const { numero1, numero2 } = obtenerValores();
    mostrarResultado(numero1 * numero2);
}

function dividir() {
    const { numero1, numero2 } = obtenerValores();
    if (numero2 !== 0) {
        mostrarResultado(numero1 / numero2);
    } else {
        mostrarResultado("Error: División entre cero no permitida.");
    }
}
