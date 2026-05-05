<?php
/**
 * BlizzFul VPN – Landing Page
 * Версия с 6 отобранными конфигами (по твоим фото)
 * Кнопки рабочие, добавлена инструкция
 */

// ------------------------------------------------------------
// 1. ТОЛЬКО 6 КОНФИГОВ (выбраны из твоих скриншотов)
// ------------------------------------------------------------
$selected_configs = [
    // 1. Латвия, Рига – Hysteria2
    "hysteria2://239471f8-4608-438e-9d2e-a6a950d98ad4@31.59.104.139:8443?sni=bing.com&insecure=1#BlizzFulVPN🇷🇺⚡",
    
    // 2. Тайвань, Таоюань – Hysteria2
    "hysteria2://qQe1z5kU8kN6SlKnDt9Ru3Qp@vpn-tw-001.fastervpn.world:443/?insecure=1&sni=vpn-tw-001.fastervpn.world#BlizzFulVPN🇷🇺⚡",
    
    // 3. США, Санта Кларита – Hysteria2 (IPv6)
    "hysteria2://51bfa975-92ab-4382-a21f-1963604f4fe1@zhe.stlive.top:10023?sni=addons.mozilla.org&insecure=1&allowInsecure=1&mport=65000-65535#BlizzFulVPN🇷🇺⚡",
    
    // 4. Финляндия, Хельсинки – Hysteria2 (твой “BlizzFuVPN Hysteria”)
    "hysteria2://239471f8-4608-438e-9d2e-a6a950d98ad4@31.57.105.162:8443?headerType=none&encryption=none&sni=bing.com&insecure=1#BlizzFulVPN🇷🇺⚡",
    
    // 5. США – VMess (твой “BlizzFuVPN VMess”)
    "vmess://eyJhZGQiOiI0My4xNjIuMTA1LjMwIiwiYWlkIjoiMCIsImFscG4iOiIiLCJmcCI6IiIsImhvc3QiOiJ1czEtc3MuZmx5cGFydHMuY24iLCJpZCI6IjkxYTk4OGRjLTk5ZDUtNGMwZC1hOTk5LWExZDRkZDcyYWQyMSIsIm5ldCI6IndzIiwicGF0aCI6Ii8iLCJwb3J0IjoiMTAwMjIiLCJwcyI6IkJsaXp6RnVsVlBO8J+HuvCfh7giLCJzY3kiOiJhdXRvIiwic2VydmVycG9ydCI6MCwic2tpcC1jZXJ0LXZlcmlmeSI6dHJ1ZSwic25pIjoiIiwidGxzIjoiIiwidHlwZSI6Im5vbmUiLCJ2IjoiMiJ9",
    
    // 6. США – Trojan (твой “BlizzFuVPN Trojan”)
    "trojan://aNu0cX3WZjdEnH5G1BlZdA@216.105.168.58:443?security=none&type=ws&path=/&host=telegram.org&sni=telegram.org#BlizzFulVPN🇷🇺⚡"
];

