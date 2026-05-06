// ТВОЙ ГОТОВЫЙ DEEP LINK
const HAPP_LINK = "happ://crypt5/neirR83MgXnJP8Xz8v20zkAMhiYb2PFVpRrdVpW6SEpQguyWe4HAs2feAGlTKVrVKsnHKrKzopWVxXKsOTMeqHTBQ5xaOW5QUgIpOZJrpIpRv8xUuXuZcDAjDgPE89Y4fhKAFBZXPOBoaY4jt3eJUM14CATEr+PqBYLjaikYAZCLcvc7zgmpWvLEXWtmCqqiGg/pwxUxxsXABwfl6ezUxyBoyIi5w3/9SFb9Rykr3iG7aYrSc4PJBHpxuku+X0Tq85AAlTNgeJz+cWidZ9QPlohPM0m1mZHU01CKxrEswpPDSttBlEosGfh04C61OUSD3lMpj9Vm7e6q0QqdYAPD6rdSN63rFcyVtle70vOdJ7kyLYczgUr7HbWCmZ3UzoEGsxDhOgJ3pjDowR6pF9MnaEmRaUYsMbsPbyA2M5vNCHRaD0ylnRduqtiYt2irB+fA+IPXVUyCywkcGPCzkkpOGWpBqiQt0hS2O6+u8pWnkjJVNwdPIZwgq8+dFTAXY51dGhYAvN98XlyIZlLhjISapAYb9XGtwkhgGEtlF4J1Qf5fmRCTxZu38amJ/jjpidJShPfdOAyjvqfaR7CvqgWPJ21jAWDQV7gZjJiET5D9BFSSKDFR6oGDNBIF9Q75u5uHqao3A2fuhTO0egh3VMntwcK6XhYX17j83uwskISjfpRtBjSOYr7XAZrQqIw14yTAuBtep7kJ7amRA0ZiJfe/H4DfHOW7E06Fvnske7qf1vGR5uw2jBXaJIjzEj67jyFJ/PhB4KrDlZze9m1648IGaGf4BMAqplbds2pklRhAucVh/poSCoySjYKzDshfYHqdFzIiMKELT5/5dBezkZm4SYszGecNWdzyGoJ+Ps1P5WaI8TS2S8C28b+XC2TZ8TCzBp4uFSmtSD8MY=saftjv";

const connect = document.getElementById("connect");
const copy = document.getElementById("copy");
const toast = document.getElementById("toast");

// Toast
function show(text){
    toast.innerText = text;
    toast.style.display = "block";
    setTimeout(()=>toast.style.display="none",2000);
}

// 🚀 Подключение
connect.onclick = () => {
    window.location.href = HAPP_LINK;
};

// 📋 Копирование
copy.onclick = async () => {
    try {
        await navigator.clipboard.writeText(HAPP_LINK);
        show("Ссылка скопирована");
    } catch {
        show("Ошибка копирования");
    }
};