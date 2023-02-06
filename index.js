let second = document.getElementById('second');
let tens= document.getElementById('tens');
let start= document.getElementById('Start');
let stop= document.getElementById('Stop');
let reset= document.getElementById('Reset');

let secontimer=0;
let tenstimer=0;

let Interval;

start.addEventListener('click',function(){
    Interval=setInterval(settimer,10);
});

stop.addEventListener('click',function(){
    clearInterval(Interval);
});

reset.addEventListener('click', function(){
    clearInterval(Interval);
    secontimer="00";
    tenstimer="00";
    second.innerHTML=secontimer;
    tens.innerHTML=tenstimer;
})
function settimer(){
    tenstimer++;
    if(tenstimer<=9){
        tens.innerHTML="0"+tenstimer;
    }

    if(tenstimer>9){
        tens.innerHTML=tenstimer;
    }

    if(tenstimer>=99){
        console.log('second');
        secontimer++;
        second.innerHTML="0"+secontimer;
        tenstimer=0;
        tens.innerHTML="0"+tenstimer;
        
    }

    if(secontimer>9){
        second.innerHTML=secontimer;
    }
}
