/* resume music */

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


/* PROMISE FLOW */

const promises = [

"I promise you won't have to face life alone anymore.",

"On the days you feel strong — I'll admire you.<br>On the days you don't — I'll carry you.",

"I promise to choose us… even on ordinary days.",

"And when life gets uncertain —<br>my hand will be the one that never lets go."

];

let index = -1;

const text = document.getElementById("promiseText");

/* first reveal */

setTimeout(()=>{
text.innerHTML="Tap anywhere...";
text.classList.add("show");
},800);


/* tap to progress */

document.body.addEventListener("click",()=>{

index++;

if(index >= promises.length){
index = promises.length-1;
return;
}

/* fade out */
text.classList.remove("show");

/* change text after fade */
setTimeout(()=>{

text.innerHTML = promises[index];
text.classList.add("show");

},600);

});
