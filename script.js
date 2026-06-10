// Scroll Animation

const observer = new IntersectionObserver((entries)=>{
entries.forEach((entry)=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
});

const hiddenElements = document.querySelectorAll(
"section, .card, .skill, .education-box"
);

hiddenElements.forEach((el)=>{
el.classList.add("hidden");
observer.observe(el);
});
