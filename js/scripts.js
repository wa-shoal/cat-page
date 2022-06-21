const productData = [
  {
    title: 'Number 0 Black on White - Easi-Lok Chevron Cut Boxed',
    img: 'img/number-0-cable-marker.jpg',
    sku: 'EL02/3 LOOSE B/W 0',
    price: 10.23,
  },
  {
    title: 'Number 1 Black on White - Easi-Lok Chevron Cut Boxed',
    img: 'img/number-1-cable-marker.jpg',
    sku: 'EL02/3 LOOSE B/W 1',
    price: 10.23,
  },
  {
    title: 'Number 2 Black on White - Easi-Lok Chevron Cut Boxed',
    img: 'img/number-2-cable-marker.jpg',
    sku: 'EL02/3 LOOSE B/W 2',
    price: 10.23,
  },
  {
    title: 'Number 3 Black on White - Easi-Lok Chevron Cut Boxed',
    img: 'img/number-3-cable-marker.jpg',
    sku: 'EL02/3 LOOSE B/W 3',
    price: 10.23,
  },
  {
    title: 'Number 4 Black on White - Easi-Lok Chevron Cut Boxed',
    img: 'img/number-4-cable-marker.jpg',
    sku: 'EL02/3 LOOSE B/W 4',
    price: 10.23,
  },
  {
    title: 'Number 5 Black on White - Easi-Lok Chevron Cut Boxed',
    img: 'img/number-5-cable-marker.jpg',
    sku: 'EL02/3 LOOSE B/W 5',
    price: 10.23,
  },
  {
    title: 'Number 6 Black on White - Easi-Lok Chevron Cut Boxed',
    img: 'img/number-6-cable-marker.jpg',
    sku: 'EL02/3 LOOSE B/W 6',
    price: 10.23,
  },
  {
    title: 'Number 7 Black on White - Easi-Lok Chevron Cut Boxed',
    img: 'img/number-7-cable-marker.jpg',
    sku: 'EL02/3 LOOSE B/W 7',
    price: 10.23,
  },
  {
    title: 'Number 8 Black on White - Easi-Lok Chevron Cut Boxed',
    img: 'img/number-8-cable-marker.jpg',
    sku: 'EL02/3 LOOSE B/W 8',
    price: 10.23,
  },
  {
    title: 'Number 9 Black on White - Easi-Lok Chevron Cut Boxed',
    img: 'img/number-9-cable-marker.jpg',
    sku: 'EL02/3 LOOSE B/W 9',
    price: 10.23,
  }
];

const productContainer = document.querySelector('.products-container');

productData.reverse();
productData.forEach(product => {
  const productBlock = `
    <div class="product-block">
      <div class="product-block-content">
        <div class="product-image">
          <img src="${product.img}" alt="${product.title}">
        </div>
          <span class="sku">${product.sku}</span>
          <h4>${product.title}</h4>
          <span class="ex-vat">Excl VAT</span>
          <span class="price">£${product.price}</span>
          <button class="basket-btn">ADD TO BASKET</button>
        </div>
      </div>
    </div>
  `;
  productContainer.insertAdjacentHTML('afterbegin', productBlock);
});

const filterBlock = document.querySelectorAll('.hidden-filter-heading');

filterBlock.forEach(filter => {
	filter.addEventListener('click', function() {
		this.nextElementSibling.classList.toggle('show');
		this.getElementsByClassName('fa-chevron-down')[0].classList.toggle('rotate-chevron');
	});
});

// Back to top
const backToTop = document.getElementById('back-to-top');

window.onscroll = () => { scrollFunction() };

function scrollFunction() {
  if(document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
}

backToTop.addEventListener('click', () => {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
});

// Show filter mobile
const showFilterMobile = document.getElementById('filter-section');
const filterMobile = document.getElementById('mobile-filter');

filterMobile.addEventListener('click', () => {
	showFilterMobile.classList.add('filter-show-mobile');
	showFilterMobile.classList.remove('filter-hide-mobile');
});

const closeFilter = document.getElementById('close-filter');

closeFilter.addEventListener('click', () => {
	showFilterMobile.classList.add('filter-hide-mobile');
	showFilterMobile.classList.remove('filter-show-mobile');
});

// Read More Button
const hiddenText = document.querySelector('.hidden-text');
const readMoreBtn = document.querySelector('.read-more');

readMoreBtn.addEventListener('click', () => {
    hiddenText.classList.toggle('show-hidden-text');
    if(hiddenText.className === 'hidden-text') {
      readMoreBtn.textContent = 'Read More';
    } else {
      readMoreBtn.textContent = 'Read Less';
    }
});