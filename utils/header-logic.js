document.getElementById("open-menu").addEventListener("click", () => {
    let menu = document.getElementById("menu");
    menu.classList.remove("left-full");
    menu.classList.add("left-0");

});

document.getElementById("close-menu").addEventListener("click", () => {
    let menu = document.getElementById("menu");
    menu.classList.remove("left-0");
    menu.classList.add("left-full");
})