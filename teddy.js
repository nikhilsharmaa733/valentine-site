/* ================= MUSIC ================= */

if(localStorage.getItem("musicPlaying")==="true"){

const music=new Audio("music.mp3");

music.loop=true;
music.volume=0.35;

let savedTime=localStorage.getItem("musicTime");

if(savedTime){
music.currentTime=savedTime;
}

music.play().catch(()=>{});

setInterval(()=>{
localStorage.setItem("musicTime",music.currentTime);
},1000);
}


/* ================= MAIN TEDDY PAGE ================= */

const typeEl = document.getElementById("typeText");

if(typeEl && document.getElementById("secretBtn")){

const lines = [

"If the world ever feels too heavy…come here.",

"You are safe.More than you know.",

"Godi me le lunga Gym jata hu.",

"Nahi aana to mere ko le lena.",

"Muhehehehehehehehehehehehe.",

"Tap Tap Kya Kare Ho Ye Neche Wale Button Ko Bhi Dabado Thoda"


];

let lineIndex = 0;
let charIndex = 0;

function typeLetter(){

if(charIndex < lines[lineIndex].length){

typeEl.innerHTML += lines[lineIndex].charAt(charIndex);
charIndex++;

setTimeout(typeLetter,45);

}

}

/* start first line */
setTimeout(typeLetter,800);


/* tap → next line */

document.body.addEventListener("click",()=>{

if(lineIndex < lines.length-1){

lineIndex++;
charIndex = 0;

typeEl.innerHTML = "";

navigator.vibrate?.(50);

setTimeout(typeLetter,400);

}

});

}


/* ================= SECRET BUTTON ================= */

const secretBtn = document.getElementById("secretBtn");

if(secretBtn){

secretBtn.addEventListener("click",(e)=>{

e.stopPropagation();
window.location.href="teddy-secret.html";

});

}


/* ================= SECRET PAGE TYPING ================= */

if(typeEl && !document.getElementById("secretBtn")){

const secretText = `BTW Esse Godi Me Lunga Muhehehehehehehe.`;

let i = 0;

function typeSecret(){

if(i < secretText.length){

typeEl.innerHTML += secretText.charAt(i);
i++;

setTimeout(typeSecret,45);

}

}

setTimeout(typeSecret,800);

}
