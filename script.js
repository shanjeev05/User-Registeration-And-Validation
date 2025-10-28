document.getElementById("registrationForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Input values
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    // Error elements
    const usernameError = document.getElementById("usernameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");
    const successMessage = document.getElementById("successMessage");

    // Reset messages
    usernameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";
    successMessage.textContent = "";

    let valid = true;

    // Username validation
    if (username === "") {
        usernameError.textContent = "Username is required";
        valid = false;
    } else if (username.length < 3) {
        usernameError.textContent = "Username must be at least 3 characters";
        valid = false;
    }

    // Email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === "") {
        emailError.textContent = "Email is required";
        valid = false;
    } else if (!email.match(emailPattern)) {
        emailError.textContent = "Enter a valid email";
        valid = false;
    }

    // Password validation
    if (password === "") {
        passwordError.textContent = "Password is required";
        valid = false;
    } else if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters";
        valid = false;
    }

    // Confirm password validation
    if (confirmPassword === "") {
        confirmPasswordError.textContent = "Please confirm your password";
        valid = false;
    } else if (password !== confirmPassword) {
        confirmPasswordError.textContent = "Passwords do not match";
        valid = false;
    }

    // Success message
    if (valid) {
        successMessage.textContent = "Registration successful!";
        document.getElementById("registrationForm").reset();
    }
});
