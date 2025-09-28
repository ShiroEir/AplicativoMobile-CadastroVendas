export class Venda{
    codigo: Number;
    nome_cliente: String;
    nome_produto: String;
    quantidade: Number;
    preco: Number;
    constructor(codigo: Number, nome_cliente: String, nome_produto: String, quantidade: Number, preco: Number) {
        this.codigo = codigo;
        this.nome_cliente = nome_cliente;
        this.nome_produto = nome_produto;
        this.quantidade = quantidade;
        this.preco = preco;
    }
}