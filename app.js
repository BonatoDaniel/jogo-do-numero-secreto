let listaDeNumerosSorteados = [];
let numeroLimite = 10;

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * 10 + 1);
    let quantidadeDeNumerosNaLista = listaDeNumerosSorteados.length;
    if (quantidadeDeNumerosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function mostrarTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.11});
}

function exibirMensagemInicial() {
    mostrarTextoNaTela('h1', 'Jogo do Número Secreto');
    mostrarTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function verificarChute() {
    chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        mostrarTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        mostrarTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        tentativas++;
        if (chute < numeroSecreto) {
            mostrarTextoNaTela('p', 'O número secreto é maior');
        } else {
            mostrarTextoNaTela('p', 'O número secreto é menor');
        }
        limparCampo();
    }
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    exibirMensagemInicial();
    limparCampo();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
exibirMensagemInicial();