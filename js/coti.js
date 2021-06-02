


var tomas=document.querySelector("#tug");
var luces=document.querySelector("#iug");
var canalizacion=document.querySelector("#canaliz");
var tableros=document.querySelector("#tablero");
var termicas=document.querySelector("#termica")
var diferencial=document.querySelector("#diferencial");
var javalina=document.querySelector("#javalina");
var venti=document.querySelector("#venti");
var total=document.querySelector(".total-number");
var ivax=document.querySelector(".total-number2");
var totality=0;
var cantidad1=parseInt(0)
var cantidad2=parseInt(0)
var cantidad3=parseInt(0)
var cantidad4=parseInt  (0)
var cantidad5=parseInt(0)
var cantidad6=parseInt(0)
var cantidad7=parseInt(0)
var cantidad8=parseInt  (0)


tomas.addEventListener("keypress",function(event){
    cantidad1=parseInt(event.key*350);
})

luces.addEventListener("keypress", function(event){
    
    cantidad2=parseInt(event.key*350);
})
canalizacion.addEventListener("keypress", function(event){
    
    cantidad3= parseInt(event.key*200);
})
tableros.addEventListener("keypress", function(event){
    
    cantidad4=parseInt(event.key*5000)
}) 
termicas.addEventListener("keypress", function(event){
    
    cantidad5=parseInt(event.key*500)
})   
diferencial.addEventListener("keypress", function(event){
    
    cantidad6=parseInt(event.key*600)
})   
javalina.addEventListener("keypress", function(event){
    
    cantidad7=parseInt(event.key*1000)
})   
venti.addEventListener("keypress", function(event){
    
    cantidad4=parseInt(event.key*1500)
})     
function suma(){
    
    var totality=parseInt( cantidad1)+parseInt(cantidad2)+parseInt(cantidad3)+parseInt(cantidad4)+parseInt( cantidad5)+parseInt(cantidad6)+parseInt(cantidad7)+parseInt(cantidad8);
    total.innerHTML=("$"+totality);

}
suma();
function iva(){
    var totality=parseInt( cantidad1)+parseInt(cantidad2)+parseInt(cantidad3)+parseInt(cantidad4)+parseInt( cantidad5)+parseInt(cantidad6)+parseInt(cantidad7)+parseInt(cantidad8);
    var totalIva= ((totality*0.21)+totality).toFixed(2);
    console.log(totalIva);

    ivax.innerHTML=("$"+totalIva);

}

iva();


const element = document.querySelector('form');
element.addEventListener('submit', event => {
  event.preventDefault();
 });