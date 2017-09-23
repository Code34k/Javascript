/*=============================================
VARIABLES 
=============================================*/

//Variables  Numericas
var numero = 5;
console.log("numero", numero);

//Variables de texto
var palabra = "palabras";
console.log("palabra", palabra);

//Variables Boleanas
var boleana = true;
console.log("boleana", boleana);

//Variables de tipo arreglo (Array)
var colores = ["rojo","amarillo"];
console.log("colores", colores);

//Variables de tipo objeto (object: propiedad y el valor)
var jugo = {ingrediente1:"fresa",
			ingrediente2:"mandarina",
			ingrediente3:"banano"}
console.log("jugo", jugo);

// Varaiables DOM ('Modelo de Objetos del Documento')
/*El DOM es la estructura de objetos que genera el navegador cuando de carga un documento y se puede alterar mediante Javascript para cambiar dinámicamento los contenidos y aspecto de la página.*/
var caja = document.querySelector("#caja");
console.log("caja", caja);

caja.style.width = "200px";
caja.style.height = "200px";
caja.style.background = "red";

var cajas = document.querySelectorAll(".cajas");
console.log("cajas", cajas);


