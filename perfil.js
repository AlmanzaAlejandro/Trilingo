function saveProfile() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Aquí puedes agregar la lógica para guardar los datos en el servidor o localmente
    alert("Perfil guardado con éxito");

    // Opcional: Guardar en localStorage para simulación
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
}

// Cargar los datos desde localStorage si están disponibles
document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem("username")) {
        document.getElementById("username").value = localStorage.getItem("username");
    }
    if (localStorage.getItem("email")) {
        document.getElementById("email").value = localStorage.getItem("email");
    }
    if (localStorage.getItem("password")) {
        document.getElementById("password").value = localStorage.getItem("password");
    }
});
