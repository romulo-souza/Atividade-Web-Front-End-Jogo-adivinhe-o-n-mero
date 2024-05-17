const menu = document.getElementById("menu");
const jogo = document.getElementById("jogo");
const iniciarJogoBtn = document.getElementById("iniciar-jogo");
const input = document.getElementById("input");
const adivinharBtn = document.getElementById("adivinhar");
const mensagem = document.getElementById("mensagem");
const dica = document.getElementById("dica");
const texto_pontuacao = document.getElementById("pontuacao");

let numeroAleatorio;
let tentativas;
let pontuacao;

//Funções

function gerarNumAleatorio(){ //de 1 a 50
    return Math.floor(Math.random() * 50) + 1;
}

function atualizarJogo(){
    numeroAleatorio = gerarNumAleatorio();
    tentativas = 0;
    input.value = "";
    input.disabled = false;
    adivinharBtn.disabled = false;
    dica.textContent = "";
    mensagem.textContent = ""; 
}

function verificarTentativa(){
    const tentativa = parseInt(input.value)
    tentativas++;

    if(tentativa === numeroAleatorio){
        mensagem.textContent = `Parabéns! Você adivinhou o número ${numeroAleatorio} em ${tentativas} tentativas.`;
        mensagem.style.color = "green";
        dica.textContent="";
        input.disabled = true;
        adivinharBtn.disabled = true;
        pontuacao += 15;
        texto_pontuacao.textContent = `Pontuação: ${pontuacao}`;
        setTimeout(() => {
            atualizarJogo();
        }, 3000);
    }
    else if(tentativa < numeroAleatorio){
        dica.textContent = "Dica: Tente um número maior.";
        mensagem.textContent = "Você não adivinhou o número! Tente novamente.";
        mensagem.style.color = "red";
        pontuacao -= 1;
        texto_pontuacao.textContent = `Pontuação: ${pontuacao}`;
    }
    else if(tentativa > numeroAleatorio){
        dica.textContent = "Dica: Tente um número menor.";
        mensagem.textContent = "Você não adivinhou o número! Tente novamente.";
        mensagem.style.color = "red";
        pontuacao -= 1;
        texto_pontuacao.textContent = `Pontuação: ${pontuacao}`;
    }
}

//Eventos

iniciarJogoBtn.addEventListener("click", () => {
    menu.style.display = "none";
    jogo.style.display = "block";
    tentativas = 0;
    pontuacao = 0;
    numeroAleatorio = gerarNumAleatorio();
})

adivinharBtn.addEventListener("click", () => {
    verificarTentativa();
})

