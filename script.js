const email = document.getElementById('email');
const senha = document.getElementById('password');
const botaoLogin = document.getElementById('entrar');
const botaoSubmit = document.getElementById('submit-btn');
const checkInfo = document.getElementById('agreement');
const textArea = document.getElementById('textarea');
const contador = document.getElementById('counter');
// const formulario = document.getElementById('evaluation-form');
// const nomeFeito = document.getElementById('nome');
// const emailFeito = document.getElementById('email');
// const casaEscolhida = document.getElementById('casaEscolhida');
// const familiaEscolhida = document.getElementById('familiaEscolhida');
// const materiaSelecionadas = document.getElementById('materiaSelecionadas');
// const avaliacaoFeita = document.getElementById('avaliacaoFeita');
// const observacoes = document.getElementById('observacoes');
// const nomeEscrito = document.getElementById('input-name').value;
// const sobrenomeEscrito = document.getElementById('input-name').value;
// const sobrenomeEscrito = document.getElementById('input-name').value;

botaoLogin.addEventListener('click', (event) => {
  event.preventDefault();
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

checkInfo.addEventListener('click', () => {
  if (checkInfo.checked === true) {
    botaoSubmit.removeAttribute('disabled');
  } else {
    botaoSubmit.setAttribute('disabled', true);
  }
});

contador.value = 500;
contador.innerText = contador.value;
textArea.addEventListener('input', () => {
  const resultado = contador.value - textArea.value.length;
  contador.innerText = resultado;
});

// botaoSubmit.addEventListener('click', (e) => {
//   e.preventDefault();
//   formulario.style.display = 'none';
//   nomeFeito.innerHTML =

// });

// const nomeFeito = document.getElementById('nome');
// const emailFeito = document.getElementById('email');
// const casaEscolhida = document.getElementById('casaEscolhida');
// const familiaEscolhida = document.getElementById('familiaEscolhida');
// const materiaSelecionadas = document.getElementById('materiaSelecionadas');
// const avaliacaoFeita = document.getElementById('avaliacaoFeita');
// const observacoes = document.getElementById('observacoes');
