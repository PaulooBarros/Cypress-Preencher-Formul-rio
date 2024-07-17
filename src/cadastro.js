document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const dataNascimento = document.getElementById('dataNascimento').value;
    const sexo = document.querySelector('input[name="sexo"]:checked').value;

    const mensagemSucesso = document.getElementById('mensagemSucesso');
    const mensagemErro = document.getElementById('mensagemErro');
    const tabela = document.getElementById('cadastros');
    const tbody = tabela.querySelector('tbody');

    if (nome && telefone && dataNascimento && sexo) {
        const novaLinha = document.createElement('tr');

        novaLinha.innerHTML = `
            <td>${nome}</td>
            <td>${telefone}</td>
            <td>${dataNascimento}</td>
            <td>${sexo}</td>
        `;

        tbody.appendChild(novaLinha);

        mensagemSucesso.textContent = 'Cadastro realizado com sucesso!';
        mensagemSucesso.classList.remove('hidden');
        mensagemErro.classList.add('hidden');
        tabela.classList.remove('hidden');

        document.getElementById('cadastroForm').reset();

        // Esconder mensagem de sucesso após 4 segundos
        setTimeout(function() {
            mensagemSucesso.classList.add('hidden');
        }, 3000);
    } else {
        mensagemErro.textContent = 'Erro ao realizar cadastro. Por favor, preencha todos os campos.';
        mensagemErro.classList.remove('hidden');
        mensagemSucesso.classList.add('hidden');
    }
});

function validateTelefone(input) {
    input.value = input.value.replace(/[^0-9]/g, '');
}

function validateData(input) {
    input.value = input.value.replace(/[^0-9-]/g, '');
}
