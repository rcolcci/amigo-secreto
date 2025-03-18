let amigos = [];

function limparCampo() {
    document.querySelector('input').value = '';
}

function escreverTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function adicionarAmigo() {
    let nomeAmigo = document.querySelector('input').value.trim();
    if (nomeAmigo === '') {
        alert('Digite o nome de seu amigo no campo indicado.');
        return;
    }
    amigos.push(nomeAmigo);
    exibirAmigos();
    limparCampo();
}

function exibirAmigos() {
    let listaAmigos = amigos.map(amigo => `<li>${amigo}</li>`).join('');
    escreverTela('ul', listaAmigos);
}

function removerAmigos() {
    amigos = [];
    exibirAmigos();
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('A lista está vazia! Adicione amigos antes de sortear.');
        return;
    }
    let numeroSorteado = Math.floor(Math.random() * amigos.length);
    document.getElementById('resultado').innerHTML = `O ESCOLHIDO FOI: ${amigos[numeroSorteado]}`;
}
