// divListaProduto.insertAdjacentHTML('afterbegin', '');

class Produto{
    constructor( Nome, Data_de_Cadastro, Descricao,Preco){
        this.Nome = Nome,
        this.Data_de_Cadastro = Data_de_Cadastro,
        this.Descricao = Descricao,
        this.Preco = Preco
    };

    emprimir(){
        return this.Nome + this.Data_de_Cadastro + this.Descricao + this.Preco
    }

};


class ProdutosDestaque extends Produto{
    constructor(Nome, Data_de_Cadastro, Descricao,Preco, imagem){
        super(Nome, Data_de_Cadastro, Descricao,Preco),
        this.imagem = imagem
    }

    mostrardestaque(){
        return this.Nome + this.Data_de_Cadastro + this.Descricao + this.Preco  + this.imagem
    }
}

