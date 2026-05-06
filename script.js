/**
 * Файл script.js для сайта BlizzFul VPN
 * Исправлено: работает с зашифрованной happ-ссылкой
 */

(function() {
    // --- ТВОЯ РАБОЧАЯ HAPP-ССЫЛКА ---
    // Happ сам её расшифрует и добавит подписку
    const HAPP_LINK = 'happ://crypt5/neirR83MgXnJP8Xz8v20zkAMhiYb2PFVpRrdVpW6SEpQguyWe4HAs2feAGlTKVrVKsnHKrKzopWVxXKsOTMeqHTBQ5xaOW5QUgIpOZJrpIpRv8xUuXuZcDAjDgPE89Y4fhKAFBZXPOBoaY4jt3eJUM14CATEr+PqBYLjaikYAZCLcvc7zgmpWvLEXWtmCqqiGg/pwxUxxsXABwfl6ezUxyBoyIi5w3/9SFb9Rykr3iG7aYrSc4PJBHpxuku+X0Tq85AAlTNgeJz+cWidZ9QPlohPM0m1mZHU01CKxrEswpPDSttBlEosGfh04C61OUSD3lMpj9Vm7e6q0QqdYAPD6rdSN63rFcyVtle70vOdJ7kyLYczgUr7HbWCmZ3UzoEGsxDhOgJ3pjDowR6pF9MnaEmRaUYsMbsPbyA2M5vNCHRaD0ylnRduqtiYt2irB+fA+IPXVUyCywkcGPCzkkpOGWpBqiQt0hS2O6+u8pWnkjJVNwdPIZwgq8+dFTAXY51dGhYAvN98XlyIZlLhjISapAYb9XGtwkhgGEtlF4J1Qf5fmRCTxZu38amJ/jjpidJShPfdOAyjvqfaR7CvqgWPJ21jAWDQV7gZjJiET5D9BFSSKDFR6oGDNBIF9Q75u5uHqao3A2fuhTO0egh3VMntwcK6XhYX17j83uwskISjfpRtBjSOYr7XAZrQqIw14yTAuBtep7kJ7amRA0ZiJfe/H4DfHOW7E06Fvnske7qf1vGR5uw2jBXaJIjzEj67jyFJ/PhB4KrDlZze9m1648IGaGf4BMAqplbds2pklRhAucVh/poSCoySjYKzDshfYHqdFzIiMKELT5/5dBezkZm4SYszGecNWdzyGoJ+Ps1P5WaI8TS2S8C28b+XC2TZ8TCzBp4uFSmtSD8MY=saftjv';

    // --- DOM элементы ---
    const activateBtn = document.getElementById('btn-activate');
    const copyBtn = document.getElementById('btn-copy');
    const toastEl = document.getElementById('toast');

    // --- Показ уведомлений ---
    let toastTimeout;
    function showToast(message, duration = 3000) {
        if (toastTimeout) clearTimeout(toastTimeout);
        toastEl.textContent = message;
        toastEl.classList.add('show');
        toastTimeout = setTimeout(() => {
            toastEl.classList.remove('show');
        }, duration);
    }

    // --- 1. Кнопка «Активировать VPN в Happ» (открывает happ-ссылку) ---
    function activateVPN() {
        // Копируем ссылку на всякий случай в буфер (запасной вариант)
        if (navigator.clipboard) {
            navigator.clipboard.writeText(HAPP_LINK).catch(e => console.log('Копирование не удалось', e));
        }
        
        // Открываем Happ
        window.location.href = HAPP_LINK;
        
        // Показываем подсказку
        showToast('🔓 Открываем Happ... Если не открылся — установите Happ из Google Play', 4000);
    }

    // --- 2. Кнопка «Скопировать ссылку» (копирует happ-ссылку) ---
    async function copyConfigLink() {
        if (!navigator.clipboard) {
            showToast('❌ Копирование не поддерживается', 2000);
            return;
        }
        try {
            await navigator.clipboard.writeText(HAPP_LINK);
            showToast('✅ Ссылка скопирована! Вставьте в Happ при добавлении подписки', 4000);
        } catch (err) {
            showToast('❌ Ошибка копирования', 2000);
        }
    }

    // --- Навешиваем обработчики ---
    if (activateBtn) activateBtn.addEventListener('click', activateVPN);
    if (copyBtn) copyBtn.addEventListener('click', copyConfigLink);

    // Эффект нажатия для кнопок
    document.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('touchstart', () => btn.style.opacity = '0.7');
        btn.addEventListener('touchend', () => btn.style.opacity = '1');
        btn.addEventListener('touchcancel', () => btn.style.opacity = '1');
    });
})();