const nav = document.querySelector('.nav');

window.addEventListener('scroll', function() {
    if (window.scrollY > nav.clientHeight) {
        nav.classList.add('active');
    } else {
        nav.classList.remove('active');
    }
})