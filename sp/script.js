// Example JavaScript if you want to add interactivity in the future
document.addEventListener('DOMContentLoaded', function() {
    // JavaScript code can be added here
});



const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());



