function showMessage() {
  alert("Welcome! JavaScript is working.");
}

// Dark and light mode
document.getElementById("themeBtn").addEventListener("click", function () {
  document.body.classList.toggle("dark");

  this.textContent = document.body.classList.contains("dark")
    ? "☀️ Light Mode"
    : "🌙 Dark Mode";
});

// Mobile navigation
document.getElementById("menuBtn").addEventListener("click", function () {
  document.getElementById("navLinks").classList.toggle("show");
});

// Contact form validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    document.getElementById("status").textContent =
      "Please fill in all fields.";
    return;
  }

  document.getElementById("status").textContent =
    "Thank you, " + name + "! Your form is validated.";

  this.reset();
});