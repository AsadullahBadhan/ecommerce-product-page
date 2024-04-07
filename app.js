const hamburger = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.close-menu-btn');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  navMenu.classList.remove('active');
});

//lighthouse
const thumbnails = document.querySelectorAll('.column img');
const productImage = document.querySelector('.product-img img');

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', () => {
    openModal();

  })
})
function openModal() {
  document.getElementById("productModal").style.display = "block";
}

function closeModal() {
  document.getElementById("productModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
  productImage.src = `/images/image-product-${n}.jpg`;
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) { slideIndex = 1 };
  if (n < 1) { slideIndex = slides.length };

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}