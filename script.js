var posicaoAtual = 0;
var carrossel = document.querySelector('.carrossel');
var blocos = document.querySelectorAll('.bloco');
var anteriorBtn = document.querySelector('.anterior');
var proximoBtn = document.querySelector('.proximo');

function moverCarrossel(direcao) {
  posicaoAtual += direcao;
  if (posicaoAtual < 0) {
    posicaoAtual = blocos.length - 1;
  }
  if (posicaoAtual === blocos.length) {
    posicaoAtual = 0;
  }
  carrossel.style.transform = `translateX(-${posicaoAtual * 100}%)`;
}

anteriorBtn.addEventListener('click', function() {
  moverCarrossel(1);
});

proximoBtn.addEventListener('click', function() {
  moverCarrossel(-1);
});



