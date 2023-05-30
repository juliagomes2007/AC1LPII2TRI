class Papelaria{
    constructor(id, descricao, ativo, estoque, preco, cor, marca){
        this.id = id,
        this.descricao = descricao,
        this.ativo = ativo,
        this.estoque = estoque,
        this.preco = preco,
        this.cor = cor,
        this.marca = marca
    }

    ativar(){
        if(this.ativo == false){
            this.ativo = true;
            console.log("Produto ativada!")
        } else {
            console.log("O produto já está ativo")
        }
    }

    retirarEstoque(quantidade){
        if(this.ativo == true){
            if((this.estoque - quantidade) >= 0){
                this.estoque -= quantidade;
                console.log(`Compra realizada, valor à pagar: R$${(this.preco * quantidade)}. Restam ${this.estoque} produtos no estoque`);
            } else {
                console.log("Não é possível comprar mais produtos do que os existentes no estoque");
            }
        } else {
            console.log("Produto inativo");
        }
    }

    incluirEstoque(quantidade){
        if(this.ativo == true){
            if(quantidade > 10){
                console.log("Não é possível adicionar mais do que 10 itens")
            } else {
                this.estoque += quantidade;
                console.log(`Produtos adicionados! Há ${this.estoque} produtos no estoque`);
            }
        } else {
            console.log("Produto inativo")
        }
    }
}

function fazerCompras(){
    console.log("Cadastro inicial do produto")
    let id = parseInt(leia("Insira o id do produto: "));
    let descricao = leia("Insira a descrição do produto: ");
    let preco = parseFloat(leia("Insira o preço do produto: "));
    let cor = leia("Insira a cor do produto: ");
    let marca = leia("Insira a marca do produto: ");

    const p1 = new Papelaria(id, descricao, false, 10, preco, cor, marca);
    p1.ativar();

    for(i = 1; i <= 5; i++){
        console.log(`Venda ${i}`);
        console.log(p1);
        let quantidade = parseInt(leia("Quantos produtos gostaria de comprar? "));
        p1.retirarEstoque(quantidade);
    }
    
    let quantidade = parseInt(leia("Quantos produtos gostaria de adicionar ao estoque? "));
    p1.incluirEstoque(quantidade);

    let quer = leia("Gostaria de continuar?(S/N) ");
    if(quer == "S"){
        fazerCompras();
    } else {
        console.log("Até breve!")
    }
}

const leia = require('prompt-sync')();

let quer = leia("Gostaria de fazer compras?(S/N) ");
if(quer == "S"){
    fazerCompras();
} else {
    console.log("Até breve!")
}