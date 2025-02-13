document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que la página se recargue

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Simulación de credenciales correctas
    let validUser = "admin@example.com";
    let validPass = "1234";

    if (username === validUser && password === validPass) {
        alert("Login successful 🎉");
        window.location.href = "dashboard.html"; // Redirigir a otra página
    } else {
        alert("Incorrect email or password.");
    }
});

