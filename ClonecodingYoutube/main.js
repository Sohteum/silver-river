const MoreBtn = document.querySelector('.info .metadata .MoreBtn');
const title = document.querySelector('.info .metadata .title');

MoreBtn.addEventListener('click', () => {
    MoreBtn.classList.toggle('clicked');
    title.classList.toggle('clamp');
});