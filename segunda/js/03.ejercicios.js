var a ={

	A:0,
	B:0,
	C:0,
	D:0,
	result : function(){
		if(a.C >a.B &&
			a.D >a.B &&
			a.D > a.C &&
			a.D < a.A){
			return true;
		}
		return false;
	},

	intervalo:setInterval(function(){

		a.A = Math.ceil(Math.random()*4)
		a.B = Math.ceil(Math.random()*4)
		a.C = Math.ceil(Math.random()*4)
		a.D = Math.ceil(Math.random()*4)

		if(a.result()){
			clearInterval(a.intervalo);
			console.log("atleta A",a.A);
			console.log("atleta B",a.B);
			console.log("atleta C",a.C);
			console.log("atleta D",a.D);
		}
	},10)
}

/*=============================================
 EJERCICIO 2

Mac  |edad:VIEJO(2)|velocidad:RAPIDO(1)|tono:OSCURO(2)|
smith|edad:JOVEN(1)|velocidad:RAPIDO(1)|tono:CLARO(1) |
jack |edad:JOVEN(1)|velocidad:LENTO(2)|tono:(2)|
willy|edad:JOVEN(1)|velocidad:RAPIDO(1)|tono:OSCURO(2)|
=============================================*/

var b = {
	Mac:{edad:0,velocidad:0,tono:0},
	Smith:{edad:0,velocidad:0,tono:0},
	Jack:{edad:0,velocidad:0,tono:0},
	Willy:{edad:0,velocidad:0,tono:0}
	resultado: function(){
		if(b.Mac.tono > b.Smith.tono && 
		   b.Mac.velocidad > b.Jack.Velocidad &&
		   b.Mac.edad > b.Jack.edad &&
		   b.Willy.velocidad > b.Jack.velocidad &&
		   b.Mac.edad > b.Willy.edad &
		   b.Mac.edad > b.Smith.edad &&
		   b.Willy.tono > b.Smith.tono &&
		   b.Smith.velocidad > b.Jack.velocidad &&
		   b.Jack.tono > b.Smith.tono
		   ){

			return true;
		}

		return false;
	},

	intervalo: setInterval(function(){

		b.Mac.edad = Math.ceil(Math.random()*2);
		b.Mac.velocidad = Math.ceil(Math.random()*2);
		b.Mac.tono = Math.ceil(Math.random()*2);

		b.Smith.edad = Math.ceil(Math.random()*2);
		b.Smith.velocidad = Math.ceil(Math.random()*2);
		b.Smith.tono = Math.ceil(Math.random()*2);

		b.Jack.edad = Math.ceil(Math.random()*2);
		b.Jack.velocidad = Math.ceil(Math.random()*2);
		b.Jack.tono = Math.ceil(Math.random()*2);

		b.Willy.edad = Math.ceil(Math.random()*2);
		b.Willy.velocidad = Math.ceil(Math.random()*2);
		b.Willy.tono = Math.ceil(Math.random()*2);


		if(b.resultado()){
			clearInterval(b.intervalo);
			console.log("Caballo de Mac", b.Mac);
			console.log("Caballo de Smith", b.Smith);
			console.log("Caballo de Jack", b.Jack);
			console.log("Caballo de Willy", b.Willy);
		}

	},1)
}

/*=============================================
EJERCICIO 3

galgo   |come
dogo	|come > podenco
alano	|come > galgo < dogo
podenco |come > galgo

dogo
podenco
alano
galgo

=============================================*/

/*=============================================
EJERCICIO 4

alejandro no coche acompaña a benito no va en avion
benito va en coche
andres viaja en avion
carlos  no va acompañando a dario ni utiliza avion
tomas ?
tomas coche
=============================================*/

/*=============================================
EJERCICIO 5

angela habla mas bajo que rosa
cecili habla mas alto que rosa
angela mas bajo que cecilia
=============================================*/

