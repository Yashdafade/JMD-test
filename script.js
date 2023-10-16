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


const elementsToAnimate = document.querySelectorAll('.scroll-fade');

const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

const animateOnScroll = () => {
    elementsToAnimate.forEach((element, index) => {
        if (isInViewport(element) && !element.classList.contains('animated')) {
            setTimeout(() => {
                element.classList.add('animated');
            }, index * 100); // Adjust the delay (100ms) between each element as needed.
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);


const footer = document.getElementById('myFooter');





