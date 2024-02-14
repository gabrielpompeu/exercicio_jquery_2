const form = document.getElementById("form");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const cpf = document.getElementById("cpf");
const endereco = document.getElementById("endereco");
const cep = document.getElementById("cep");

//Plugin para mascarar alguns campos corretamente
$(document).ready(function () {
  $("#telefone").mask("(00) 0000-0000");
  $("#cpf").mask("000.000.000-00");
  $("#cep").mask("00000-000");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const nomeValue = nome.value;
  const emailValue = email.value;
  const telefoneValue = telefone.value;
  const cpfValue = cpf.value;
  const enderecoValue = endereco.value;
  const cepValue = cep.value;

  if (nomeValue === "") {
    setErrorFor(nome, "O nome completo é obrigatório.");
  } else {
    setSuccessFor(nome);
  }

  if (emailValue === "") {
    setErrorFor(email, "O e-mail é obrigatório.");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Por favor, insira um e-mail válido.");
  } else {
    setSuccessFor(email);
  }

  if (telefoneValue === "") {
    setErrorFor(telefone, "O telefone é obrigatório.");
  } else if (telefoneValue.length < 10) {
    setErrorFor(telefone, "O telefone precisa ter pelo menos 10 caracteres.");
  } else {
    setSuccessFor(telefone);
  }

  if (cpfValue === "") {
    setErrorFor(cpf, "O CPF é obrigatório.");
  } else if (cpfValue.length < 11) {
    setErrorFor(cpf, "O CPF precisa ter 11 caracteres.");
  } else {
    setSuccessFor(cpf);
  }

  if (cepValue === "") {
    setErrorFor(cep, "O CEP é obrigatório.");
  } else if (cepValue.length < 8) {
    setErrorFor(cep, "O CEP precisa ter 8 caracteres.");
  } else {
    setSuccessFor(cep);
  }

  if (enderecoValue === "") {
    setErrorFor(endereco, "O endereço é obrigatório.");
  } else {
    setSuccessFor(endereco);
  }


  const formControls = form.querySelectorAll(".form-control");

  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
  });

  if (formIsValid) {
    console.log("O formulário está 100% válido!");
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");


  small.innerText = message;


  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;


  formControl.className = "form-control success";
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}