/* ================= GLOBAL MUSIC RESUME ================= */

let music = null;

if(localStorage.getItem("musicPlaying") === "true"){

music = new Audio("music.mp3");

music.loop = true;
music.volume = 0.35;

/* ✅ Resume from last timestamp */
let savedTime = localStorage.getItem("musicTime");

if(savedTime){
music.currentTime = savedTime;
}

/* Safe play */
music.play().catch(()=>{});

/* ✅ Keep saving timestamp */
setInterval(()=>{
localStorage.setItem("musicTime", music.currentTime);
},1000);

}

/* ================= ROSE INTERACTION ================= */

const roses=document.querySelectorAll(".rose");
const box=document.getElementById("messageBox");
const beginning=document.getElementById("beginning");

roses.forEach(rose=>{

rose.addEventListener("click",()=>{

/* 📳 Soft vibration for mobile */
navigator.vibrate?.(80);

/* Remove bloom from others */
roses.forEach(r=>r.classList.remove("bloom"));

/* Bloom clicked rose */
rose.classList.add("bloom");

/* Show message */
box.innerText=rose.dataset.message;
box.style.opacity="1";

/* Reveal "only the beginning..." */
setTimeout(()=>{
beginning.style.opacity="1";
},1500);

});

});
