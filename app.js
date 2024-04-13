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
  productImage.src = `./images/image-product-${slideIndex}.jpg`;
}

//add item to cart//
const price = parseInt(document.querySelector('.price span').textContent);
const productCount = document.querySelector('#product-count');
let productCountNum = parseInt(productCount.textContent);
const cartElement = document.querySelector('.cart');
const cartDetail = document.querySelector('.cart-detail');
const addToCartBtn = document.querySelector('.add-to-cart-btn');

function updateCount(n) {
  productCountNum += n;
  if (productCountNum < 0) productCountNum = 0;

  productCount.textContent = productCountNum;
}

addToCartBtn.addEventListener('click', (e) => {
  addToCart();
});

function addToCart() {
  const totalPrice = price * productCountNum;

  cartDetail.innerHTML = `
    <p>Cart</p>
    <hr />
    <div class="card-content">
      <img src="./images/image-product-1-thumbnail.jpg" alt="shoe image" />
      <div class="card-info">
        <p class="card-title">Fall Limited Edition Sneakers</p>
        <p>$125.00 x ${productCountNum} $${totalPrice}</p>
      </div>
      <button class="btn">Checkout</button>
    </div>
  `;

  cartElement.setAttribute('data-count', productCount.textContent);
}

cartElement.addEventListener('click', () => {
  cartDetail.style.display = 'flex';
})