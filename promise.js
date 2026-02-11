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


/* ================= 1204 VOW SYSTEM ================= */

const vows = [

"12 Promises.<br>04 Truths.<br><br>One heart that belongs to you.",

"I promise to protect you.",

"I promise to always stand beside you.",

"I promise to listen to everything you say.",

"I promise to be your safe zone on hard days.",

"I promise to chairish every version of you.",

"I promise to grow with you.",

"I promise to choose understanding over ego.",

"I promise to make ordinary days feel special.",

"I promise to remind you how loved you are.",

"I promise honesty and transparency even when it's hard.",

"I promise that I will always be your's.",


/* smooth emotional shift */

"You are not temporary in my life.",

"With you, love feels effortless.",

"You are my safest place my comfort zone.",

"And just like the day we became ours <br><br><span class='special'>12 • 04</span><br><br>I will choose you.<br><br>Again.<br>And again.<br>And again."

];

const text = document.getElementById("promiseText");

let index = 0;
let ready = true;


/* first vow auto appears */

setTimeout(()=>{

text.innerHTML = vows[index];
text.classList.add("show");

},700);


/* tap progression */

document.body.addEventListener("click",()=>{

if(!ready) return;

if(index >= vows.length-1) return;

ready = false;

/* fade out */

text.classList.remove("show");

setTimeout(()=>{

index++;

text.innerHTML = vows[index];

/* slower final vow */
if(index === vows.length-1){

text.style.transition = "opacity 2s ease, transform 2s ease";

}else{

text.style.transition = "opacity 1.25s ease, transform 1.25s ease";
}

text.classList.add("show");

ready = true;

},500);

});

if(index === vows.length-1){
document.querySelector(".tapHint").style.opacity = "0";
}
