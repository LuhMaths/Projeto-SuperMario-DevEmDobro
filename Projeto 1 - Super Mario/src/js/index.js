/* 
Obj 1: Quando clicar no botão, o usuário precisa ver o trailer, abrindo a modal
    Passo 1: dar um jeito de pegar o elemento que representa o botão na tela usando js.
    Passo 2: identificar quando o usuário clica no botão.
    Passo 3: pegar o elemento da modal no js
    Passo 4: abrir a modal na tela

Obj 2: quando o usuário clicar no x fecha a modal
    Passo 1: pegar o elemento de fechar modal usando js.
    Passo 2: identificar quando o usuário clica no x
    Passo 3: fechar a modal

*/

const botaoTrailer = document.querySelector('.botao-trailer');
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", ()=> {
    //Passo 4: abrir a modal na tela
    alternarModal();
    video.setAttribute("src", linkDoVideo);
});

botaoFecharModal.addEventListener("click", () => {
    //Passo 3: fechar a modal
    alternarModal();
    video.setAttribute("src", "");
});
