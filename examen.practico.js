
function calcularPago() {
    const horas = parseFloat(document.getElementById('horas').value);
    const tipo = document.getElementById('tipoAuto').value;
    let precioPorHora = 0;

    if (tipo === 'chico') precioPorHora = 20.0;
    else if (tipo === 'camioneta') precioPorHora = 30.0;
    else if (tipo === 'camion') precioPorHora = 40.0;

    if (isNaN(horas) || horas <= 0) {
        document.getElementById('resultado').textContent = 'Ingrese un número de horas válido.';
        return;
    }

    const total = horas * precioPorHora;
    document.getElementById('resultado').textContent = 'Total a pagar: $' + total.toFixed(2);
}
