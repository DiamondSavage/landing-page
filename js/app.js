
let nav = document.getElementById('navbar__list');
let sections = document.querySelectorAll('section');


let navBar = () => {
    let navLI = "";

    sections.forEach(section => {
        let sectionData = section.dataset.nav;
        let sectionId = section.id;

navLI += `<li><a class="menu__link" href="#${sectionId}">${sectionData}</a></li>`;

});

 nav.innerHTML = navLI;
};

navBar() ;



window.onscroll = function () {
    document.querySelectorAll("section").forEach(function  (active) {

    if (
        active.getBoundingClientRect().top <= 170 &&
        active.getBoundingClientRect().top >= -450 
    ) {
            active.classList.add("your-active-class");
    } else {
        active.classList.remove("your-active-class");
    }
});
}

