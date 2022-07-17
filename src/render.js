var sahil = 0;
var my;

function playBeat()
{   
    let id = null;
    const elem = document.getElementById("beat");
    let pos=350;
    
    id = setInterval(fspeed,0.1);

    const a = document.getElementById("stopBtn");


   

function fspeed(){

    

    if(a.innerHTML=='a')
    {   
        clearInterval(id);
        pos=350;
        a.innerHTML='Stop';
    }

   

    if(pos==700)
    {

        pos=350;
    }
    else
    {
    pos++;
    elem.style.left = pos +"px";
    }
}
}

function stopBeat()
{
    document.getElementById("stopBtn").innerHTML= 'a';
}

// function speed()
// {
//     const a = document.getElementById("")
// }

function incSpeed()
{
   sahil = sahil +1;

    document.getElementById("count").innerText = sahil;
}

setTimeout(function(){
     let mySound = new Audio('mouseclick.wav')
    mySound.play()
    },5000);

function decSpeed()
{
   sahil = sahil - 1;

    document.getElementById("count").innerText = sahil;
}