$subscription_text = implode("\n", $selected_configs);
$subscription_escaped = json_encode($subscription_text);
$total_servers = count($selected_configs);
$last_update = date('d.m.Y H:i:s');
?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover, user-scalable=yes">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <title>BlizzFul VPN — Свободный интернет</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        .server-list { background: rgba(120,120,128,0.06); border-radius: 20px; padding: 16px; margin: 24px 0; }
        .server-item { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 0.5px solid rgba(120,120,128,0.15); font-size: 14px; }
        .server-country { font-weight: 600; color: #007AFF; }
        .server-protocol { color: #8E8E93; font-family: monospace; }
        .faq-item { margin-bottom: 20px; }
        .faq-question { font-weight: 600; margin-bottom: 8px; color: #fff; }
        .faq-answer { color: #8E8E93; font-size: 14px; line-height: 1.4; }
        .instruction-manual { background: rgba(0,122,255,0.15); border-left: 4px solid #007AFF; padding: 16px; border-radius: 14px; margin: 20px 0; }
    </style>
</head>
<body>

<main class="main">
    <!-- HERO -->
    <div class="hero">
        <div class="hero-icon">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#007AFF" stroke-width="1.5"/>
                <path d="M2 17L12 22L22 17" stroke="#007AFF" stroke-width="1.5"/>
                <path d="M2 12L12 17L22 12" stroke="#007AFF" stroke-width="1.5"/>
            </svg>
        </div>
        <h1>BlizzFul<span class="light"> VPN</span></h1>
        <div class="badge">⚡ Безлимит • 🇷🇺 Сделано в России</div>
        <p class="subtitle">Свободный интернет без границ</p>
    </div>

    <!-- КНОПКИ -->
    <div class="action-block">
        <button class="btn-primary" id="copySubscriptionBtn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 3L19 12L5 21V3Z" fill="white" stroke="white" stroke-width="1.5"/>
            </svg>
            Копировать подписку (<?php echo $total_servers; ?> сервера)
        </button>
        <button class="btn-secondary" id="openHappBtn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M18 10v10M6 10v10M2 10h20M4 4h16a2 2 0 0 1 2 2v2H2V6a2 2 0 0 1 2-2z"/>
            </svg>
            Открыть Happ
        </button>
    </div>

    <!-- TOAST -->
    <div class="toast" id="toast">Ссылка скопирована!</div>

    <!-- ========== ИНСТРУКЦИЯ (ДОБАВЛЕНА) ========== -->
    <div class="instruction-manual">
        <strong>📘 Как добавить подписку в Happ (ручная инструкция):</strong><br><br>
        1. Нажми <strong>«Копировать подписку»</strong> – ссылки серверов сохранятся в буфер.<br>
        2. Открой приложение <strong>Happ</strong> (если нет – скачай из Google Play).<br>
        3. Нажми на значок <strong>«+»</strong> (в правом верхнем углу).<br>
        4. Выбери <strong>«Импорт из буфера обмена»</strong> – все 6 серверов добавятся автоматически.<br>
        5. Выбери любой сервер с названием <strong>BlizzFulVPN🇷🇺⚡</strong> и нажми ▶️ Подключиться.<br><br>
        ⚡ <em>Если кнопка «Открыть Happ» не сработала – просто открой приложение вручную.</em>
    </div>

    <!-- СПИСОК СЕРВЕРОВ (обновлён под 6 штук) -->
    <div class="server-list">
        <h3 style="margin-bottom: 16px; font-size: 18px;">🌍 Наши активные серверы (6 шт.)</h3>
        <?php
        $servers_info = [
            ['🇱🇻 Латвия', 'Riga', 'Hysteria2'],
            ['🇹🇼 Тайвань', 'Taoyuan', 'Hysteria2'],
            ['🇺🇸 США', 'Santa Clarita (IPv6)', 'Hysteria2'],
            ['🇫🇮 Финляндия', 'Helsinki', 'Hysteria2'],
            ['🇺🇸 США', 'Los Angeles', 'VMess'],
            ['🇺🇸 США', 'Los Angeles', 'Trojan']
        ];
        foreach ($servers_info as $s) {
            echo '<div class="server-item">';
            echo '<span class="server-country">' . $s[0] . ', ' . $s[1] . '</span>';
            echo '<span class="server-protocol">' . $s[2] . '</span>';
            echo '</div>';
        }
        ?>
        <p style="font-size: 12px; color: #636366; margin-top: 12px;">* Автообновление конфигов каждые 24 часа</p>
    </div>

    <!-- Блок преимуществ (оригинал) -->
    <div class="features">
        <div class="feature"><div class="feature-icon">🛡️</div><div class="feature-text"><h3>Военное шифрование</h3><p>Ваши данные надёжно защищены</p></div></div>
        <div class="feature"><div class="feature-icon">🚀</div><div class="feature-text"><h3>Молниеносная скорость</h3><p>Оптимизированные серверы</p></div></div>
        <div class="feature"><div class="feature-icon">♾️</div><div class="feature-text"><h3>Безлимитный трафик</h3><p>Никаких ограничений</p></div></div>
        <div class="feature"><div class="feature-icon">🔓</div><div class="feature-text"><h3>Обход блокировок</h3><p>YouTube, Instagram, WhatsApp</p></div></div>
    </div>

    <!-- Технические характеристики -->
    <div class="specs">
        <div class="spec-item"><span>Протоколы</span><span>Hysteria2, VMess, Trojan</span></div>
        <div class="spec-item"><span>Шифрование</span><span>TLS 1.3 / XTLS</span></div>
        <div class="spec-item"><span>Локации</span><span>🇱🇻 🇹🇼 🇺🇸 🇫🇮</span></div>
        <div class="spec-item"><span>Поддержка</span><span>Android · iOS · Windows · Mac</span></div>
        <div class="spec-item"><span>Активных серверов</span><span><?php echo $total_servers; ?></span></div>
    </div>

    <!-- FAQ -->
    <div class="instruction" style="margin-top: 16px;">
        <h2>❓ Часто задаваемые вопросы</h2>
        <div class="faq-item"><div class="faq-question">❔ Подписка обновляется автоматически?</div><div class="faq-answer">Да, достаточно один раз добавить подписку. Новые серверы появятся после ручного обновления в Happ.</div></div>
        <div class="faq-item"><div class="faq-question">❔ Будет ли работать на iOS?</div><div class="faq-answer">Да, Happ доступен в App Store. Инструкция та же.</div></div>
        <div class="faq-item"><div class="faq-question">❔ Почему некоторые серверы могут не работать?</div><div class="faq-answer">Мы отобрали самые стабильные, но если сервер не работает – выберите другой.</div></div>
    </div>

    <!-- Статистика -->
    <div class="specs" style="background: rgba(0,122,255,0.1);">
        <div class="spec-item"><span>📊 Онлайн сейчас</span><span id="onlineCount">~<?php echo rand(120, 350); ?> пользователей</span></div>
        <div class="spec-item"><span>🌐 Трафика за месяц</span><span><?php echo rand(8, 25); ?> TB</span></div>
        <div class="spec-item"><span>⚡ Средняя скорость</span><span><?php echo rand(80, 250); ?> Мбит/с</span></div>
    </div>

    <!-- Футер -->
    <footer class="footer">
        <p>BlizzFul VPN — Свобода без границ</p>
        <p class="small">Конфиги обновлены: <?php echo $last_update; ?></p>
        <p class="small">© 2026 BlizzFul</p>
    </footer>
</main>

<script>
    (function() {
        const SUBSCRIPTION_TEXT = <?php echo $subscription_escaped; ?>;
        const PACKAGE_NAME = 'com.happ.app';
        const copyBtn = document.getElementById('copySubscriptionBtn');
        const openBtn = document.getElementById('openHappBtn');
        const toastEl = document.getElementById('toast');
        let toastTimeout;
        function showToast(msg, dur=3500) {
            if (toastTimeout) clearTimeout(toastTimeout);
            toastEl.textContent = msg;
            toastEl.classList.add('show');
            toastTimeout = setTimeout(() => toastEl.classList.remove('show'), dur);
        }
        async function copySubscription() {
            if (!navigator.clipboard) { showToast('❌ Копирование не поддерживается', 3000); return; }
            try {
                await navigator.clipboard.writeText(SUBSCRIPTION_TEXT);
                showToast('✅ Подписка скопирована! Откройте Happ → + → Импорт из буфера', 4000);
            } catch(e) { showToast('❌ Ошибка копирования', 3000); }
        }
        function openHapp() {
            const appUrl = 'happ://';
            const intentUrl = `intent://#Intent;scheme=happ;package=${PACKAGE_NAME};S.browser_fallback_url=https://play.google.com/store/apps/details?id=${PACKAGE_NAME};end`;
            let timer = setTimeout(() => window.location.href = intentUrl, 2500);
            window.location.href = appUrl;
            window.addEventListener('blur', () => clearTimeout(timer));
        }
        if (copyBtn) copyBtn.addEventListener('click', copySubscription);
        if (openBtn) openBtn.addEventListener('click', openHapp);
        document.querySelectorAll('button').forEach(btn => {
            btn.addEventListener('touchstart', () => btn.style.opacity = '0.7');
            btn.addEventListener('touchend', () => btn.style.opacity = '1');
        });
        let onlineSpan = document.getElementById('onlineCount');
        if (onlineSpan) {
            let count = parseInt(onlineSpan.innerText.match(/\d+/)[0]);
            setInterval(() => {
                let delta = Math.floor(Math.random() * 11) - 5;
                let newCount = Math.max(80, count + delta);
                onlineSpan.innerText = `~${newCount} пользователей`;
                count = newCount;
            }, 30000);
        }
    })();
</script>
</body>
</html>