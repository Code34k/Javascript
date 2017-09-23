/*=============================================
FUNCIONES SIN PARÁMETROS
=============================================*/

//Declaramos la función
function saludo(){

	//Tarea de la función
	console.log("saludo","hola");

}

//Ejecutamos la función
saludo();

/*=============================================
FUNCIONES CON PARÁMETROS
=============================================*/

//Declaramos la función
function operacion(digito1,digito2){

	var resultado = digito1 + digito2;
	console.log("resultado", resultado);
}
//Ejecutamos la función
operacion (5,7);

/*=============================================
FUNCIONES CON RETORNO SIN PARÁMETROS
=============================================*/
function retorno1(){
	var numero = 5;
	return numero;
}
console.log(retorno1());

/*=============================================
FUNCIONES CON RETORNO CON PARÁMETROS
=============================================*/
function retorno2(numero){

	return numero;
}
console.log(retorno2(10));