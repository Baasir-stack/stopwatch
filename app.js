

// var count=0;
// var interval;

// interval=setInterval(timer,1000)

// function timer(){
//     count++;
// console.log(count);
// }

// setTimeout(function(){
// clearInterval(interval);
// },5000)


var min=0;
var sec=0;
var msec=0;
var a;
var b;
var c;
var btn;

var minHeading=document.getElementById('min')
var secHeading=document.getElementById('sec')
var msecHeading=document.getElementById('msec')

var interval;

function timer(){
    msec++;
    msecHeading.innerHTML=msec;
    if(msec>=100){
        sec++;
        secHeading.innerHTML=sec;
        msec=0;
    }
    else if(sec >=60){
        min++
        minHeading.innerHTML=min;
        sec=0;
    }
}



function start(){
interval=setInterval(timer,10);
   btn = document.getElementById('aa');
   btn.disabled=true;
    
}
function stop(){
    clearInterval(interval);
    btn.disabled=false;
   
}

function reset(){
    min=0;
    sec=0;
    msec=0;
    minHeading.innerHTML=min;
    secHeading.innerHTML=sec;
    msecHeading.innerHTML=msec;
     stop();

}

function Save(){
   a=document.getElementById('min');
   b=document.getElementById('sec');
   c=document.getElementById('msec');
   console.log(a.innerHTML+" minutes "+b.innerHTML+" seconds "+c.innerHTML+" milliseconds");

}


