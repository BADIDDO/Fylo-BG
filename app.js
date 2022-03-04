const btn = document.querySelector(".icon");

const links = document.querySelector("ul");

btn.addEventListener("click", () => {
    links.classList.toggle("active");
});