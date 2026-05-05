<?php
/**
 * Файл подписки для Happ
 * URL: https://blizzful.csamp.ru/subscribe.php
 * Содержит 6 отобранных конфигов с флагами стран
 */

// Устанавливаем заголовок для plain text (чтобы Happ правильно прочитал)
header('Content-Type: text/plain; charset=utf-8');

// Массив конфигов с уникальными именами (флаг + страна)
$configs = [
    // Латвия, Рига – Hysteria2
    "hysteria2://239471f8-4608-438e-9d2e-a6a950d98ad4@31.59.104.139:8443?sni=bing.com&insecure=1#🇱🇻 BlizzFulVPN (Latvia)",

    // Тайвань, Таоюань – Hysteria2
    "hysteria2://qQe1z5kU8kN6SlKnDt9Ru3Qp@vpn-tw-001.fastervpn.world:443/?insecure=1&sni=vpn-tw-001.fastervpn.world#🇹🇼 BlizzFulVPN (Taiwan)",

    // США, Санта Кларита (IPv6) – Hysteria2
    "hysteria2://51bfa975-92ab-4382-a21f-1963604f4fe1@zhe.stlive.top:10023?sni=addons.mozilla.org&insecure=1&allowInsecure=1&mport=65000-65535#🇺🇸 BlizzFulVPN (USA - Santa Clarita)",

    // Финляндия, Хельсинки – Hysteria2
    "hysteria2://239471f8-4608-438e-9d2e-a6a950d98ad4@31.57.105.162:8443?headerType=none&encryption=none&sni=bing.com&insecure=1#🇫🇮 BlizzFulVPN (Finland)",

    // США, Лос-Анджелес – VMess
    "vmess://eyJhZGQiOiI0My4xNjIuMTA1LjMwIiwiYWlkIjoiMCIsImFscG4iOiIiLCJmcCI6IiIsImhvc3QiOiJ1czEtc3MuZmx5cGFydHMuY24iLCJpZCI6IjkxYTk4OGRjLTk5ZDUtNGMwZC1hOTk5LWExZDRkZDcyYWQyMSIsIm5ldCI6IndzIiwicGF0aCI6Ii8iLCJwb3J0IjoiMTAwMjIiLCJwcyI6IuCfh7rwn4e4IEJsaXp6RnVsVlBOIChVU0EpIiwic2N5IjoiYXV0byIsInNlcnZlcnBvcnQiOjAsInNraXAtY2VydC12ZXJpZnkiOnRydWUsInNuaSI6IiIsInRscyI6IiIsInR5cGUiOiJub25lIiwidiI6IjIifQ==",

    // США, Лос-Анджелес – Trojan
    "trojan://aNu0cX3WZjdEnH5G1BlZdA@216.105.168.58:443?security=none&type=ws&path=/&host=telegram.org&sni=telegram.org#🇺🇸 BlizzFulVPN (USA - Trojan)"
];

// Выводим конфиги каждый с новой строки
echo implode("\n", $configs);
?>