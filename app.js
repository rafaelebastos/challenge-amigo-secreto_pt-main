let nomes = [];

function adicionarAmigo() {
    let nomeInput = document.getElementById("amigo");
    let nome = nomeInput.value.trim();

    if (nome == "") {
        alert("Insira um nome válido");
        return;
    }

    nomes.push(nome);
    atualizarLista();
    nomeInput.value = "";
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    nomes.forEach(nome => {
        let li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (nomes.length == 0) {
        alert("A lista está vazia! Adicione nomes antes de sortear.");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * nomes.length);
    let nomeSorteado = nomes[indiceSorteado];

    document.getElementById("resultado").innerHTML = `<li>Amigo Sorteado: ${nomeSorteado}</li>`;
    document.getElementById("resultado").innerHTML = `<li>Amigo Sorteado: ${nomeSorteado}</li>`;
}
