

const mode = document.getElementById('mode_icon');

mode.addEventListener('click', () => {
    const form = document.getElementById('login_form');

    if(mode.classList.contains('fa-moon')) {
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');

        form.classList.add('dark');
        return ;
    }
    
    mode.classList.remove('fa-sun');
    mode.classList.add('fa-moon');

    form.classList.remove('dark');
});

function onChangeEmail() {
   const email = form.email().value;

   form.emailRequiredError().style.display = email ? "none" : "block";
   form.emailInvalidError().style.display = validateEmail(email) ? "none" : "block";

   toggleRegisterButtonDisabled();
}

function onChangePassword (){
    const password = form.password().value;
    form.passwordRequiredError().style.display = password ? "none" : "block";

    form.passwordMinLengthError().style.display = password.length >=6 ? "none" : "block";

    validatePasswordsMatch();

    toggleRegisterButtonDisabled();
}

function onChangeConfirmPassword () {
     validatePasswordsMatch();
     toggleRegisterButtonDisabled();
}

function validatePasswordsMatch() {
    const password = form.password().value;
     const confirmPassword = form.confirmPassword().value;

     form.confirmPasswordDoesntMatchError().style.display = password == confirmPassword ? "none" : "block";
}

function toggleRegisterButtonDisabled() {
    form.registerButton().disabled = !isFormValid();
}

function isFormValid() {
    const email = form.email().value;
    if(!email || !validateEmail(email)) {
        return false;
    }

    const password = form.password().value;
    if(!password || password.length < 6) {
        return false;
    }

    const confirmPassword = form.confirmPassword().value;
    if(password != confirmPassword) {
        return false;
    }
    return true;
}

function register() {
    const email = form.email().value;
    const password = form.password().value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
        window.location.href = "../view/tela_inicio.html";
    }).catch(error => {
        alert(getErrorMessage(error));
    });
    
}

function getErrorMessage(error) {
    if (error.code === 'auth/email-already-in-use') {
        return "Email já existe";
    }
    return error.message;
}

const form = {
    confirmPassword: () => document.getElementById("confirmPassword"),
    confirmPasswordDoesntMatchError: () => document.getElementById("password-doesnt-match-error"),
    email: () => document.getElementById("email"),
    password: () => document.getElementById("password"),
    emailInvalidError: () => document.getElementById("email-invalid-error"),
    emailRequiredError: () => document.getElementById("email-required-error"),
    passwordRequiredError: () => document.getElementById("password-required-error"),
    passwordMinLengthError: () => document.getElementById("password-min-length-error"),
    registerButton: () => document.getElementById("register_button")
    
}
function toggleSenha() {
    const senhaInput = document.getElementById('password');
    const toggleIcon = document.getElementById('toggle-password');

    if (senhaInput.type === 'password') {
        senhaInput.type = 'text';
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
    } else {
        senhaInput.type = 'password';
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');
    }
}
function toggleSenha(inputId, toggleId) {
    const senhaInput = document.getElementById(inputId);
    const toggleIcon = document.getElementById(toggleId);

    if (senhaInput.type === 'password') {
        senhaInput.type = 'text';
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
    } else {
        senhaInput.type = 'password';
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');
    }
}
