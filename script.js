function adicionarNota() {
    const notaInput = document.querySelector('#notaInput');
    const notaTexto = notaInput.value.trim();

    if (notaTexto) {
        const listaNotas = document.querySelector('#listaNotas');

        const notaItem = document.createElement('li');
        notaItem.className = 'nota-item';

        notaItem.innerHTML = `
            <span>${notaTexto}</span>
            <button onclick="excluirNota(this)">Excluir</button>
        `;

        listaNotas.appendChild(notaItem);
        notaInput.value = '';
    } else {
        alert("Digite uma nota antes de adicionar.");
    }
}

function excluirNota(elemento) {
    elemento.parentElement.remove();
}
