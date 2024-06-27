// Scroll section active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                
            })
        }
    }) 
}

// Menu Mobile

let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');

btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
})


// sticky navbar

let header = document.querySelector('header');

header.classList.toggle('sticky', window.scrollY > 100);


// Scroll reveal

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.header, .projetos h2, .habilidades h2', { origin: 'top'});
ScrollReveal().reveal('.col-a, .foto-sobre, .logo-tecnologias', { origin: 'left'});
ScrollReveal().reveal('.col-b, .texto-sobre, .habilidades article p', { origin: 'right'});
ScrollReveal().reveal('.projetos', { origin: 'bottom'});