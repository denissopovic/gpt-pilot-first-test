document.addEventListener('DOMContentLoaded', function () {
  // Function to apply Bootstrap validation classes
  function setValidationClass(element, isValid) {
    if (isValid) {
      element.classList.remove('is-invalid');
      element.classList.add('is-valid');
    } else {
      element.classList.remove('is-valid');
      element.classList.add('is-invalid');
    }
  }

  const registerForm = document.getElementById('registerForm');
  registerForm.addEventListener('submit', function (event) {
    if (!registerForm.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
    registerForm.classList.add('was-validated');
  }, false);

  const loginForm = document.getElementById('loginForm');
  loginForm.addEventListener('submit', function (event) {
    if (!loginForm.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
    loginForm.classList.add('was-validated');
  }, false);

  const password = document.getElementById('password');
  password.addEventListener('input', function (event) {
    const isValid = password.value.length >= 8;
    setValidationClass(password, isValid);
    password.setCustomValidity(isValid ? '' : 'Password must be at least 8 characters long');
  });

  const email = document.getElementById('email');
  email.addEventListener('input', function (event) {
    const isValidEmail = email.checkValidity();
    setValidationClass(email, isValidEmail);
  });
}, false);

