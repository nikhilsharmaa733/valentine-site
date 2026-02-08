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


/* MEMORY DATA */

const memories = [

{
img:"choco-1.1.jpg",
text:"The first sweetness I ever sent you…<br>2 months after we became ours."
},

{
img:"choco-1.2.jpg",
text:"I still remember how excited I was sending these."
},

{
img:"choco-1.3.jpg",
text:"It wasn’t just chocolate…<br>it was my way of being there on your birthday."
},

{
img:"choco-2.jpg",
text:"I asked you to buy a chocolate for yourself…<br>and you chose 5 Star my favorite then.<br>That tiny detail meant everything to me."
},

{
img:"choco-3.jpg",
text:"The first chocolate I ever gave you with my own hands.<br>Not Blinkit. Not distance.<br>Just me… standing in front of you."
},

{
img:"choco-4.1.jpg",
text:"When you were on your period…<br>I wanted to send comfort."
},

{
img:"choco-4.2.jpg",
text:"So I sent dark chocolate for you…<br>and Munch for the taste.<br><br>But of course you ate the Munch first<br>and called the dark chocolate bitter 🥲<br><br>Even that made me smile."
},

{
img:"",
text:"You know what's even sweeter than all these chocolates?<br><br>Tap to find out..."
},

{
img:"choco-mine.jpg",
text:"Out of every chocolate in the world…<br>this one will always be my favorite.<br><br>Because it came from you.<br><br>(Still can't believe I made a KitKat shake with it 😁)"
}

];

let index = 0;

const img = document.getElementById("memoryImg");
const text = document.getElementById("memoryText");


function showMemory(){

img.classList.remove("showImg");
text.classList.remove("showText");

setTimeout(()=>{

img.src = memories[index].img;
text.innerHTML = memories[index].text;

img.onload = () => {
img.classList.add("showImg");
}

text.classList.add("showText");

},400);

}

/* first load */
showMemory();


/* tap to progress */

document.body.addEventListener("click",()=>{

index++;

if(index >= memories.length){
index = memories.length-1;
return;
}

showMemory();

});
