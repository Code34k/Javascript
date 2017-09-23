var tiempo =  document.querySelector("#tiempo");
var segundos = 0;

/*=============================================
  SET INTERVAL (Intervalo de tiempo)
 setInterval(funcion, tiempo)
=============================================*/


var intervalo = setInterval(function(){

	segundos++;

	tiempo.innerHTML = segundos;
	

},1000)

/*=============================================
  SET TIMEOUT (retardo de tiempo)
 setTimeout(funcion, tiempo)
=============================================*/

setTimeout(function(){
	//alert("se cumplio el tiempo")
	clearInterval(intervalo);
},5000)

