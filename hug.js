/* MUSIC */

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


/* HUG FLOW */

const lines = [

"Close your eyes…",

"Come a little closer…",

"Right here… in my arms.",

"Whenever life feels heavy…<br><br>this is where you belong."

];

const text = document.getElementById("text");
const img = document.getElementById("hugImg");

let index = 0;
let ready = true;


/* first line */

setTimeout(()=>{
text.innerHTML = lines[index];
text.classList.add("show");
},700);


/* tap progression */

document.body.addEventListener("click",()=>{

if(!ready) return;
if(index >= lines.length-1) return;

ready=false;

/* fade text */

text.classList.remove("show");

setTimeout(()=>{

index++;

text.innerHTML = lines[index];
text.classList.add("show");

/* reveal image on final line */

if(index === lines.length-1){

setTimeout(()=>{
img.classList.add("showImg");
},600);

}

ready=true;

},500);

});
