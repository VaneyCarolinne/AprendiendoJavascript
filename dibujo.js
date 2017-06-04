var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var yi, xf;
var colorear = "pink";
while(l < lineas)
{
	yi=10*l;
	xf=10*(l+1);
	dibujarLinea("pink", 0, yi, xf, 300);	
	console.log("Linea" +l);
	l++;
}
for(var i=0; i<lineas; i++)
{
	dibujarLinea(colorear, 1, 1, 1, 299);
    dibujarLinea(colorear, 1, 300,300, 299);
}


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.moveTo(xinicial,yinicial);
	lienzo.lineTo(xfinal,yfinal);
	lienzo.stroke();
	lienzo.closePath();
}