/* ================= GLOBAL MUSIC ================= */

let musicStarted = false;
let music;

/* Start music on FIRST user interaction */
document.addEventListener("click", startMusicOnce);

function startMusicOnce(){

if(musicStarted) return;

if(localStorage.getItem("musicPlaying") === "true"){

music = new Audio("music.mp3");

music.loop = true;
music.volume = 0.35;

/* resume timestamp */
let savedTime = localStorage.getItem("musicTime");

if(savedTime){
music.currentTime = savedTime;
}

music.play().catch(()=>{});

/* keep saving time */
setInterval(()=>{
localStorage.setItem("musicTime", music.currentTime);
},1000);

musicStarted = true;

/* remove listener after starting */
document.removeEventListener("click", startMusicOnce);
}

}

/* ================= ROSE INTERACTION ================= */

const roses=document.querySelectorAll(".rose");
const box=document.getElementById("messageBox");
const beginning=document.getElementById("beginning");

roses.forEach(rose=>{

rose.addEventListener("click",()=>{

navigator.vibrate?.(80);

roses.forEach(r=>r.classList.remove("bloom"));

rose.classList.add("bloom");

box.innerText=rose.dataset.message;
box.style.opacity="1";

setTimeout(()=>{
beginning.style.opacity="1";
},1500);

});

});
