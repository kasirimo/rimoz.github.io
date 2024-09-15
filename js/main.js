const openNavButton = document.querySelector(".open");
const closeNavButton = document.querySelector(".close");
const rootNavi = document.querySelector(".rootnav");

function openNav() {
    rootNavi.style.right = "0";
}

function closeNav() {
    rootNavi.style.right = "-2000px";
}

if (window.onclick == true) {
    rootNavi.style.right = "0";
}