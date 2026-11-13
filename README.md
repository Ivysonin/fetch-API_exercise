# Fetch API Exercise

Projeto de estudo para praticar a integração entre frontend e backend utilizando JavaScript com `fetch()` para consumir uma API REST desenvolvida em Flask.

## Visão geral

Este projeto consiste em uma API simples de usuários, com armazenamento em memória, e uma interface frontend que faz requisições para os endpoints da API. O objetivo é aprender:

- criação de endpoints REST com Flask
- envio e recebimento de JSON
- consumo de APIs com `fetch()`
- manipulação dinâmica de dados no frontend
- integração entre backend e interface

## Tecnologias utilizadas

- Python
- Flask
- HTML
- CSS
- JavaScript
- Fetch API

## Estrutura do projeto

```text
fetch-API_exercise/
├── app/
│   ├── controllers/
│   ├── service/
│   ├── static/
│   │   └── js/
│   └── templates/
├── .gitignore
├── main.py
├── requirements.txt
└── README.md
```

## Como executar

1. Clone o projeto:
   ```bash
   git clone https://github.com/Ivysonin/fetch-API_exercise.git
   cd fetch-API_exercise
   ```

2. Crie e ative um ambiente virtual:
   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```

3. Instale as dependências:
   ```bash
   pip install -r requirements.txt
   ```

4. Inicie a aplicação:
   ```bash
   python3 main.py
   ```

5. Acesse no navegador:
   ```text
   http://127.0.0.1:5000/
   ```

## Endpoints da API

A API expõe rotas de gerenciamento de usuários.

### Listar usuários
- Método: `GET`
- Rota: `/user`

### Criar usuário
- Método: `POST`
- Rota: `/user`

Exemplo de body:
```json
{
  "nome": "Matheus",
  "idade": "46"
}
```

### Atualizar usuário
- Método: `PUT`
- Rota: `/user/<id>`

Exemplo de body:
```json
{
  "nome": "Matheus Silva",
  "idade": "47"
}
```

### Deletar usuário
- Método: `DELETE`
- Rota: `/user/<id>`

## Observações

- Os dados dos usuários são armazenados em memória, então são perdidos ao reiniciar a aplicação.
- Este projeto é voltado para fins educativos e prática de integração entre frontend e backend.
- A estrutura pode ser expandida com banco de dados, validações e autenticação.

## Licença

Este projeto é destinado apenas para fins educacionais.
