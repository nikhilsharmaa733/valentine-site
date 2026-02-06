/* ================= RESUME MUSIC ================= */

if(localStorage.getItem("musicPlaying")==="true"){

const music = new Audio("music.mp3");

music.loop = true;
music.volume = 0.35;

let savedTime = localStorage.getItem("musicTime");

if(savedTime){
music.currentTime = savedTime;
}

music.play().catch(()=>{});

/* keep saving timestamp */
setInterval(()=>{
localStorage.setItem("musicTime",music.currentTime);
},1000);

}


/* ================= CINEMATIC PROPOSAL ================= */

document.getElementById("revealBtn")
.addEventListener("click",()=>{

navigator.vibrate?.(120);

const btn = document.getElementById("revealBtn");
const answer = document.getElementById("answer");
const final = document.getElementById("finalLine");

/* hide button smoothly */
btn.style.opacity="0";
btn.style.pointerEvents="none";

/* show fake tension */
answer.style.opacity="1";
answer.innerHTML="No";


/* WAIT 3 SECONDS (tension pause) */

setTimeout(()=>{

const sentence = "No universe exists where I wouldn't choose you.";

let i = 0;

/* typing container with cursor */
answer.innerHTML = '<span id="text"></span><span class="cursor"></span>';

const textEl = document.getElementById("text");


function typeLetter(){

if(i < sentence.length){

textEl.innerHTML += sentence.charAt(i);
i++;

setTimeout(typeLetter, 55); // ⭐ cinematic speed

}

/* AFTER typing finishes */

else{

/* small emotional silence */
setTimeout(()=>{

final.innerHTML = `
Because with us…<br>
Love is always a Beginning,<br>
Never The End.
`;

final.style.opacity="1";
final.style.transform="translateY(0)";


},1200);

}

}

typeLetter();

},3000);

});
