// Mostrar/ocultar ejercicios
function mostrarEjercicio(id) {
    document.getElementById('aqi').style.display = 'none';
    document.getElementById('ruido').style.display = 'none';
    document.getElementById('focos').style.display = 'none';
    document.getElementById('residuos').style.display = 'none';
    document.getElementById('rio').style.display = 'none';
    document.getElementById(id).style.display = 'block';
}

// 1. Clasificación AQI
document.getElementById('btnAQI').onclick = function() {
    var aqi = Number(document.getElementById('valorAQI').value);
    var r = '';

    if (aqi <= 50) r = 'Bueno';
    else if (aqi <= 100) r = 'Moderado';
    else if (aqi <= 150) r = 'Dañino para grupos sensibles';
    else if (aqi <= 200) r = 'Dañino';
    else if (aqi <= 300) r = 'Muy dañino';
    else r = 'Peligroso';

    document.getElementById('outAQI').innerText = r;
};

// 2. Niveles de ruido
document.getElementById('btnRuido').onclick = function() {
    var n = Number(document.getElementById('numRuido').value);
    var total = 0;
    var info = '';

    for (var i = 1; i <= n; i++) {
        var dB = Number(prompt('Medición ' + i + ' en dB:'));
        total += dB;
        info += 'Medición ' + i + ': ' + dB + ' dB\n';
    }

    var prom = total / n;
    document.getElementById('outRuido').innerText = info + 'Promedio: ' + prom.toFixed(2) + ' dB';
};

// 3. Focos de calor
document.getElementById('btnFocos').onclick = function() {
    var temp;
    var focos = 0;
    var info = '';

    while (true) {
        temp = Number(prompt('Temperatura (0 para terminar):'));
        if (temp === 0) break;
        if (temp > 45) focos++;
        info += 'Temp: ' + temp + ' °C\n';
    }

    document.getElementById('outFocos').innerText = info + 'Focos detectados (>45°C): ' + focos;
};

// 4. Residuos
document.getElementById('btnResiduo').onclick = function() {
    var c = Number(document.getElementById('codigoResiduo').value);
    var r = '';

    switch(c) {
        case 1: r = 'Orgánico'; break;
        case 2: r = 'Plástico'; break;
        case 3: r = 'Papel / Cartón'; break;
        case 4: r = 'Vidrio'; break;
        default: r = 'Código inválido';
    }

    document.getElementById('outResiduo').innerText = r;
};

// 5. Monitoreo del río
document.getElementById('btnRio').onclick = function() {
    var n;
    var info = '';

    do {
        n = prompt('Nivel del río en metros (escriba "no" para terminar):');

        if (n.toLowerCase() !== 'no') {
            var nivel = Number(n);
            info += nivel + ' m\n';
            if (nivel > 3) {
                info += 'Alerta: nivel superior a 3 metros\n';
            }
        }
    } while (n.toLowerCase() !== 'no');

    document.getElementById('outRio').innerText = info;
};

