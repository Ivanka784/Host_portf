// Знаходимо елементи
const modal = document.getElementById("orderModal");
const closeBtn = document.querySelector(".close");
const buyBtns = document.querySelectorAll(".buy-btn");
const modalTitle = document.getElementById("modalTitle");
const orderForm = document.getElementById("orderForm");

// 1. Логіка відкриття вікна при кліку на "Замовити"
buyBtns.forEach(btn => {
    btn.addEventListener("click", function() {
        // Отримуємо назву тарифу з атрибута data-plan
        const planName = this.getAttribute("data-plan");
        // Змінюємо заголовок у вікні
        modalTitle.innerText = `Замовлення: ${planName}`;
        // Показуємо вікно (використовуємо flex, щоб центрувати)
        modal.style.display = "flex";
    });
});

// 2. Логіка закриття вікна (хрестик)
closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
});

// 3. Закриття, якщо клікнути повз вікно (на темний фон)
window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// 4. Імітація відправки форми
orderForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Зупиняємо перезавантаження сторінки
    
    const username = document.getElementById("username").value;
    
    // Імітація обробки даних
    alert(`Дякую, ${username}! Ваше замовлення прийнято. Ми надішлемо інструкції на ваш Email.`);
    
    // Закриваємо вікно і очищаємо форму
    modal.style.display = "none";
    orderForm.reset();
});
