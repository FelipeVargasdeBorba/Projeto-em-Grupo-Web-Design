// Pega o formulários pelo ID --------

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const esqueciForm = document.getElementById("esqueciForm");
const alterarForm = document.getElementById("alterarForm");
const modalTitle = document.getElementById("modalTitle");

// pega os botões pelo ID ----- 

const btnShowRegister = document.getElementById("showRegister");
const btnShowEsqueci = document.getElementById("showEsqueci");
const btnShowAlterar = document.getElementById("showAlterar");

// pega os botões de voltar pelo ID ---------

const btnBack1 = document.getElementById("backToLogin1");
const btnBack2 = document.getElementById("backToLogin2");
const btnBack3 = document.getElementById("backToLogin3");

// quando clicar no botão de registrar → mostra o formulário de registro

btnShowRegister.addEventListener("click", () => {
    showForm(registerForm, "Criar Conta");
});

// quando clicar no botão de esqueci minha senha → mostra o formulário de esqueci minha senha

btnShowEsqueci.addEventListener("click", () => {
    showForm(esqueciForm, "Esqueci minha senha");
});


// quando clicar em "alterar senha" → previne o envio do form e troca o formulário


btnShowAlterar.addEventListener("click", (e) => {
    e.preventDefault(); // evita comportamento padrão (enviar o formulário, recarregar a página, etc.)
    showForm(alterarForm, "Alterar Senha");
});

 // os três botões de voltar para o login → chamam a mesma função

btnBack1.addEventListener("click", backToLogin);
btnBack2.addEventListener("click", backToLogin);
btnBack3.addEventListener("click", backToLogin);

// função para mostrar o formulário desejado e esconder os outros

function showForm(formToShow, title) {
    loginForm.classList.add("d-none");
    registerForm.classList.add("d-none");
    esqueciForm.classList.add("d-none");
    alterarForm.classList.add("d-none");

    formToShow.classList.remove("d-none");  // mostra apenas o formulário selecionado
    modalTitle.innerText = title; // troca o título do modal
}

// função que volta para o formulário de login

function backToLogin(e) {
    e.preventDefault();  // evita comportamento padrão (enviar o formulário, recarregar a página, etc.)
    showForm(loginForm, "Entrar na Conta"); // volta para login
}