function validar(){
	var usuarioReg=["^(?=\w*[A-Z])(?=\w*[a-z])(?=\w*\d)\S{8,16}$", "El usuario debe contener al menos 1 mayuscula , 1 minuscula y un número"]

var user=document.querySelector("#user");
var pass=document.querySelector("#pass");


var validador= new RegExp (usuarioReg[user]);
if (validador.test(user)){
	user.setCustomValidity("")
}
else{
	user.setCustomValidity(usuarioReg[user][1]);
}
	
}
validar();

window.onload= function(){
	document.querySelector("#user").onchange=validar
}