
var nombre= prompt('Ingresa tu nombre');
var pepe=document.querySelector(".nombre");
pepe.innerHTML="Buenos Días "+ nombre + ",";
pepe.style.textAlign="center";
pepe.style.marginTop="0";

var capacitacion=confirm('Desea comenzar el curso de electricidad y automatización?');
if (capacitacion==true) {
	var capacitacion1= document.querySelector(".capacitacion");
	capacitacion1.innerHTML="La capacitación de electricidad y automatización comenzará en agosto del 2021, los días de cursada son....";
	capacitacion1.style.textAlign="center";
}
else{
	var capacitacion2=confirm('Desea comenzar el curso de Batería?');
	if (capacitacion2==true){
		var capacitacion_2=document.querySelector(".capacitacion")
		capacitacion_2.innerHTML="la capacitación de batería comenzará en agosto del 2021, los días de cursada son...."
		capacitacion_2.style.textAlign="center";
	}
}
var oscuro=confirm('Desea establecer otro formato de página web?');

if (oscuro==true) {
	
	document.querySelector("body").style.backgroundColor="#f0ebcc";
	document.querySelector("header").style.background=" linear-gradient(to bottom, black,#5B5B5B)";
	document.querySelector("section").style.background=" linear-gradient(to bottom , #5B5B5B,#a4ebf3)";
	document.querySelector("footer").style.background=" linear-gradient(to bottom , #a4ebf3,#f4f9f9)";
	
	var letra_botones=document.querySelectorAll("a");
	for (let j = 0; j < letra_botones.length; j++) {
		letra_botones[j].style.fontFamily="Arial";
		
	}
	var lista_3=document.querySelectorAll(".lista3");
	for (let f = 0; f < lista_3.length; f++) {
		lista_3[f].style.borderColor="#000"
		
	}
	var botonera_inf=document.querySelectorAll(".botonerainf");
	for (let n = 0; n < botonera_inf.length; n++) {
		 botonera_inf[n].style.color="#000";
		
	}
	
	var lista=document.querySelectorAll(".lista1");
	for (let i = 0; i <= lista.length; i++) {
		lista[i].style.borderColor="#f35";
		lista[i].style.borderWidth="3px";	
		lista[i].style.borderStyle="solid";	
		lista[i].style.backgroundColor="#f242";
	}

}

/*sección estudios*/
function aparece(){
	document.querySelector(".texto_oculto1").style.display="block";
}
function aparece2(){
	document.querySelector(".texto_oculto2").style.display="block";
}