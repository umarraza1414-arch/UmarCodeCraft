// Hamburger + Overlay JS
const hamburger = document.getElementById("hamburger");
const slidebar = document.getElementById("slidebar");
const overlay = document.getElementById("overlay");
const closeSidebar = document.getElementById("closeSidebar");

function toggleMenu() {
    slidebar.classList.toggle("active");
    overlay.classList.toggle("active");
}

hamburger.addEventListener("click", toggleMenu);

overlay.addEventListener("click", toggleMenu);

closeSidebar.addEventListener("click", toggleMenu);

// Close sidebar when clicking outside
document.addEventListener("click", (e) => {
    if (
        !slidebar.contains(e.target) &&
        !hamburger.contains(e.target) &&
        !overlay.contains(e.target)
    ) {
        slidebar.classList.remove("active");
        overlay.classList.remove("active");
    }
});

// Contact form success message
const contactForm = document.querySelector(".contact-form");
const formSuccess = document.getElementById("formSuccess");

if (contactForm) {
    contactForm.addEventListener("submit", () => {
        formSuccess.style.display = "block";
    });
}
