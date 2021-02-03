// Define Global Variables 
let navBar = document.querySelector(".nav");
const navList = document.querySelector("#menu");
const NavigationSection = document.querySelectorAll('section'); 
const links = document.querySelectorAll('.ul li a');


// Build Nav
function buildNav() {
    const fragmentNav = document.createDocumentFragment();
    NavigationSection.forEach((NavigationSection) => {
        let liTag = document.createElement('li');
        let aLink = document.createElement('a');
        liTag.classList.add("nav-link");
        aLink.innerHTML = NavigationSection.getAttribute("data-navbar");

        liTag.appendChild(aLink);
        navList.appendChild(liTag);
        fragmentNav.appendChild(liTag);
    });
    navList.appendChild(fragmentNav);
}

// Active Class 
function activeState() {
    let index = NavigationSection.length;
    while(--index && window.scrollY + 50 < NavigationSection[index].offsetTop) {
        links.forEach((link) =>link.classList.remove('active'));
        links[index].classList.add('active');
    }

}

// Run active state 
activeState();
window.addEventListener('scroll', activeState);

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

