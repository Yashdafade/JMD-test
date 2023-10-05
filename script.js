let menuicon = document.getElementById("menu-icon");
let nav = document.querySelector('.navbar');


menuicon.addEventListener("click", () => {
    menuicon.classList.toggle('bx-x');
    if (nav.style.transform === "translateX(0%)") {
        nav.style.transform = "translateX(-100%)";
    } else {
        nav.style.transform = "translateX(0%)";
    }
});

