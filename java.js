var inicio=0
var memoria2=[]
var memoria=[];
var start=false
$(document).keypress(function(event){

 
        console.log(event.key);

   if (event.key=="a"){
       if (!start){
       start=true;
       secuencia();
       inicio++
       $("#level-title").text("Nivel " + (inicio-1));
    }}
});
       var botones2=document.querySelectorAll(".btn");
       var botonesCant= botones2.length;
           for(var i=0 ; i<botonesCant ; i++){     
             document.querySelectorAll(".btn")[i].addEventListener("click",function clicker(){
        
        var botonPresionado=this
        var botoncito1=botonPresionado.getAttribute("id")
        memoria2.push(botoncito1);
        botonPresionado.classList.add("pressed")
        console.log(memoria2)
        setTimeout((function(){botonPresionado.classList.remove("pressed")}))
        playSound(botoncito1)
        console.log(memoria2.length)
       checkIt(memoria2.length-1);
       
    });
    function checkIt(checkAnswer){
        if(memoria[checkAnswer]===memoria2[checkAnswer]){
           if (memoria.length==memoria2.length) 
            setTimeout(function () {
                 secuencia();
              
            }, 1000);
            }else{
                playSound("wrong");
                $("body").addClass("game-over");
                $("#level-title").text("Game Over, Presiona la tecla 'a' para reiniciar");
             setTimeout(function () {
                $("body").removeClass("game-over");
              }, 200);
              gameover();
        }
    }
};


function secuencia(){
    memoria2=[];
    var numeroRandom=Math.floor(Math.random()*4);
    var botones= document.querySelectorAll(".btn");
    var boton1=botones[numeroRandom]
    var botoncito=boton1.getAttribute("id")
     inicio++  
     $("#level-title").text("Nivel " + (inicio-1));      
            memoria.push(botoncito);
       console.log (memoria);
       boton1.classList.add("pressed")
       setTimeout((function(){boton1.classList.remove("pressed")}))
       $("#" + botoncito).fadeIn(100).fadeOut(100).fadeIn(100);
       playSound(botoncito);
       } 

function gameover(){
    memoria=[];
    inicio=0;
    start=false;
    
} 
function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
  }