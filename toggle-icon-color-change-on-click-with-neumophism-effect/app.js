const TOGGLE_BTN = document.querySelectorAll('.toggle-box');

TOGGLE_BTN.forEach((btn) => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('toggle-pressed');
    });
});