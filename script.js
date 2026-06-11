// Scroll Animation (Improved Version)

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");

        // Stop observing once animation is done (performance optimization)
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15, // triggers when 15% of element is visible
    rootMargin: "0px 0px -50px 0px" // smooth early trigger before fully visible
  }
);

// Select elements to animate
const hiddenElements = document.querySelectorAll(
  "section, .card, .skill, .education-box"
);

// Add hidden class + observe
hiddenElements.forEach((el) => {
  el.classList.add("hidden");
  observer.observe(el);
});
