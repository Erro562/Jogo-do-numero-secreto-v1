let listaDeNumerosSorteados = [];
let NumeroLimite = 10;
let numeroSecreto = geraNumeroAleatorio();
let tentativas = 1;
//função com parametros
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    //html interno
    campo.innerHTML = texto;

}

function exibirMensagemInicial(){
    exibirTextoNaTela("h1", "Jogo do Numero secreto");
    exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
}

exibirMensagemInicial();

function verificarChute(){

    let chute = document.querySelector("input").value;

    if(chute == numeroSecreto){
        exibirTextoNaTela("h1", "Acertou!");
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagensTentativas =`Você descobriu o numero secreto!, com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela("p", mensagensTentativas);
        //desativa o atributo de disable pelo id
        document.getElementById("reiniciar").removeAttribute("disabled");

    }else{
        if(chute > numeroSecreto){
            exibirTextoNaTela("p", "O número secreto é menor ");
        }else{
            exibirTextoNaTela("p", "O número secreto é maior ");
        }
        tentativas++;
        limparCampo();
    }
}

//função com retorno
function geraNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * NumeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == 7){
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return geraNumeroAleatorio(); 
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido); //push add ao final da lista
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = "";
}

function reiniciarJogo(){
    numeroSecreto = geraNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled",true);
}