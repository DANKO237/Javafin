// 1.
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
menuBtn.addEventListener("click", () => {mobileMenu.classList.toggle("hidden")});
// 2.
const questions = document.querySelectorAll(".faq-question");
questions.forEach(question => {question.addEventListener("click", () => {
    const answer = question.nextElementSibling;answer.classList.toggle("hidden");
    const signe = question.querySelector("span");signe.textContent = answer.classList.contains("hidden") ? "+" : "-";
   });
});
// 3.
const fetchBtn = document.getElementById("fetch-btn");
const fetchBox = document.getElementById("fetch-box");
fetchBtn.addEventListener("click", () => {})
// 4.
const form = document.getElementById("contact-form");
const email = document.getElementById("contact-email");
const message = document.getElementById("form-message");
form.addEventListener("submit", event => {event.preventDefault();
    if(!email.ariaValueMax.includes("@")){message.textContent = "Adresse email invalide."; 
} else {
    message.textContent = "Message envoyé avec succes !";
}
})
//5.
const topBtn = document.getElementById("back-to-top");
window.addEventListener("scroll", () => {topBtn.classList.toggle("hidden", window.scrollY < 300);
});
topBtn.addEventListener("click", () => {
    window.scrollTo({
        top:0,
        behavior: "smooth"
    });
});