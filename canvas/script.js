var canvas = document.getElementById("desenho");

var ctx = canvas.getContext("2d");

var x = 20;
var y = 20;
var largura = 100;
var altura = 100;

ctx.fillStyle = "rgb(180,0,0)";
ctx.fillRect(x, y, largura, altura);

// segundo retângulo
ctx.fillStyle = "rgba(0,0,180,0.7)";
ctx.fillRect(30, 30, 100, 100);
