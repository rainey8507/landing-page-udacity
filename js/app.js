/**Define global variable*/
let menu = document.getElementById("menu");
let navBar = document.querySelector(".nav");

/* Make navigation responsive */
menu.style.maxHeight = "0px";
function togglemenu() {
    if(menu.style.maxHeight == "0px") {
        menu.style.maxHeight = "600px";
    } else {
        menu.style.maxHeight = "0px";
    }
}

/* Smooth Scrolling */


navBar.scrollTo({
    top: 100,
    left: 0,
    behavior: 'smooth'
})
