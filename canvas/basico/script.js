var canvas = document.getElementById("desenho");

var ctx = canvas.getContext("2d");

var x = 20;
var y = 20;
var largura = 100;
var altura = 100;

ctx.fillStyle = "rgb(180, 0, 0)";
ctx.fillRect(x, y, largura, altura);

// segundo retângulo
ctx.fillStyle = "rgba(0, 0, 180, 0.7)";
ctx.fillRect(30, 30, 100, 100);

// configurações do arco
var x = 200;
var y = 100;
var raio = 50;
var angulo_inicio = 0;
var angulo_fim = Math.PI * 2;

// ctx.beginPath();

// desenha um arco
ctx.arc(x, y, raio, angulo_inicio, angulo_fim);

// desenha as linhas
ctx.stroke();

// tamanho da fonte e tipo
ctx.font = "72px serif";

// inserindo o texto
ctx.fillText("Olá mundo!", 20, 200);
