const email = document.getElementById('email');
const senha = document.getElementById('password');
const botaoLogin = document.getElementById('entrar');

botaoLogin.addEventListener('click', (event) => {
  event.preventDefault();
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});
