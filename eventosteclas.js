var teclas = {

	UP: 38,
	DOWN: 40,
	LEFT: 37,
	RIGHT: 39
	
};

console.log(teclas);

document.addEventListener("keyup",dibujarTeclado);
function dibujarTeclado(evento)
{
	if(evento.keyCode==teclas.UP)
	{
		console.log("Vamos pa arriba");
	}
	if(evento.keyCode==teclas.DOWN)
	{
		console.log("Vamos pa abajo");
	}
	if(evento.keyCode==teclas.LEFT)
	{
		console.log("Vamos pa la izquierda");
	}
	if(evento.keyCode==teclas.RIGHT)
	{
		console.log("Vamos pa la derecha");
	}
}