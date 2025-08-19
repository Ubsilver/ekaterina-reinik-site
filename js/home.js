// Получаем элементы бургер-меню, мобильное меню, кнопку закрытия и кнопку связаться
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
const closeBtn = document.getElementById('closeBtn');
const contactBtn = document.getElementById('contactBtn');

// Функция для открытия мобильного меню
burger.addEventListener('click', () => {
    mobileMenu.style.display = 'flex';
});

// Функция для закрытия мобильного меню
closeBtn.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
});
