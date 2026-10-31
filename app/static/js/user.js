const API_URL = 'http://127.0.0.1:5000/user';

const botao_carregar = document.getElementById('carregar-user');
const usuarios = document.getElementById('usuarios');
const form_user = document.getElementById('form_user');
const nome_form = document.getElementById('nome-form');
const idade_form = document.getElementById('idade-form');


async function carregarUsuarios() {
    try {
        const response = await fetch(API_URL);
        
        if (!response.ok) {
            throw new Error('Erro na requisição');
        }
        
        const dados = await response.json();
        usuarios.innerText = ''

        for (let i of dados['usuario']) {
            usuarios.innerText += `
                Nome: ${i.nome}
                Idade: ${i.idade}
            `}

    } catch (erro) {
        console.error('Erro:', erro);
    }
};


async function cadastrarUsuario(event) {
    event.preventDefault();

    const response = await fetch(API_URL,
        {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                nome: nome_form.value,
                idade: idade_form.value
            })
        }
    );

    if (!response.ok) {
        throw new Error('Erro ao cadastrar usuário');
    }

    alert('USUÁRIO CRIADO COM SUCESSO');
    form_user.reset();
    await carregarUsuarios();
};

form_user.addEventListener('submit', cadastrarUsuario);
botao_carregar.addEventListener('click', carregarUsuarios);