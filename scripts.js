function selecionarRefeicao (elemento) {
    const opcaoEscolhida = document.querySelector(".refeicao .escolha-escondida");
    if (opcaoEscolhida !== null) {
        opcaoEscolhida.classList.remove("escolha-escondida")
    }

    elemento.classList.add("escolha-escondida");
}
 
function selecionarBebida (elemento) {
    const opcaoEscolhida = document.querySelector(".bebida .escolha-escondida");
    if (opcaoEscolhida !== null) {
        opcaoEscolhida.classList.remove("escolha-escondida")
    }

    elemento.classList.add("escolha-escondida");
}

function selecionarSobremesa (elemento) {
    const opcaoEscolhida = document.querySelector(".sobremesa .escolha-escondida");
    if (opcaoEscolhida !== null) {
        opcaoEscolhida.classList.remove("escolha-escondida")
    }

    elemento.classList.add("escolha-escondida");
}