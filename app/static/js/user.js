const API_URL = 'http://127.0.0.1:5000/user';

const botao_carregar = document.getElementById('carregar-user');
const listar_usuarios = document.getElementById('listar-usuarios');

const form_post = document.getElementById('form-post');
const nome_post = document.getElementById('nome-post');
const idade_post = document.getElementById('idade-post');

const form_put = document.getElementById('form-put');
const id_put = document.getElementById('id-put');
const nome_put = document.getElementById('nome-put');
const idade_put = document.getElementById('idade-put');

const form_delete = document.getElementById('form-delete');
const id_delete = document.getElementById('id-delete');


async function carregarUsuarios() {
    try {
        const response = await fetch(API_URL);
        
        if (!response.ok) {
            throw new Error('Erro na requisição');
        }
        
        const dados = await response.json();
        listar_usuarios.innerText = ''

        for (let i of dados['usuario']) {
            listar_usuarios.innerText += `
                ID: ${i.id}
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
                nome: nome_post.value,
                idade: idade_post.value
            })
        }
    );

    if (!response.ok) {
        throw new Error('Erro ao cadastrar usuário');
    }

    alert('USUÁRIO CRIADO COM SUCESSO');
    form_post.reset();
    await carregarUsuarios();
};


async function atualizarUsuario(event) {
    event.preventDefault();

    const response = await fetch(`${API_URL}/${parseInt(id_put.value)}`,
        {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                nome: nome_put.value,
                idade: idade_put.value
            })
        }
    );

    if (!response.ok) {
        throw new Error('Erro ao atualizar usuário');
    }

    alert('USUÁRIO ATUALIZADO COM SUCESSO');
    form_put.reset();
    await carregarUsuarios();
};


async function deletarUsuario(event) {
    event.preventDefault();

    const response = await fetch(`${API_URL}/${parseInt(id_delete.value)}`,
        {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        }
    );

    if (!response.ok) {
        throw new Error('Erro ao deletar usuário');
    }

    alert('USUÁRIO DELETADO COM SUCESSO');
    form_delete.reset();
    await carregarUsuarios();
};


form_post.addEventListener('submit', cadastrarUsuario);
form_put.addEventListener('submit', atualizarUsuario);
form_delete.addEventListener('submit', deletarUsuario);
botao_carregar.addEventListener('click', carregarUsuarios);