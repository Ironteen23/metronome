var sahil = 50;
var my;
// var a =0;
// var b;

 let mySound = new Audio('mouseclick.wav')


function incSpeed()
{
   sahil = sahil +5;

    document.getElementById("count").innerText = sahil;

    stopBeat();

    playBeat();
}



function decSpeed()
{
   sahil = sahil - 5;

    document.getElementById("count").innerText = sahil;

    stopBeat();

    playBeat();


}



function playBeat()
{   
    let id = null;
    const elem = document.getElementById("beat");
    let pos=0;

    // var a = 0.35;
    //  myt = sahil/60;
    // var u = a/myt;
    
    id = setInterval(fspeed,2.1);

    

function fspeed(){

    if(document.getElementById("stopBtn").innerHTML ==1)
    {   
        clearInterval(id);
        pos=0;
        document.getElementById("stopBtn").innerHTML='Stop';
    }

   

    if(pos==350)
    {
        mySound.play();
        pos=0;
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

