var usuarios = window.prompt('Qual é o seu nome?');

function trocarNome() {
    document.getElementById('usuario').innerHTML = usuarios;
}

window.onload = trocarNome;