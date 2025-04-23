const url = "https://jsonplaceholder.typicode.com/posts"
const r = document.getElementById('result')

// Função para apresentar os dados no Front
function display(data) {
    r.textContent = JSON.stringify(data, null, 2)
}

// Função para pegar Posts
function fetchPosts() {
    fetch(`${url}`)
        .then(response => response.json())
        .then(data => display(data))
}

// Função para pegar Post específico
function fetchPostById() {
    const idInput = document.getElementById('postInput').value
    fetch(`${url}/${idInput}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Post não encontrado!')
            }
            return response.json()
        })
        .then(data => display(data))
}

// Função para Postar item
function postItem() {
    const post = {
        title: 'Novo Post',
        body: 'Conteúdo do novo post',
        userId: 1
    }
    fetch(`${url}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(post)
    })
        .then(response => response.json())
        .then(data => display(data))
}

// Função para atualizar o Post 1
function putPostId1() {
    const post = {
        title: 'Post Atualizado',
        body: 'Conteúdo atualizado com sucesso',
        userId: 1
    }
    fetch(`${url}/1`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(post)
    })
        .then(response => response.json())
        .then(data => display(data))
}

// Função para deletar o Post 1
function deletePostId1() {
    fetch(`${url}/1`, {
        method: 'DELETE',
    })
        .then(() => display({message: 'Post deletado com sucesso'}))
}