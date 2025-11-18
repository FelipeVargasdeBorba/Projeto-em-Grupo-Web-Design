const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const esqueciForm = document.getElementById("esqueciForm");
const alterarForm = document.getElementById("alterarForm");
const modalTitle = document.getElementById("modalTitle");

const btnShowRegister = document.getElementById("showRegister");
const btnShowEsqueci = document.getElementById("showEsqueci");
const btnShowAlterar = document.getElementById("showAlterar");

const btnBack1 = document.getElementById("backToLogin1");
const btnBack2 = document.getElementById("backToLogin2");
const btnBack3 = document.getElementById("backToLogin3");


btnShowRegister.addEventListener("click", () => {
    showForm(registerForm, "Criar Conta");
});


btnShowEsqueci.addEventListener("click", () => {
    showForm(esqueciForm, "Esqueci minha senha");
});


btnShowAlterar.addEventListener("click", (e) => {
    e.preventDefault();
    showForm(alterarForm, "Alterar Senha");
});


btnBack1.addEventListener("click", backToLogin);
btnBack2.addEventListener("click", backToLogin);
btnBack3.addEventListener("click", backToLogin);

function showForm(formToShow, title) {
    loginForm.classList.add("d-none");
    registerForm.classList.add("d-none");
    esqueciForm.classList.add("d-none");
    alterarForm.classList.add("d-none");

    formToShow.classList.remove("d-none");
    modalTitle.innerText = title;
}

function backToLogin(e) {
    e.preventDefault();
    showForm(loginForm, "Entrar na Conta");
}