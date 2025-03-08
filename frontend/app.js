let currentLang = 'en'; // 默认英文
const translations = { en: {}, zh: {} };

async function loadTranslations(lang) {
  const response = await fetch(`translations/${lang}.json`);
  translations[lang] = await response.json();
  updateTexts();
}

function updateTexts() {
  document.getElementById('title').textContent = translations[currentLang].title;
  // 更新其他文本...
}

// 切换语言按钮
document.getElementById('btn-en').addEventListener('click', () => {
  currentLang = 'en';
  loadTranslations('en');
});

let cart = [];

function addToCart(product) {
  cart.push(product);
  updateCartUI();
}

function updateCartUI() {
  const cartList = document.getElementById('cart-items');
  cartList.innerHTML = cart.map(item => `
    <li>${item.name} - $${item.price}</li>
  `).join('');
}