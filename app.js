const hamburger = document.querySelector('.hamburger');
const moveOut = document.querySelectorAll('.nav-link');
const navMenu = document.querySelector('.nav-menu')

hamburger.addEventListener('click', ()=>{
    let appear = hamburger.classList.contains('active')
    if (!appear){
        hamburger.classList.toggle('active')
        navMenu.classList.toggle('active')
    }
    else {
        hamburger.classList.remove('active')
        navMenu.classList.remoev('active')
    }
})