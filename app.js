//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigosX = [];


function adicionarAmigo() {
    if (document.getElementById("amigo").value === "") {
        alert("Por favor, insira o nome do amigo.");}
    else {
        amigosX.push(document.getElementById("amigo").value);
        let novoItemLista = document.createElement("li");
        novoItemLista.textContent = document.getElementById("amigo").value;
        document.getElementById("listaAmigos").appendChild(novoItemLista);
    }
}

function sortearAmigo() {
    if (amigosX.length === 0) {
        alert("Nenhum amigo adicionado para sortear.");
    } else {
        let indiceSorteado = Math.floor(Math.random() * amigosX.length);
        console.log(indiceSorteado);
        let amigoSorteado = amigosX[indiceSorteado];
        document.getElementById("resultado").textContent = "O amigo sorteado foi: " + amigoSorteado;
    }
}

function reiniciarSorteio() {
    amigosX = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").textContent = "";
}
