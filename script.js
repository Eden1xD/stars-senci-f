const modelosPorMarca = {
  iphone: [
    "iPhone 7", "iPhone 8", "iPhone X", "iPhone XR",
    "iPhone 11", "iPhone 12", "iPhone 13", "iPhone 14", "iPhone 15", "iPhone 15 Pro Max"
  ],
  samsung: [
    "Galaxy S10", "Galaxy S20", "Galaxy S21", "Galaxy S22", "Galaxy S23", "Galaxy S24"
  ],
  xiaomi: [
    "Redmi Note 10", "Redmi Note 11", "Redmi Note 12", "Poco X3", "Poco X5", "Mi 11", "Mi 12"
  ],
  motorola: [
    "Moto G7", "Moto G8", "Moto G9", "Moto G10", "Moto G20", "Edge 20", "Edge 30"
  ],
  pc: [
    "Windows", "Mac"
  ]
};

function atualizarModelos() {
  const marca = document.getElementById('marca').value;
  const modeloSelect = document.getElementById('modelo');
  modeloSelect.innerHTML = '';
  if (marca && modelosPorMarca[marca]) {
    modelosPorMarca[marca].forEach(modelo => {
      const opt = document.createElement('option');
      opt.value = modelo;
      opt.innerText = modelo;
      modeloSelect.appendChild(opt);
    });
  }
}

function gerarNumero(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function gerarSensi() {
  const estilo = document.getElementById('estilo').value;
  const dpi = parseInt(document.getElementById('dpi').value);
  const modelo = document.getElementById('modelo').value;
  const marca = document.getElementById('marca').value;
  const resultado = document.getElementById('resultado');

  if (!marca) {
    alert('Selecione a marca do dispositivo!');
    return;
  }
  if (!modelo) {
    alert('Selecione o modelo do dispositivo!');
    return;
  }
  if (isNaN(dpi) || dpi < 100 || dpi > 1000) {
    alert('Informe uma DPI válida entre 100 e 1000.');
    return;
  }

  let minGeral, maxGeral;
  if (estilo === 'alta') {
    minGeral = 170;
    maxGeral = 200;
  } else {
    minGeral = 100;
    maxGeral = 150;
  }

  const geral = gerarNumero(minGeral, maxGeral);
  const mira = gerarNumero(minGeral, maxGeral);
  const redDot = gerarNumero(minGeral, maxGeral);
  const doisX = gerarNumero(minGeral, maxGeral);
  const quatroX = gerarNumero(minGeral, maxGeral);
  const awm = gerarNumero(minGeral, maxGeral);

  resultado.style.display = 'block';
  resultado.innerHTML = `
    <h2>🎯 Sensibilidade Gerada</h2>
    <p><strong>Dispositivo:</strong> ${marca.charAt(0).toUpperCase() + marca.slice(1)} - ${modelo}</p>
    <p><strong>DPI:</strong> ${dpi}</p>
    <p><strong>Sensibilidade Geral:</strong> ${geral}</p>
    <p><strong>Mira:</strong> ${mira}</p>
    <p><strong>Ponto Vermelho:</strong> ${redDot}</p>
    <p><strong>2x:</strong> ${doisX}</p>
    <p><strong>4x:</strong> ${quatroX}</p>
    <p><strong>AWM:</strong> ${awm}</p>
  `;
}

