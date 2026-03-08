// === ДАННЫЕ МЕНЮ И ГАЛЕРЕИ ===
const menuData = [
    {
        id: 1,
        name: 'Казан Кебаб',
        category: 'hot',
        price: '3000 ₸',
        description: '',
        image: 'https://cdn.nur.kz/images/1120x630/c293a36206b4a80e.webp?version=1'
    },
    {
        id: 2,
        name: 'Классикалық плов',
        category: 'hot',
        price: '2000 ₸',
        description: 'Дәстүрлі плов күріш',
        image: 'https://images.gastronom.ru/aovMYcGLbHtuJwEZdn2yUPxww-dA-zfM3dexGT3u-JY/pr:content-group-preview-image/g:ce/rs:auto:0:0:0/L2Ntcy9hbGwtaW1hZ2VzL2U3ODk0OGExLWE0ZjQtNGRjNS1hZjNiLTQ2MmNhMmY5ODgyNi5qcGc.webp'
    },
    {
        id: 3,
        name: 'Манты',
        category: 'hot',
        price: '2200 ₸',
        description: 'Манты',
        image: 'https://rutxt.ru/files/17330/final/c55791aeff.JPG'
    },
    {
        id: 4,
        name: 'Цезарь  салат',
        category: 'salad',
        price: '2700 ₸',
        description: 'Классикалық салат пармезан сыры',
        image: 'https://images.gastronom.ru/-UHzDgNx-m0MMa6OR0ilz2qP7MB0mKQeGceObc9jpck/pr:recipe-cover-image/g:ce/rs:auto:0:0:0/L2Ntcy9hbGwtaW1hZ2VzLzVhNzFhZGY1LTM3MTYtNDlmMy04NDNlLTAwMTg4MGNiM2E0OS5qcGc.webp'
    },
    {
        id: 5,
        name: 'Грек салаты',
        category: 'salad',
        price: '1599 ₸',
        description: '',
        image: 'https://art-lunch.ru/content/uploads/2018/07/Greek_salad.jpg'
    },
    {
        id: 6,
        name: 'Стейк',
        category: 'hot',
        price: '6000 ₸',
        description: 'Сиыр етінен жасалған стейк',
        image: 'https://halal-spb.ru/sites/default/files/styles/large/public/bd09da8cd90c4f5f8807f24785545d00.jpg?itok=KnyHC-n8'
    },
    {
        id: 9,
        name: 'Лағман',
        category: 'hot',
        price: '1800 ₸',
        description: '',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_D8Rd8KQ0GEdDPgLdy_ByuoUL3v7Kz_aFsA&s'
    },
    {
       id: 9,
        name: 'Фри етпен',
        category: 'hot',
        price: '1800 ₸',
        description: '',
        image: 'https://i.ytimg.com/vi/q7FSvkyE7Z8/maxresdefault.jpg'
    },
    {
        id: 8,
        name: 'Қара шай',
        category: 'drink',
        price: '700₸',
        description: 'Ароматты қара шай',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmzekhIZfLfU-8qPsh11hvDUOrMwF77gPTuA&s'
    },
    {
        id: 9,
        name: 'Моракандық чай',
        category: 'hot',
        price: '1290₸',
        description: '',
        image: 'https://avatars.mds.yandex.net/get-vertis-journal/4212087/cab76703-a5c1-428c-82e5-366c862c135b.jpg/1600x1600'
    },
    {
        id: 7, 
        name: 'Лимонад',        
        category: 'drink',         
        price: '1200₸',       
         description: 'Клубника лимонады',       
         image: 'https://shuba.life/static/content/thumbs/1824x912/e/60/tgtnhu---c2x1x50px50p-up--a6ce84873796e795335873a1893a860e.jpg'
     },
    
    
];

const galleryImages = [
    { title: 'Бас тағам', url: 'https://ulysmedia.kz/cache/imagine/1200/uploads/news/2025/01/01/677562c46897b398447488.png' },
    { title: 'Бас Аспаз', url: 'https://static.mk.ru/upload/entities/2023/08/17/13/photoreportsImages/detailPicture/a5/b4/df/4a/8d7b2d2e97b47f70d37c96c1d8c4367e.jpg' },
    { title: 'Ресторан залы', url: 'https://designer.kz/wp-content/uploads/2024/10/KM_TOR_14.webp' },
    { title: 'Арнайы ұсыныс', url: 'https://www.zakon.kz/pbi/WEBP/2025-07-21/file-6c532666-2de7-4ad5-a351-bf4e40d1792a/800x450.orig.webp' },

];

let currentFilter = 'all';
let orderItems = [];

