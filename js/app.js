/**Define global variable*/
let menu = document.getElementById("menu");
let navBar = document.querySelector(".nav");
/* Build Nav */
    /* Create a new li item dynamically */
    const navItem1 = document.createElement("li");
    const navItem2 = document.createElement("li");
    const navItem3 = document.createElement("li");
    const navItem4 = document.createElement("li");
    const navItem5 = document.createElement("li");
    navItem1.innerHTML = "Home";
    navItem2.innerHTML = "Service";
    navItem3.innerHTML = "About";
    navItem4.innerHTML = "Testimonies";
    navItem5.innerHTML = "Contact";

    /* Style a navigation list item */
    navItem1.style.color = "#9cb1b1";
    navItem2.style.color = "#cfcf8c";
    navItem3.style.color = "#cfcf8c";
    navItem4.style.color = "#cfcf8c";
    navItem5.style.color = "#cfcf8c";

    navItem1.style.listStyle = "none";
    navItem2.style.listStyle = "none";
    navItem3.style.listStyle = "none";
    navItem4.style.listStyle = "none";
    navItem5.style.listStyle = "none";

    navItem1.style.marginRight = "20px";
    navItem2.style.marginRight = "20px";
    navItem3.style.marginRight = "20px";
    navItem4.style.marginRight = "20px";
    navItem5.style.marginRight = "20px";

    navItem1.style.fontSize = "20px";
    navItem2.style.fontSize = "20px";
    navItem3.style.fontSize = "20px";
    navItem4.style.fontSize = "20px";
    navItem5.style.fontSize = "20px";


    /*Create a tag */
    let aTag = document.createElement('a');
    aTag.setAttribute('class', 'menu-link');

    aTag.addEventListener("click", () => {
        document.scrollIntoView({behavior: "smooth"})
    });
    menu.appendChild(navItem1);
    menu.appendChild(navItem2);
    menu.appendChild(navItem3);
    menu.appendChild(navItem4);
    menu.appendChild(navItem5);


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
