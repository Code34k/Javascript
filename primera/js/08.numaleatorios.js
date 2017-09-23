var numeroAleatorio = document.querySelector("#numeroAleatorio");
var numero = 0;

/*=============================================
NUMEROS ALEATORIOS

//El objeto MATH permite realizar tareas matematicas en los numeros.
//MATH.random = devuelve un número aleatorio entre 0(inclusive) y 1 (exclusive).
//Math.floor = redondea al numero  menor del decimal
//Math.ceil = redondea al numero  mayor del decimal
//Math.round = devuelve el valor de x redondeado a su numero entero mas proximo
=============================================*/

numero = Math.round(Math.random()*10);
numeroAleatorio.innerHTML = numero;

