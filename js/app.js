// Define Global Variables 
let navBar = document.querySelector(".nav");
const navList = document.querySelector("#menu");
const sections = document.querySelectorAll('section'); 
const navLi = document.querySelectorAll('nav ul li');
//document.querySelectorAll('section');



// Build Nav
function buildNav() {
    const fragmentNav = document.createDocumentFragment();
    sections.forEach((section) => {
        let liTag = document.createElement('li');
        let aLink = document.createElement('a');
        liTag.classList.add("nav-link");
        aLink.innerHTML = section.getAttribute("data-nav");

        liTag.appendChild(aLink);
        navList.appendChild(liTag);
        fragmentNav.appendChild(liTag);
    });
    navList.appendChild(fragmentNav);
}

// Active Class 
window.addEventListener('scroll', () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        //const sectionHeight = section.clientHeight;
        if(pageYOffset + 180 > sectionTop & pageYOffset - 180 < sectionTop) {
            current = section.getAttribute("id");
            section.classList.add("your-active-class");
        } else {
            section.classList.remove("your-active-class");
        }
    });
});




/* Make navigation responsive */
navList.style.maxHeight = "0px";
function togglemenu() {
    if(navList.style.maxHeight == "0px") {
        navList.style.maxHeight = "600px";
    } else {
        navList.style.maxHeight = "0px";
    }
}

/* Smooth Scrolling */

navBar.scrollTo({
    top: 100,
    left: 0,
    behavior: 'smooth'
})

// Build a navigation menu
buildNav();


