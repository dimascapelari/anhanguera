// iniciando o canvas
var canvas = document.getElementById("desenho");
var ctx = canvas.getContext("2d");

// configurações
var x = 0;
var y = 0;
var altura = 50;
var largura = 0;

function animacao() {
  ctx.fillRect(x, y, largura++, altura);
}

setInterval(animacao, 100);
