const form = document.querySelector("#form");
const emailInput = document.querySelector("#email");
const numConselho = document.querySelector("#numero_conselho");
const senhaInput = document.querySelector("#senha");
const confirmaSenha = document.querySelector("#confirmar_senha");

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if(emailInput.value === "") {
    alert("Por favor, preencha seu email");
    return;
  }

  if(emailInput.value === "" || !emailValido(emailInput.value)) {
    alert("Por favor, preencha um email válido. Ex.: usuário@host.com");
    return;
  }

  if(senhaInput.value === "") {
    alert("Por favor, preencha sua senha");
    return;
  }

  if(senhaInput.value === "" || !validaSenha(senhaInput.value)) {
    alert("A senha deve conter no mínimo 6 e 15 caracteres, contendo uma letra e um número");
    return;
  }

  if (senhaInput.value !== confirmaSenha.value) {
    alert("As senhas não condizem, por favor verificar e ajustar");
    return;
  }

  form.addEventListener('submit', (event) => {
    window.location.href = 'tela-login.html';
  });
});

function emailValido(email) {
  const emailRegex = new RegExp(
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
  );

  if(emailRegex.test(email)) {
    return true;
  } return false;
}

function validaSenha(password) {
  const senhaRegex = new RegExp(
    /^(?=.*[A-Za-z])(?=.*\d).{6,15}$/
  );

  if(senhaRegex.test(password)) {
    return true;
  } return false;
}



