document.getElementById("checkButton").addEventListener("click", async function () {
    const username = document.getElementById("username").value.trim();
    const resultDiv = document.getElementById("result");

    if (!username) {
        resultDiv.textContent = "Lütfen bir kullanıcı adı girin.";
        return;
    }

    resultDiv.textContent = "Kontrol ediliyor...";

    const status = await checkInstagram(username);
    resultDiv.textContent = status;
});

async function checkInstagram(username) {
    const url = `https://www.instagram.com/${username}/`;

    try {
        const response = await fetch(url, { method: "HEAD" });
        if (response.status === 404) {
            return `@${username} boşta.`;
        } else if (response.ok) {
            return `@${username} dolu.`;
        } else {
            return "Beklenmeyen bir hata oluştu.";
        }
    } catch (error) {
        return "Bir hata oluştu. Lütfen tekrar deneyin.";
    }
}