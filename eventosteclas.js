var teclas = {

	UP: 38,
	DOWN: 40,
	LEFT: 37,
	RIGHT: 39
	
};

console.log(teclas);

document.addEventListener("keyup",dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
dibujarLinea("pink", 100, 100, 200, 200, papel);
var x=150;
var y=150;
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.lineWidth = 4;
	lienzo.moveTo(xinicial,yinicial);
	lienzo.lineTo(xfinal,yfinal);
	lienzo.stroke();
	lienzo.closePath();
}

function dibujarTeclado(evento)
{
	var colorear = "pink";
	var movimiento = 10;
	if(evento.keyCode==teclas.UP)
	{
		dibujarLinea(colorear, x, y, x, y - movimiento, papel);
		y= y - movimiento;
	}
	if(evento.keyCode==teclas.DOWN)
	{
		dibujarLinea(colorear, x, y, x, y + movimiento, papel);
		y = y + movimiento;
	}
	if(evento.keyCode==teclas.LEFT)
	{
		dibujarLinea(colorear, x, y, x - movimiento, y, papel);
		x = x - movimiento;
	}
	if(evento.keyCode==teclas.RIGHT)
	{
		dibujarLinea(colorear, x, y, x + movimiento, y, papel);
		x= x + movimiento;
	}
}