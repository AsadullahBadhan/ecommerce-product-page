const hamburger = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.close-menu-btn');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.add('active');
  document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.75)';
});

closeBtn.addEventListener('click', () => {
  navMenu.classList.remove('active');
  document.body.style.backgroundColor = "white";
});