// === ИНИЦИАЛИЗАЦИЯ ===
document.addEventListener('DOMContentLoaded', function() {
    renderMenu();
    renderGallery();
    setupMenuToggle();
    loadRestaurantInfo();
    setupContactForm();
    loadOrderFromStorage();
});

// === ҚОРШЕУ ===
function addToOrder(name, price) {
    orderItems.push({ name, price, time: new Date().toLocaleTimeString() });
    saveOrderToStorage();
    alert(`✅ "${name}" тапсырысқа қосылды!`);
}

// === МЕНЮ - РЕНДЕРИНГ ===
function renderMenu() {
    const menuList = document.getElementById('menuList');
    menuList.innerHTML = '';

    let filteredMenu = menuData;
    if (currentFilter !== 'all') {
        filteredMenu = menuData.filter(item => item.category === currentFilter);
    }

    filteredMenu.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.innerHTML = `
            <div class="menu-item-image">
                <img src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/300x200/8B4513/FFD700?text=${encodeURIComponent(item.name)}'">
                <div class="menu-item-price-badge">${item.price}</div>
            </div>
            <div class="menu-item-header">
                <h3>${item.name}</h3>
            </div>
            <div class="menu-item-body">
                <p>${item.description}</p>
                <button class="btn btn-menu-add" onclick="addToOrder('${item.name}', '${item.price}')">🛒 Қосу</button>
            </div>
        `;
        menuList.appendChild(menuItem);
    });
}

// === ФИЛЬТРАЦИЯ МЕНЮ ===
function filterMenu(category) {
    currentFilter = category;
    
    // Обновляем активную кнопку
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    renderMenu();
}

// === ГАЛЕРЕЯ - РЕНДЕРИНГ ===
function renderGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    galleryGrid.innerHTML = '';

    galleryImages.forEach((image, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `
            <img src="${image.url}" alt="${image.title}" loading="lazy">
            <div class="gallery-item-overlay">
                <p>${image.title}</p>
                <div class="gallery-item-actions">
                    <button class="btn-delete-photo" onclick="deletePhoto(${index})" title="Фотоны өшіру">🗑️ Өшіру</button>
                </div>
            </div>
        `;
        galleryGrid.appendChild(galleryItem);
    });
}

// === ФОТОНЫ ӨШІРУ ===
function deletePhoto(index) {
    if (confirm('Бұл фотоны өшіруді өндіктеу?')) {
        galleryImages.splice(index, 1);
        renderGallery();
        alert('✅ Фото сәтті өшірілді!');
    }
}

// === МОБИЛЬНОЕ МЕНЮ ===
function setupMenuToggle() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });

        // Закрытие меню при клике на ссылку
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
            });
        });
    }
}

// === ЗАГРУЗКА ИНФОРМАЦИИ РЕСТОРАНА ===
function loadRestaurantInfo() {
    // По умолчанию используются значения из HTML
    // При необходимости можно загружать с сервера
    fetch('api.php?action=getRestaurantInfo')
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                document.getElementById('aboutText').textContent = data.about || document.getElementById('aboutText').textContent;
                document.getElementById('contactPhone').textContent = data.phone || document.getElementById('contactPhone').textContent;
                document.getElementById('contactAddress').textContent = data.address || document.getElementById('contactAddress').textContent;
                document.getElementById('contactHours').innerHTML = (data.hours || document.getElementById('contactHours').textContent).replace(/\n/g, '<br>');
            }
        })
        .catch(error => console.log('Info loaded from defaults'));
}

// === КОНТАКТНАЯ ФОРМА ===
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const formData = new FormData(this);
            
            // Отправляем данные на сервер
            fetch('api.php?action=sendMessage', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('Рахмет! Сіздің хабарлама жіберілді.');
                    contactForm.reset();
                } else {
                    alert('Қате болды. Өтінем, кейінірек қайталап көріңіз.');
                }
            })
            .catch(error => {
                console.log('Message saved locally');
                alert('Хабарлама қабылданды!');
                contactForm.reset();
            });
        });
    }
}

// === ПЛАВНАЯ ПРОКРУТКА ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// === АНИМАЦИЯ ПРИ ПРОКРУТКЕ ===
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.menu-item, .gallery-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(item);
});

// === СОХРАНЕНИЕ ЗАКАЗА ===
function saveOrderToStorage() {
    localStorage.setItem('orders', JSON.stringify(orderItems));
}

function loadOrderFromStorage() {
    const saved = localStorage.getItem('orders');
    if (saved) {
        orderItems = JSON.parse(saved);
    }
}

// === ЛОГИРОВАНИЕ ===
console.log('✅ Сайт жүктелді!');
console.log('📱 Версия: 1.0');
console.log('🍽️ GUW - Ресторан сайты');
