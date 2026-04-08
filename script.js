function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);

function comprar(produto, chavePix) {
  const texto = `PIX para ${produto}\nChave: ${chavePix}`;
  
  // Copia para área de transferência
  navigator.clipboard.writeText(texto).then(() => {
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
  }).catch(() => {
    alert('Erro ao copiar PIX. Copie manualmente: ' + texto);
  });
}

function fecharPopup() {
  document.getElementById('popup').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
}