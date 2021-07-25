let refeicaoEscolhida;
let bebidaEscolhida;
let sobremesaEscolhida;

function selecionarRefeicao (elemento) {
    refeicaoEscolhida = document.querySelector(".refeicao .escolha-escondida");
    if (refeicaoEscolhida !== null) {
        refeicaoEscolhida.classList.remove("escolha-escondida");
    }

    elemento.classList.add("escolha-escondida");
}
 
function selecionarBebida (elemento) {
    bebidaEscolhida = document.querySelector(".bebida .escolha-escondida");
    if (bebidaEscolhida !== null) {
        bebidaEscolhida.classList.remove("escolha-escondida");
    }

    elemento.classList.add("escolha-escondida");
}

function selecionarSobremesa (elemento) {
    sobremesaEscolhida = document.querySelector(".sobremesa .escolha-escondida");
    if (sobremesaEscolhida !== null) {
        sobremesaEscolhida.classList.remove("escolha-escondida");
    }

    elemento.classList.add("escolha-escondida");
}

function fecharPedido () {
    let botaoDesativado = document.querySelector("button");

    if (refeicaoEscolhida !== undefined) {
        if (bebidaEscolhida !== undefined) {
            if (sobremesaEscolhida !== undefined) {
                botaoDesativado.classList.add("fechar-pedido");
                botaoDesativado.innerHTML = "Fechar pedido";
            }
        }
    }
}
