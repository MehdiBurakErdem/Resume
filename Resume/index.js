let isEmail = true;

document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("toggleMethod");
    const contactDiv = document.getElementById("contactInput");
    const slider = document.getElementById("sliderCircle").parentElement;

    toggle.addEventListener("click", function () {
        slider.classList.toggle("active");
        contactDiv.innerHTML = "";

        if (isEmail) {
            contactDiv.innerHTML = `
                <label for="phone"><b>Telefon:</b></label>
                <input type="tel" id="phone" name="phone" placeholder="5XXXXXXXXX" pattern="5[0-9]{9}" required>
            `;
        } else {
            contactDiv.innerHTML = `
                <label for="email"><b>E-posta:</b></label>
                <input type="email" id="email" name="email" placeholder="example@gmail.com" required>
            `;
        }
        isEmail = !isEmail;
    });

    document.getElementById("contactForm").addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const message = document.getElementById("message").value.trim();
        const contactInput = isEmail ? document.getElementById("email") : document.getElementById("phone");
        const contactValue = contactInput.value.trim();

        if (!name || !message || !contactValue) {
            alert("Lütfen tüm alanları doldurun.");
            return;
        }

        if (!isEmail) {
            const telRegex = /^5[0-9]{9}$/;
            if (!telRegex.test(contactValue)) {
                alert("Telefon numarası 5 ile başlamalı ve 10 haneli olmalıdır.");
                return;
            }
        }

        document.getElementById("formResult").innerHTML =
        "✅ Başarıyla gönderildi!<br>Demek isterdim ancak: Bu form örnek amaçlıdır.<br>Şu anda yerel (localhost) ortamda test edildiği için mail gönderimi yapılmamaktadır.";
              this.reset();
    });

    document.getElementById("resetButton").addEventListener("click", function () {
        document.getElementById("contactForm").reset();
    
        // input alanı tekrar e-posta olacak şekilde sıfırlanır
        if (!isEmail) {
            document.getElementById("toggleMethod").click(); // geri e-posta moduna döner
        }
    
        document.getElementById("formResult").innerHTML = "";
    });
    
});
