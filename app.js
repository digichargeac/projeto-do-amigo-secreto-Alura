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



