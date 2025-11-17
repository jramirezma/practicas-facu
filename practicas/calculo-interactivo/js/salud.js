// Mostrar/ocultar ejercicios según el menú
function mostrarEjercicio(id) {
    document.getElementById('presion').style.display = 'none';
    document.getElementById('temperatura').style.display = 'none';
    document.getElementById('fiebre').style.display = 'none';
    document.getElementById('triage').style.display = 'none';
    document.getElementById('spo2').style.display = 'none';
    document.getElementById(id).style.display = 'block';
}

// Botón Clasificación Presión Arterial
document.getElementById('btnPresion').onclick = function() {
    var s = Number(document.getElementById('sistolica').value);
    var d = Number(document.getElementById('diastolica').value);
    var res = '';
    if (s < 120 && d < 80) res = 'Normal';
    else if ((s >= 120 && s < 130) && d < 80) res = 'Elevada';
    else if ((s >= 130 && s < 140) || (d >= 80 && d < 90)) res = 'HTA grado 1';
    else if (s >= 140 || d >= 90) res = 'HTA grado 2';
    else res = 'Valores inválidos';
    document.getElementById('outPresion').innerText = res;
};

// Botón Temperatura Pacientes
document.getElementById('btnTemperatura').onclick = function() {
    var n = Number(document.getElementById('numPacientes').value);
    var total = 0;
    var info = '';
    for (var i = 1; i <= n; i++) {
        var t = Number(prompt('Temperatura del paciente ' + i + ' en °C'));
        total += t;
        info += 'Paciente ' + i + ': ' + t + ' °C\n';
    }
    var promedio = total / n;
    document.getElementById('outTemperatura').innerText = info + 'Promedio: ' + promedio.toFixed(2) + ' °C';
};

// Botón Contar Pacientes con Fiebre
document.getElementById('btnFiebre').onclick = function() {
    var count = 0;
    var temp;
    var info = '';
    while (true) {
        temp = Number(prompt('Ingrese temperatura (0 para terminar)'));
        if (temp === 0) break;
        if (temp >= 38) count++;
        info += 'Temperatura: ' + temp + ' °C\n';
    }
    document.getElementById('outFiebre').innerText = info + 'Pacientes con fiebre (≥38°C): ' + count;
};

// Botón Clasificación TRIAGE
document.getElementById('btnTriage').onclick = function() {
    var c = Number(document.getElementById('codigoTriage').value);
    var res = '';
    switch(c) {
        case 1: res = 'Rojo'; break;
        case 2: res = 'Amarillo'; break;
        case 3: res = 'Verde'; break;
        case 4: res = 'Azul'; break;
        default: res = 'Código inválido';
    }
    document.getElementById('outTriage').innerText = res;
};

// Botón Mediciones SpO2
document.getElementById('btnSpO2').onclick = function() {
    var val;
    var info = '';
    do {
        val = prompt('Ingrese saturación SpO2 (escriba "no" para terminar)');
        if (val.toLowerCase() !== 'no') {
            info += val + ' %\n';
        }
    } while (val.toLowerCase() !== 'no');
    document.getElementById('outSpO2').innerText = info;
};

