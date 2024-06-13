const grid = document.querySelector(".nav-collapsed");
const btn = document.querySelector(".menu");

btn.addEventListener("click", () => {
    grid.classList.toggle("active");
})