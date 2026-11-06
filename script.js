
// MOBILE NAVIGATION
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }
});

// CLOSE MENU WHEN LINK IS CLICKED
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuToggle.textContent = "☰";
    });
});

// DARK AND LIGHT MODE
const themeToggle = document.getElementById("themeToggle");

// LOAD SAVED THEME
if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
    themeToggle.textContent = "🌙";
}

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeToggle.textContent = "🌙";
        localStorage.setItem("theme", "light");
    } else {
        themeToggle.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    }
});

// CONTACT FORM VALIDATION
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "Please complete all fields!";
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        formMessage.textContent =
            "Please enter a valid email address!";
        return;
    }

    formMessage.textContent =
        "Thank you, " + name + "! Your form is valid.";

    contactForm.reset();
});
