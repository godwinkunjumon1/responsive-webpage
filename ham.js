document.addEventListener('DOMContentLoaded', () => {
    const nave = document.querySelector('.nav_list');
    const bar1 = document.querySelector('.hamburger :nth-child(1)');
    const bar2 = document.querySelector('.hamburger :nth-child(2)');
    const bar3 = document.querySelector('.hamburger :nth-child(3)');
    const hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        nave.classList.toggle("nav--open");
        bar1.classList.toggle("open1");
        bar2.classList.toggle("open2");
        bar3.classList.toggle("open3");
    });
});


