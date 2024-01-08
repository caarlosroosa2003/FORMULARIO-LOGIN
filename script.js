function validateUsername() {
    let username = document.getElementById("username").value;
    let usernameError = document.getElementById("usernameError");

    if (!/^[a-zA-Z\s]+$/.test(username)) {
        usernameError.innerText = "El usuario solo puede contener letras y espacios.";
        usernameError.style.display = "block";
    } else {
        usernameError.style.display = "none";
    }
}

function validatePassword() {
    let password = document.getElementById("password").value;
    let passwordError = document.getElementById("passwordError");

    if (password.length < 6) {
        passwordError.innerText = "La contraseña debe tener al menos 6 caracteres.";
        passwordError.style.display = "block";
    } else {
        passwordError.style.display = "none";
    }
}

function validateTerms() {
    let acceptTermsCheckbox = document.getElementById("acceptTerms");
    let termsError = document.getElementById("termsError");

    if (!acceptTermsCheckbox.checked) {
        termsError.textContent = "Debes aceptar los términos y condiciones.";
    } else {
        termsError.textContent = "";
    }
}