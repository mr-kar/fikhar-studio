import gsap from "gsap";

export function startLoading(callback){

const percent=document.getElementById("loader-percent");

let value=0;

const timer=setInterval(()=>{

value++;

percent.innerHTML=String(value).padStart(3,"0");

if(value>=100){

clearInterval(timer);

gsap.to("#loader",{

yPercent:-100,

duration:1.2,

ease:"power4.inOut",

onComplete(){

document.getElementById("loader").remove();

callback();

}

});

}

},18);

}