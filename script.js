// ========================================
// Инициализация при загрузке
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    initTypingEffect();
    initNavigation();
    initScrollAnimations();
    initSkillBars();
    initCounter();
    initContactForm();
    initParallax();
    initDownloadLinks();
});

// ========================================
// Эффект печатной машинки
// ========================================
function initTypingEffect() {
    const typingElement = document.querySelector('.typing-text');
    const phrases = [
        'C# Developer',
        '.NET Engineer',
        'Backend Developer',
        'Software Architect',
        'Code Enthusiast'
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            typingSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 500;
        }

        setTimeout(type, typingSpeed);
    }

    type();
}

// ========================================
// Навигация
// ========================================
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Эффект при скролле
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        updateActiveNavLink();
    });

    // Мобильное меню
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Закрытие меню при клике на ссылку
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Плавный скролл
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const navHeight = navbar.offsetHeight;
                const targetPosition = targetElement.offsetTop - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// ========================================
// Анимации при скролле
// ========================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                // Добавляем задержку для дочерних элементов
                const children = entry.target.querySelectorAll('.project-card, .skill-item, .contact-method');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add('visible');
                    }, index * 100);
                });
            }
        });
    }, observerOptions);

    // Наблюдаем за секциями
    document.querySelectorAll('.about-content, .projects-grid, .skills-content, .contact-content').forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });

    // Наблюдаем за карточками проектов
    document.querySelectorAll('.project-card').forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
}

// ========================================
// Анимация полосок навыков
// ========================================
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progress = entry.target.getAttribute('data-progress');
                entry.target.style.width = `${progress}%`;
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => {
        observer.observe(bar);
    });
}

// ========================================
// Счётчик чисел
// ========================================
function initCounter() {
    const counters = document.querySelectorAll('.stat-number');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                animateCounter(entry.target, target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
        observer.observe(counter);
    });
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const duration = 2000;
    const stepTime = duration / 50;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, stepTime);
}

// ========================================
// Форма контактов
// ========================================
function initContactForm() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Получаем данные формы
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        // Валидация
        if (!validateForm(data)) {
            return;
        }

        // Имитация отправки
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;

        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Отправка...';
        submitBtn.disabled = true;

        setTimeout(() => {
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Отправлено!';
            submitBtn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';

            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.style.background = '';
                submitBtn.disabled = false;
                form.reset();
            }, 2000);
        }, 1500);
    });
}

function validateForm(data) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!data.name || data.name.trim().length < 2) {
        showNotification('Пожалуйста, введите корректное имя', 'error');
        return false;
    }

    if (!data.email || !emailRegex.test(data.email)) {
        showNotification('Пожалуйста, введите корректный Email', 'error');
        return false;
    }

    if (!data.subject || data.subject.trim().length < 3) {
        showNotification('Пожалуйста, введите тему сообщения', 'error');
        return false;
    }

    if (!data.message || data.message.trim().length < 10) {
        showNotification('Сообщение должно быть не менее 10 символов', 'error');
        return false;
    }

    return true;
}

function showNotification(message, type) {
    // Удаляем существующие уведомления
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas ${type === 'error' ? 'fa-exclamation-circle' : 'fa-check-circle'}"></i>
        <span>${message}</span>
    `;

    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'error' ? '#ef4444' : '#10b981'};
        color: white;
        padding: 15px 20px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        gap: 10px;
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
        box-shadow: 0 10px 40px rgba(0,0,0,0.3);
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ========================================
// Параллакс эффект для фона
// ========================================
function initParallax() {
    const floatingCode = document.querySelector('.floating-code');

    if (floatingCode) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            floatingCode.style.transform = `translate(-50%, calc(-50% + ${scrolled * 0.3}px))`;
        });
    }
}

// ========================================
// Дополнительные эффекты
// ========================================

// Эффект "печатания" для заголовков
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Плавное появление элементов при скролле
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');

    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 150;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('revealed');
        }
    });
}

// Добавляем класс для анимации кнопок
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', function(e) {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        ripple.style.cssText = `
            position: absolute;
            background: rgba(255,255,255,0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            left: ${x}px;
            top: ${y}px;
            width: 100px;
            height: 100px;
            margin-left: -50px;
            margin-top: -50px;
        `;

        btn.style.position = 'relative';
        btn.style.overflow = 'hidden';
        btn.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// Добавляем анимацию ripple в CSS динамически
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }

    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ========================================
// Обработка изменения размера окна
// ========================================
let resizeTimer;

window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Пересчитываем позиции при изменении размера
        updateActiveNavLink();
    }, 250);
});

// ========================================
// Консольное приветствие для разработчиков
// ========================================
console.log(`
%c
╔═══════════════════════════════════════════╗
║     👋 Привет, разработник!               ║
║     Сайт создан Blizzful                  ║
║     C# Developer                          ║
╚═══════════════════════════════════════════╝
`, 'color: #6366f1; font-family: monospace; font-size: 14px;');

// ========================================
// Lazy Loading для изображений (если будут добавлены)
// ========================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ========================================
// Поддержка свайпов для мобильных устройств
// ========================================
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

document.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, { passive: true });

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0 && window.innerWidth <= 768) {
            // Свайп влево - закрыть меню если открыто
            const navMenu = document.getElementById('navMenu');
            const hamburger = document.getElementById('hamburger');
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        }
    }
}

// ========================================
// Обработка ссылок на скачивание
// ========================================
function initDownloadLinks() {
    const downloadLinks = document.querySelectorAll('.download-link');

    downloadLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            // Если ссылка на # (файл ещё не добавлен)
            if (href === '#' || !href) {
                e.preventDefault();
                showNotification('Файл проекта ещё не добавлен! Проверь папку projects/', 'error');
            }
        });
    });
}
