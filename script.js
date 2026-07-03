// ======================================
// 🧠 LeetPattern Script
// Part 1
// ======================================

// ---------- Elements ----------

const cardsContainer = document.getElementById("cardsContainer");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filters button");
const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");

// ---------- State ----------

let filteredCards = [...cards];

let activeCategory = "All";

// ---------- Render Cards ----------

function renderCards(data){

cardsContainer.innerHTML="";

data.forEach((card,index)=>{

cardsContainer.innerHTML += `

<div class="flashcard">

<div class="card-inner">

<div class="card-front">

<span class="category">
${card.cat.replace("Category: ","")}
</span>

<h3>${card.q}</h3>

<p class="problem">

Example Interview Pattern

</p>

<div class="difficulty">

⭐ Medium

</div>

</div>

<div class="card-back">

<h4>💡 Trick</h4>

<p class="trick">

${card.trick}

</p>

<pre><code>${card.code}</code></pre>

<button
class="copy-btn"
onclick="copyCode(${index})">

📋 Copy Code

</button>

</div>

</div>

</div>

`;

});

updateProgress();

}

// ---------- Progress ----------

function updateProgress(){

let total = cards.length;

let shown = filteredCards.length;

progressText.textContent =
`${shown} / ${total} Cards`;

progressFill.style.width =
(shown/total*100)+"%";

}

// ---------- Search ----------

searchInput.addEventListener("input",()=>{

const text =
searchInput.value.toLowerCase();

filteredCards = cards.filter(card=>{

const matchText=

card.q.toLowerCase().includes(text) ||

card.cat.toLowerCase().includes(text);

const matchCategory=

activeCategory==="All" ||

card.cat.includes(activeCategory);

return matchText && matchCategory;

});

renderCards(filteredCards);

});

// ---------- Filters ----------

filterButtons.forEach(btn=>{

btn.addEventListener("click",()=>{

filterButtons.forEach(b=>b.classList.remove("active"));

btn.classList.add("active");

activeCategory = btn.textContent;

filteredCards = cards.filter(card=>{

if(activeCategory==="All") return true;

return card.cat.includes(activeCategory);

});

renderCards(filteredCards);

});

});

// ---------- Start ----------

renderCards(filteredCards);
// ======================================
// ❤️ Favorites
// ======================================

let favorites =
JSON.parse(localStorage.getItem("favorites")) || [];

function toggleFavorite(question){

if(favorites.includes(question)){

favorites = favorites.filter(
item => item !== question
);

}else{

favorites.push(question);

}

localStorage.setItem(
"favorites",
JSON.stringify(favorites)
);

renderCards(filteredCards);

}

// ======================================
// 📋 Copy Code
// ======================================

function copyCode(index){

navigator.clipboard.writeText(cards[index].code);

alert("✅ Python template copied!");

}

// ======================================
// 🌙 Dark Mode
// ======================================

const themeBtn =
document.getElementById("themeBtn");

const savedTheme =
localStorage.getItem("theme");

if(savedTheme==="light"){

document.body.classList.add("light");

themeBtn.textContent="☀️";

}

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("light");

const light =
document.body.classList.contains("light");

themeBtn.textContent=
light ? "☀️" : "🌙";

localStorage.setItem(
"theme",
light ? "light":"dark"
);

});

// ======================================
// 🎲 Random Card
// ======================================

const randomBtn =
document.getElementById("randomBtn");

randomBtn.addEventListener("click",()=>{

const random =
cards[
Math.floor(Math.random()*cards.length)
];

filteredCards=[random];

renderCards(filteredCards);

});

// ======================================
// ⌨ Keyboard Navigation
// ======================================

document.addEventListener("keydown",(e)=>{

if(e.key==="/"){

e.preventDefault();

searchInput.focus();

}

if(e.key==="Escape"){

searchInput.value="";

filteredCards=[...cards];

renderCards(filteredCards);

}

});
// ======================================
// 🚀 Utility Functions
// ======================================

// Fixed Copy Function
function copyCode(code){

navigator.clipboard.writeText(code);

const btn =
document.activeElement;

if(btn){

const old = btn.textContent;

btn.textContent="✅ Copied!";

setTimeout(()=>{

btn.textContent=old;

},1500);

}

}

// ================================
// ❤️ Favorite Button Click
// ================================

cardsContainer.addEventListener("click",(e)=>{

const fav =
e.target.closest(".favorite-btn");

if(!fav) return;

const q =
fav.dataset.question;

toggleFavorite(q);

});

// ================================
// 📊 Progress Animation
// ================================

function animateProgress(){

const total = cards.length;

const value = filteredCards.length;

const percent =

(value/total)*100;

progressFill.style.width =
percent+"%";

progressText.textContent=
`${value} / ${total} Cards`;

}

// Replace old progress function
updateProgress = animateProgress;

// ================================
// 🔍 Enter focuses search
// ================================

document.addEventListener("keydown",(e)=>{

if(e.key==="Enter"){

searchInput.focus();

}

});

// ================================
// 🎲 Reset Button (Double Click)
// ================================

randomBtn.addEventListener("dblclick",()=>{

filteredCards=[...cards];

searchInput.value="";

activeCategory="All";

filterButtons.forEach(btn=>{

btn.classList.remove("active");

if(btn.textContent==="All"){

btn.classList.add("active");

}

});

renderCards(filteredCards);

});

// ================================
// 🚀 Page Loaded
// ================================

window.addEventListener("load",()=>{

document.getElementById("loading").style.display="none";

renderCards(filteredCards);

console.log("🧠 LeetPattern Loaded Successfully");

});
// ======================================
// ✨ Script Part 4
// Extra Features
// ======================================

// ---------- Scroll Reveal ----------

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.15
});

function observeCards(){

document
.querySelectorAll(".flashcard")
.forEach(card=>observer.observe(card));

}

observeCards();


// ---------- Card Counter ----------

function updateCardCounter(){

const title=document.querySelector(".top-bar h2");

if(title){

title.innerHTML=
`🚀 LeetCode Pattern Flashcards
(${filteredCards.length})`;

}

}

updateCardCounter();


// ---------- Render Patch ----------

const oldRender = renderCards;

renderCards = function(data){

oldRender(data);

updateCardCounter();

observeCards();

};


// ---------- Welcome Message ----------

if(!localStorage.getItem("visited")){

setTimeout(()=>{

alert("🎉 Welcome to LeetPattern!");

},800);

localStorage.setItem("visited","true");

}


// ---------- Back To Top ----------

const topBtn=document.createElement("button");

topBtn.innerHTML="⬆";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.cssText=`
position:fixed;
right:20px;
bottom:20px;
width:55px;
height:55px;
border:none;
border-radius:50%;
background:#7c3aed;
color:#fff;
font-size:22px;
cursor:pointer;
display:none;
box-shadow:0 15px 35px rgba(0,0,0,.3);
z-index:999;
`;

window.addEventListener("scroll",()=>{

topBtn.style.display=
window.scrollY>300
?"block":"none";

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};


// ---------- Footer Year ----------

const footerSmall=
document.querySelector(".footer-small");

if(footerSmall){

footerSmall.innerHTML=

`Built with ❤️ using HTML • CSS • JavaScript • ${new Date().getFullYear()}`;

}


// ---------- Console Message ----------

console.log("%c🧠 LeetPattern",
"color:#8b5cf6;font-size:22px;font-weight:bold");

console.log("%cMade with ❤️ by Siddhi",
"color:#60a5fa;font-size:16px;");
