document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector(".form");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting and reloading the page

    const username = form.querySelector('input[name="username"]').value;
    const password = form.querySelector('input[name="password"]').value;

    // Simple login validation (you can replace this with actual backend validation)
    if (username === "admin" && password === "admin") {
      alert("Login successful! Redirecting...");
      // Redirect to another page (you can replace the URL with your actual app)
      window.location.href = "dashboard.html"; // Example: redirecting to dashboard.html
    } else {
      alert("Incorrect username or password. Please try again.");
    }
  });
});
