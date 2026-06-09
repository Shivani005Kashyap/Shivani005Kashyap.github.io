// Typing Effect
const text = "AI & ML Enthusiast | MCA Student | Aspiring Data Scientist";
let i = 0;

function typeEffect(){
const heroText = document.getElementById("typing");
if(!heroText) return;

if(i < text.length){
heroText.innerHTML += text.charAt(i);
i++;
setTimeout(typeEffect, 60);
}
}

window.onload = typeEffect;

// Scroll Reveal Animation
const elements = document.querySelectorAll(".card, .skill, .education-box");

window.addEventListener("scroll", () => {
elements.forEach(el => {
const position = el.getBoundingClientRect().top;
const screenHeight = window.innerHeight;

if(position < screenHeight - 100){
el.style.opacity = "1";
el.style.transform = "translateY(0)";
}
});
});
