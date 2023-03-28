/* ====================== change background header ====================== */
const scrollHeader = () => {
    const header = document.getElementById('header');
    // when the scroll is greater than 50VH add class "scroll-header"
    this.scrollY >= 50 ? header.classList.add('scroll-header')
                       : header.classList.remove('scroll-header'); 
};

window.addEventListener('scroll', scrollHeader);

/* ====================== show scroll up ====================== */
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    //when the scroll is higher than 350VH, add the show-scroll class to the a tag scrollup class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') 
                        : scrollUp.classList.remove('show-scroll'); 
                        // console.log('ok');
};

window.addEventListener('scroll', scrollUp);

/* ====================== scroll sections active link ====================== */
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(curr => {
        const sectionHeight = curr.offsetHeight,
              sectionTop = curr.offsetTop - 58,
              sectionId = curr.getAttribute('id'),
              sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionClass.classList.add('active-link');
        }else {
            sectionClass.classList.remove('active-link');
        };
    });
};

window.addEventListener('scroll', scrollActive);

/* ====================== scroll reveal animaition ====================== */
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    //reset: true //animations repeat
});

sr.reveal(`.home__data, .products__data, .steps__content, .footer__container`)
sr.reveal(`.home__img`, {origin: 'bottom'})
sr.reveal(`.products__card`, {interval: 100})
sr.reveal(`.about__data,     .testimonial__img`, {origin: 'right'})
sr.reveal(`.about__img, .testimonial__data `, {origin: 'left'})


