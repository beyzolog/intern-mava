document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Formun varsayılan gönderimini engelle

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Basit doğrulama
    if (!validateEmail(email)) {
        showMessage("Geçerli bir e-posta adresi girin!", "error");
        return;
    }

    if (email === "example@example.com" && password === "password123") {
        // Giriş başarılı
        showMessage("Giriş başarılı!", "success");
        // Kullanıcı bilgilerini yerel depolamaya kaydet
        localStorage.setItem('userEmail', email);
        showPopup("Hoş geldiniz!", "Giriş yaptığınız için teşekkür ederiz.");
    } else {
        // Giriş başarısız
        showMessage("E-posta veya şifre yanlış!", "error");
    }
});

// E-posta doğrulama fonksiyonu
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Mesaj gösterme fonksiyonu
function showMessage(msg, type) {
    const messageElement = document.getElementById('message');
    messageElement.innerText = msg;
    messageElement.className = type === "success" ? "success" : "error";
}

// Pop-up gösterme fonksiyonu
function showPopup(title, message) {
    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.innerHTML = `
        <h2>${title}</h2>
        <p>${message}</p>
        <button id="close-popup">Kapat</button>
    `;
    document.body.appendChild(popup);

    document.getElementById('close-popup').addEventListener('click', function() {
        document.body.removeChild(popup);
    });
}
