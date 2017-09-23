/*=============================================
OBJETOS: Es una  coleccion de propiedades y metodos 
=============================================*/

var object = {

	// Una propiedad es una asociacion entre un nombre y un valor.
	nombre:"juan",
	edad:31,
	// El metodo es una funcion dentro de un objeto
	decripcion: function(){
		console.log("Su nombre es " +object.nombre+" y tiene "+object.edad+" años.")
	},
	saludar: function(saludo){

		console.log(saludo+" "+object.nombre)
	}

}

console.log("Nombre",object.nombre)
console.log("Edad",object.edad)
object.decripcion();
object.saludar("Hola");

/*=============================================
OBJETOS PRIMITIVOS
=============================================*/

//El objeto date se Utiliza para trabajar con fechas.

var d = new Date();
console.log("d", d);
var y = d.getFullYear();
console.log("y", y);
