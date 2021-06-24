var video1=document.querySelector(".bill");
var symb=document.querySelector("#repr")
var video2=document.querySelector(".meters")

function reproducir(){
    if (video1.paused==true){
        video1.play();
        symb.className="fas fa-pause"
    
    }else{
    video1.pause();
    symb.className="fas fa-play"
    }
}

function reiniciar(){
    video1.pause();
    video1.currentTime=0;
    symb.className="fab fa-google-play"
}
function forward(fotogramas){
    video1.currentTime += fotogramas
}
function reproducir2(){
    if (video2.paused==true){
        video2.play();
        symb.className="fas fa-pause"
    
    }else{
    video2.pause();
    symb.className="fas fa-play"
    }
}

function reiniciar2(){
    video2.pause();
    video2.currentTime=0;
    symb.className="fab fa-google-play"
}
function forward2(fotogramas){
    video2.currentTime += fotogramas
}

