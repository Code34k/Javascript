/*=============================================
CLASES 

Las clases son funciones constructoras y siempre las vamos a iniciar con Mayúscula

ejemplo: new String()
=============================================*/

/*=============================================
CLASES PRIMITIVAS 
=============================================*/

//Clase String
var string = new String("Esto es un string");
console.log("string", string);

//Clase Number
var number = new Number (12);
console.log("number", number);

//Clases Boolean
var boolean = new Boolean(false);
console.log("boolean", boolean);

/*=============================================
CLASES COMPUESTAS
=============================================*/

//Clase Array
var array = new Array("rojo","amarillo","verde");
console.log("array", array);

//Clase Object
var object = new Object({nombre:"Pedro",
						 edad:30});
console.log("object", object);

/*=============================================
CLASES PERSONALIZADAS CREADAS POR EL PROGRAMADOR
=============================================*/

//Creamos el Prototipo

function Persona(){
	//Propiedades publicas
	this.nombre;
	this.edad;
}

var yo = new Persona();
yo.nombre = "Juan";
yo.edad = "21 años";
console.log("yo", yo);


//Clases con parametros
function Animales(nombre,raza){
	this.nombre = nombre;
	this.raza = raza;
}

var mascota = new Animales("perro","pitbul");
console.log("mascota", mascota);
