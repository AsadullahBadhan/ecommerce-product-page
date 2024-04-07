const hamburger = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.close-menu-btn');
const navMenu = document.querySelector('.nav-menu');
const overlay = document.querySelector('.overlay');

hamburger.addEventListener('click', () => {
  navMenu.classList.add('active');
  overlay.style.display = navMenu.classList.contains('active') ? 'block' : 'none';
});

closeBtn.addEventListener('click', () => {
  navMenu.classList.remove('active');
  overlay.style.display = navMenu.classList.contains('active') ? 'block' : 'none';
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

//add item to cart//
// TODO: increase item count
const increaseCountBtn = document.querySelector('.increase-count');
const decreaseCountBtn = document.querySelector('.decrease-count');
const productCount = document.querySelector('#product-count');

increaseCountBtn.addEventListener('click', (e) => {
  e.preventDefault();
  increaseCount();
});
decreaseCountBtn.addEventListener('click', (e) => {
  e.preventDefault();
  decreaseCount();
});

function increaseCount() {
  productCount.textContent = parseInt(productCount.textContent) + 1;
}

function decreaseCount() {
  productCount.textContent = parseInt(productCount.textContent) - 1;
}

const addToCartBtn = document.querySelector('.add-to-cart-btn');
const cart = document.querySelector('.cart');

addToCartBtn.addEventListener('click', (e) => {
  e.preventDefault();
  addToCart();
});

function addToCart() { }