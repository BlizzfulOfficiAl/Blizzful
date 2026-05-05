/**
 * Файл script.js для сайта BlizzFul VPN
 * Обеспечивает работу кнопок: копирование ссылки и открытие приложения Happ.
 * Соответствует официальной документации Happ.
 */

(function() {
    // --- Конфигурация ---
    const CONFIG_URL = window.CONFIG_URL || 'https://blizzful.csamp.ru/blizzful.txt';
    const PACKAGE_NAME = 'com.happ.app'; // Предполагаемый пакет приложения Happ

    // --- DOM элементы ---
    const copyBtn = document.getElementById('copySubscriptionBtn');
    const openBtn = document.getElementById('openHappBtn');
    const toastEl = document.getElementById('toast');

    // --- Вспомогательная функция для показа уведомлений (toast) ---
    let toastTimeout;
    function showToast(message, duration = 3000) {
        if (toastTimeout) {
            clearTimeout(toastTimeout);
        }
        toastEl.textContent = message;
        toastEl.classList.add('show');
        toastTimeout = setTimeout(() => {
            toastEl.classList.remove('show');
        }, duration);
    }

    // --- 1. Функционал кнопки копирования ссылки ---
    async function copyConfigLink() {
        if (!navigator.clipboard) {
            console.error('Clipboard API не поддерживается в этом браузере.');
            showToast('❌ Ошибка: браузер не поддерживает копирование', 2000);
            return;
        }

        try {
            await navigator.clipboard.writeText(CONFIG_URL);
            console.log('Ссылка скопирована в буфер обмена:', CONFIG_URL);
            showToast('✅ Ссылка скопирована! Откройте Happ и нажмите + → Импорт из буфера', 4000);
        } catch (err) {
            console.error('Ошибка при копировании:', err);
            showToast('❌ Не удалось скопировать ссылку. Попробуйте вручную.', 3000);
        }
    }

    // --- 2. Функционал кнопки открытия Happ ---
    function openHappApp() {
        // Основная схема deep link для Happ - "happ://"
        // Официальная документация подтверждает использование deep links для передачи конфигураций.
        // Ссылки можно передавать через буфер обмена, QR-код или deep link[reference:2].
        const appUrl = `happ://`;

        // Intent URL для Android для более надёжного открытия, с fallback на установку в Google Play.
        // Это стандартная практика для открытия приложений на Android.
        const intentUrl = `intent://#Intent;scheme=happ;package=${PACKAGE_NAME};S.browser_fallback_url=https://play.google.com/store/apps/details?id=${PACKAGE_NAME};end`;

        // Пытаемся сначала открыть через deep link.
        // Если deep link не сработал в течение 2.5 секунд, пробуем intent.
        // Это распространённый паттерн для обработки случаев, когда deep link блокируется браузером.
        let fallbackTimer = setTimeout(() => {
            window.location.href = intentUrl;
        }, 2500);

        window.location.href = appUrl;

        // Событие для очистки таймера, если приложение было открыто.
        window.addEventListener('blur', () => {
            clearTimeout(fallbackTimer);
        });
    }

    // --- Установка обработчиков событий ---
    if (copyBtn) {
        copyBtn.addEventListener('click', copyConfigLink);
    } else {
        console.error('Элемент с id="copySubscriptionBtn" не найден!');
    }

    if (openBtn) {
        openBtn.addEventListener('click', openHappApp);
    } else {
        console.error('Элемент с id="openHappBtn" не найден!');
    }

    // Эффект нажатия для мобильных устройств
    const allBtns = document.querySelectorAll('button');
    allBtns.forEach(btn => {
        btn.addEventListener('touchstart', () => {
            btn.style.opacity = '0.7';
        });
        btn.addEventListener('touchend', () => {
            btn.style.opacity = '1';
        });
        btn.addEventListener('touchcancel', () => {
            btn.style.opacity = '1';
        });
    });
})();