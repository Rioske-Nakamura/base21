// divListaProduto.insertAdjacentHTML('afterbegin', '');

class Produto{
    constructor( Nome, Data_de_Cadastro, Descricao,Preco){
        this.Nome = Nome,
        this.Data_de_Cadastro = Data_de_Cadastro,
        this.Descricao = Descricao,
        this.Preco = Preco
    };

    emprimir(){
        
        return `
        <div class="card-header">
        ${this.Nome}
      </div>
      <blockquote class="blockquote mb-0">
      <p> ${this.Descricao} </p>
      <footer class="blockquote-footer"> ${this.Data_de_Cadastro}</footer>
      <p> ${'R$ ' + this.Preco} </p>
    </blockquote>
  </div>

       
        
        
        `
    }

};


class ProdutosDestaque extends Produto{
    constructor(Nome, Data_de_Cadastro, Descricao,Preco, imagem){
        super(Nome, Data_de_Cadastro, Descricao,Preco),
        this.imagem = imagem
       
    }

    mostrardestaque(){
        return `
        <img src=${this.imagem} class="card-img-top">  </img>
        <div class="card-body">
        <h1 class="card-title"> ${this.Nome} </h1>
        <p class="card-text"> ${this.Data_de_Cadastro} </p>
        <p class="card-text"> ${this.Descricao} </p>
        <h3 class="card-text"> ${'R$ '+this.Preco} </h3>
        </div>`
        
        
        //  
    }
}

let produtos= new Produto("BelaAna", "2009-01-09", "Produto de Baixa Qualidade", 1.99)
let div= document.getElementById("lista-produtos")

div.insertAdjacentHTML('afterbegin', produtos.emprimir())

//Destacados
let produtodestaque= new ProdutosDestaque("Vall","2019-02-22","Uma variante bem boazinha", 50, "kaka.jpg")
let divD = document.getElementById("produto-destaque")

console.log(produtodestaque.mostrardestaque())
divD.insertAdjacentHTML('afterbegin', produtodestaque.mostrardestaque())