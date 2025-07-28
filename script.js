// Typing Effect
const text = "UPPUGANDLA VENKATA SUNEEL";
let index = 0;
function typeEffect() {
  if (index < text.length) {
    document.getElementById("typing-text").textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 200);
  }
}
window.onload = typeEffect;

// Dark Mode Toggle
document.getElementById("darkModeToggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

// Reveal on scroll
const sections = document.querySelectorAll(".card");
function revealOnScroll() {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight - 100) {
      section.classList.add("visible");
    }
  });
}
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// Download Resume
function downloadResume() {
window.location.href = "./Resume/VENKATA SUNEELResume.pdf";}