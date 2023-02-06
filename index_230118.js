
var Start= document.getElementById('Start');//Store the Start in variable
var Stop= document.getElementById('Stop');//Store the Stop in variable
var reset= document.getElementById('Reset');//Store the Reset in variable

var secondtimer=0;//Initialize the second timer with zero.
var tenstimer=0;//Initialize the tens timer with zero.
var second = document.getElementById('second');//Store the secon in variable
var tens = document.getElementById('tens');//Store the tens in variable

var Interval;//Initialize interval.

Start.addEventListener('click', function(){// Click function for start the time 
    clearInterval(Interval);
    Interval=setInterval(starttimer,10);
    // console.log(Interval);
});

Stop.addEventListener('click', function(){// Click function for Stop the time 
    clearInterval(Interval);
    // console.log(Interval);
});

reset.addEventListener('click',function(){// Click function for reset the time 
    // clearInterval(Interval);
    tenstimer= "00";
    secondtimer="00";
    tens.innerHTML=tenstimer;
    // console.log(tens.innerHTML=tenstimer);
    second.innerHTML=secondtimer;
    // console.log(Interval);
});
function starttimer(){ // main function for  start the time logic. 
    tenstimer++;//tens unit increamenting by 1;
    if(tenstimer<=9){//Giving condition for less than equal to 9 to append text to tens id.
        tens.innerHTML="0"+tenstimer;
    }

    if(tenstimer>9){//Giving condition for less than equal to 9 to append text to tens id.
        tens.innerHTML=tenstimer;
    }

    if(tenstimer>99){//Giving condition for less than equal to 9 to append text to second id.
        secondtimer++;
        second.innerHTML="0"+secondtimer;
        tenstimer=0;
        tens.innerHTML="0"+ 0;
    }

    if(secondtimer>9){//Giving condition for less than equal to 9 to append text to second id.
        second.innerHTML=secondtimer;
    }
}