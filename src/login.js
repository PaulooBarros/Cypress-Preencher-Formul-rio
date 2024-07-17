document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginMensagem = document.getElementById('loginMensagem');

    // Simulação de verificação de login
    if (username === 'admin' && password === '1234') {
        window.location.href = 'cadastro.html';
    } else {
        loginMensagem.textContent = 'Usuário ou senha incorretos';
        loginMensagem.classList.remove('hidden');
        loginMensagem.classList.add('error');
    }
});
