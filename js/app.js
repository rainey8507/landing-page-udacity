// Define Global Variables 
let navBar = document.querySelector(".nav");
const navList = document.querySelector("#menu");
const navigationSection = document.querySelectorAll('section'); 
const navLi = document.querySelectorAll('nav ul li');
//document.querySelectorAll('section');



// Build Nav
function buildNav() {
    const fragmentNav = document.createDocumentFragment();
    navigationSection.forEach((navigationSection) => {
        let liTag = document.createElement('li');
        let aLink = document.createElement('a');
        liTag.classList.add("nav-link");
        aLink.innerHTML = navigationSection.getAttribute("data-nav");

        liTag.appendChild(aLink);
        navList.appendChild(liTag);
        fragmentNav.appendChild(liTag);
    });
    navList.appendChild(fragmentNav);
}

// Active Class 
window.addEventListener('scroll', () => {
    let current = "";
    navigationSection.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(pageYOffset > sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLi.forEach(li => {
        li.classList.remove('active');
        if(li.classList.contains(current)) {
            li.classList.add('active');
        }
    })
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


