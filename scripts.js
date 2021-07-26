let refeicaoEscolhida;
let bebidaEscolhida;
let sobremesaEscolhida;
let valorRefeicao;
let valorBebida;
let valorSobremesa;
let valorReais
let nomeRefeicao;
let nomeBebida;
let nomeSobremesa;

// Funções de marcação de item selecionado //

function selecionarRefeicao(escolha) {
    refeicaoEscolhida = document.querySelector(".refeicoes .selecionar");
    if (refeicaoEscolhida !== null) {
        refeicaoEscolhida.classList.remove("selecionar");
        refeicaoEscolhida.classList.add("escondido");
    }

    escolha.classList.add("selecionar");
    escolha.classList.remove("escondido");
}

function selecionarBebida(escolha) {
    bebidaEscolhida = document.querySelector(".bebidas .selecionar");
    if (bebidaEscolhida !== null) {
        bebidaEscolhida.classList.remove("selecionar");
        bebidaEscolhida.classList.add("escondido");
    }

    escolha.classList.add("selecionar");
    escolha.classList.remove("escondido");
}

function selecionarSobremesa(escolha) {
    sobremesaEscolhida = document.querySelector(".sobremesas .selecionar");
    if (sobremesaEscolhida !== null) {
        sobremesaEscolhida.classList.remove("selecionar");
        sobremesaEscolhida.classList.add("escondido");
    }

    escolha.classList.add("selecionar");
    escolha.classList.remove("escondido");
}

// Funções para retornar valor do item selecionado //

function obterValorRefeicao(elemento) {
    let stringRefeicao = elemento.querySelector(".refeicao .valor").innerHTML
    let removerR$ = stringRefeicao.replace('R$', '');
    valorRefeicao = removerR$.replace(',', '.');
    
    return Number(valorRefeicao);
}

function obterValorBebida(elemento) {
    let stringBebida = elemento.querySelector(".bebida .valor").innerHTML
    let removerR$ = stringBebida.replace('R$', '');
    valorBebida = removerR$.replace(',', '.');
    
    return Number(valorBebida);
}

function obterValorSobremesa(elemento) {
    let stringSobremesa = elemento.querySelector(".sobremesa .valor").innerHTML
    let removerR$ = stringSobremesa.replace('R$', '');
    valorSobremesa = removerR$.replace(',', '.');
    
    return Number(valorSobremesa);
}

function valorPedido() {
    let valorTotal = (Number(valorRefeicao) + Number(valorBebida) + Number(valorSobremesa));
    valorReais = valorTotal.toFixed(2)

    return valorReais
}

// Funções para retornar o nome do item selecionado //

function obterNomeRefeicao(elemento) {
    nomeRefeicao = elemento.querySelector(".refeicao .nome-produto").innerHTML;
    return nomeRefeicao;
}

function obterNomeBebida(elemento) {
    nomeBebida = elemento.querySelector(".bebida .nome-produto").innerHTML;
    return nomeBebida;
}

function obterNomeSobremesa(elemento) {
    nomeSobremesa = elemento.querySelector(".sobremesa .nome-produto").innerHTML;
    return nomeSobremesa;
}

// Alterar o botão da borda ao selecionar os itens de cada menu //

function fecharPedido() {
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

// Encaminhar para o WhatsApp com a confirmação do pedido //

function finalizarPedido() {
    const botaoConfirmar = document.querySelector("button");

    if (botaoConfirmar.classList.contains("fechar-pedido")) {
        const mensagem = encodeURIComponent(`Olá, gostaria de fazer o pedido:
- Prato: ${nomeRefeicao}
- Bebida: ${nomeBebida}
- Sobremesa: ${nomeSobremesa}
Total: R$${valorReais}`);
        window.location.href = `https://wa.me/5541999352531?text=${mensagem}`;
    }
}
