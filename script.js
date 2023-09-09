// Variables
const hamburgerBtn = document.querySelector(".hamburger-btn");
const closeBtn = document.querySelector(".close-btn");
const overlay = document.querySelector(".overlay");
const mobileMenu = document.querySelector(".mobile-menu");

// Display mobile menu function
const displayMenu = () => {
    mobileMenu.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
};

hamburgerBtn.addEventListener("click", displayMenu);
closeBtn.addEventListener("click", displayMenu);
