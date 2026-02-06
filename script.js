/* PIN SYSTEM */

let pin="";
const correct="1204";
const dots=document.querySelectorAll(".dot");
const keys=document.querySelectorAll(".key");

keys.forEach(key=>{
key.onclick=()=>{

if(key.innerText==="⌫"){
pin=pin.slice(0,-1);
}else if(pin.length<4){
pin+=key.innerText;
}

updateDots();

if(pin.length===4){
setTimeout(checkPin,200);
}

};
});

function updateDots(){
dots.forEach((d,i)=>{
d.classList.toggle("filled",i<pin.length);
});
}

/* TRAILER MESSAGE */

const trailerMessage = 
`Before We Step Into This Week

Pause.

Breathe.

There is something I need you to remember.

Meeting you was not luck.

It was destiny being gentle with me.

And if life ever becomes loud...

come back here,

and remember —

you are deeply loved ❤️`;

function typeWriter(text, speed=42){

const el=document.getElementById("typeText");
let i=0;

function typing(){

if(i<text.length){

el.innerHTML += text.charAt(i);
i++;
setTimeout(typing, speed);

}else{

document.getElementById("tapHint").style.opacity="1";
enableTap();

}

}

typing();
}

/* ================= CHECK PIN ================= */

function checkPin(){

if(pin===correct){

const music=document.getElementById("bgMusic");

/* 👉 RESUME FROM SAVED TIME IF EXISTS */
let savedTime = localStorage.getItem("musicTime");

if(savedTime){
music.currentTime = savedTime;
}

/* GOD TIER FADE IN */

music.volume=0;
music.play();

let vol=0;

const fade=setInterval(()=>{

if(vol<0.35){
vol+=0.01;
music.volume=vol;
}else{
clearInterval(fade);
}

},120);

/* 👉 MARK MUSIC AS PLAYING */
localStorage.setItem("musicPlaying","true");

/* 👉 SAVE TIMESTAMP EVERY SECOND */
setInterval(()=>{
localStorage.setItem("musicTime", music.currentTime);
},1000);


/* blur background */

document.getElementById("siteContent").classList.add("blur");

/* hide lock */

document.getElementById("lockScreen").style.opacity="0";

setTimeout(()=>{

document.getElementById("lockScreen").style.display="none";

/* show cinematic */

document.getElementById("cinematic").classList.add("show");

typeWriter(trailerMessage);

},600);

}else{

navigator.vibrate?.(200);

document.querySelector(".lock-box").animate(
[{transform:'translateX(6px)'},{transform:'translateX(-6px)'}],
{duration:200,iterations:2}
);

pin="";
updateDots();
}
}

/* ================= TAP TO OPEN ================= */

function enableTap(){

const cine=document.getElementById("cinematic");

cine.addEventListener("click",()=>{

cine.style.opacity="0";

document.getElementById("siteContent").classList.remove("blur");

setTimeout(()=>{
cine.style.display="none";
},800);

});
}

/* ================= FLOATING HEARTS ================= */

setInterval(()=>{
const heart=document.createElement("div");
heart.className="heart";
heart.innerHTML="❤";
heart.style.left=Math.random()*100+"vw";
heart.style.fontSize=(Math.random()*18+10)+"px";
document.body.appendChild(heart);
setTimeout(()=>heart.remove(),7000);
},500);

/* ================= UNLOCK DAYS ================= */

const days=[
{ name:"🌹 Rose Day",date:"2026-02-06",page:"rose.html"},
{ name:"💍 Propose Day",date:"2026-02-08",page:"propose.html"},
{ name:"🍫 Chocolate Day",date:"2026-02-09",page:"chocolate.html"},
{ name:"🧸 Teddy Day",date:"2026-02-10",page:"teddy.html"},
{ name:"🤝 Promise Day",date:"2026-02-11",page:"promise.html"},
{ name:"🤗 Hug Day",date:"2026-02-12",page:"hug.html"},
{ name:"😘 Kiss Day",date:"2026-02-13",page:"kiss.html"},
{ name:"❤️ Valentine",date:"2026-02-14",page:"valentine.html"}
];

const container=document.getElementById("days");
const today=new Date();

days.forEach(day=>{
const div=document.createElement("div");
div.className="day";

if(today>=new Date(day.date)){
div.innerHTML=day.name;
div.onclick=()=>window.location.href=day.page;
}else{
div.innerHTML="🔒 "+day.name;
div.classList.add("locked");
}

container.appendChild(div);
});
