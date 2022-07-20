var sahil = 1000;
var my;
// var a =0;
// var b;

 let mySound = new Audio('mouseclick.wav')


function incSpeed()
{
   sahil = sahil +1000;

    document.getElementById("count").innerText = sahil;
}



function decSpeed()
{
   sahil = sahil - 1000;

    document.getElementById("count").innerText = sahil;
}



function playBeat()
{   
    let id = null;
    const elem = document.getElementById("beat");
    let pos=350;
    
    id = setInterval(fspeed,2);

    

function fspeed(){

    if(document.getElementById("stopBtn").innerHTML==1)
    {   
        clearInterval(id);
        pos=350;
        document.getElementById("stopBtn").innerHTML='Stop';
    }

   

    if(pos==700)
    {
        mySound.play();
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
    document.getElementById("stopBtn").innerHTML=1;
}

// function speed()
// {
//     const a = document.getElementById("")
// }

