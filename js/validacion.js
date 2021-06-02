function validar(){
	var usuarioReg=['^(?=\\w*[A-Z])(?=\\w*[a-z])(?=\\w*\\d)\\S{8,16}$', "El usuario debe contener al menos 1 mayuscula , 1 minuscula y un número"]
    
var userM=document.querySelector("#user");
var pass=document.querySelector("#pass");
pass.addEventListener("input",validacion,false)
validacion();

var validador= new RegExp (usuarioReg[0]);
if (validador.test(userM.value)){
	
    userM.setCustomValidity("")
    
}
else{
	userM.setCustomValidity(usuarioReg[1]);
}
	
} function validacion(){
    if (pass.value==""){
        pass.setCustomValidity("La contraseña debe tener 4 caracteres numericos");
}   else{
    pass.setCustomValidity("");
}
}

window.onload= function(){
	document.querySelector("#user").onchange=validar
    
}