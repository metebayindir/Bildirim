// Komik bildirim mesajları
const funnyMessages = [
    "Bir kedi seni izliyor, dikkat et!",
    "Yılın en iyi insanı ödülü... yine sana gitmedi!",
    "Kahve zamanı! Ama fincanın nerede?",
    "Telefonun da yoruldu, bir ara şarj et!",
    "Sence de bu kadar bildirim yeterli değil mi?",
    "Hayat kısa, tatlı ye! Ama şimdi değil.",
    "Başka bir bildirim daha... Sürpriz!",
    "Bize katıl: Bildirim bağımlıları derneği!"
];

// HTML elemanları
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");

let notificationInterval;

// Bildirim gönderme işlevi
function sendFunnyNotification() {
    const randomIndex = Math.floor(Math.random() * funnyMessages.length);
    const message = funnyMessages[randomIndex];

    // Tarayıcı bildirimi gönder
    if (Notification.permission === "granted") {
        new Notification("Komik Bildirim!", {
            body: message,
            icon: "https://via.placeholder.com/100x100?text=😂" // İsteğe bağlı simge
        });
    }
}

// Kullanıcıdan izin iste
function requestNotificationPermission() {
    if (Notification.permission !== "granted") {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                alert("Bildirimler aktif edildi!");
            } else {
                alert("Bildirim izni verilmedi.");
            }
        });
    }
}

// Başlat düğmesine tıklanınca
startBtn.addEventListener("click", () => {
    requestNotificationPermission();
    notificationInterval = setInterval(sendFunnyNotification, 10000); // 10 saniyede bir
    startBtn.style.display = "none";
    stopBtn.style.display = "inline-block";
});

// Durdur düğmesine tıklanınca
stopBtn.addEventListener("click", () => {
    clearInterval(notificationInterval);
    alert("Bildirimler durduruldu.");
    stopBtn.style.display = "none";
    startBtn.style.display = "inline-block";
});
