// THE SWITCH (Light/Dark Toggle)
const themeBtn = document.getElementById('theme-toggle');
if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
}

// GREETING
const greet = document.getElementById('greeting');
if (greet) {
    const hr = new Date().getHours();
    greet.innerText = hr < 12 ? "Good Morning!" : hr < 18 ? "Good Afternoon!" : "Good Evening!";
    document.getElementById('today-date').innerText = new Date().toDateString();
}

// CART
let count = 0;
document.querySelectorAll('.add-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        count++;
        document.getElementById('cart-count').innerText = count;
    });
});

// FORM VALIDATION
const form = document.getElementById('contact-form');
if (form) {
    form.addEventListener('submit', (e) => {
        const mail = document.getElementById('email').value;
        if (!mail.includes('@')) {
            e.preventDefault();
            alert("Enter a valid email.");
        } else {
            alert("Data sent to the President!");
        }
    });
}