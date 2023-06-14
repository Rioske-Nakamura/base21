// divListaProduto.insertAdjacentHTML('afterbegin', '');
class MeuErro extends Error {
    constructor(message){
      super(message);
      this.name = "Meu Erro";
    }
  }

class Produto{
    constructor( Nome, Data_de_Cadastro, Descricao,Preco){
        this.Nome = Nome,
        this.Data_de_Cadastro = Data_de_Cadastro,
        this.Descricao = Descricao,
        this.Preco = Preco
    };

    emprimirPrincipal() {
        try {
          return this.emprimir();
        } catch (error) {
          return error
        }
      }


    emprimir(){
        if(this.nome != "" && this.Descricao != "" && this.Data_de_Cadastro != "" && this.Preco != ""){
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
        `}else {
            throw new MeuErro("Mensagem de erro");
          }
    }

};


class ProdutosDestaque extends Produto{
    constructor(Nome, Data_de_Cadastro, Descricao,Preco, imagem){
        super(Nome, Data_de_Cadastro, Descricao,Preco),
        this.imagem = imagem
       
    }

    emprimirDestaquePrincipal() {
        try {
          return this.mostrardestaque();
        } catch (error) {
          return error
        }
      }

    mostrardestaque(){
        if(this.nome != "" && this.Descricao != "" && this.Data_de_Cadastro != "" && this.Preco != "" &&  this.imagem != "" && this.Descricao != ""){
        return `
        <img src=${this.imagem} class="card-img-top">  </img>
        <div class="card-body">
        <h1 class="card-title"> ${this.Nome} </h1>
        <p class="card-text"> ${this.Data_de_Cadastro} </p>
        <p class="card-text"> ${this.Descricao} </p>
        <h3 class="card-text"> ${'R$ '+this.Preco} </h3>
        </div>`
        }else {
            throw new MeuErro("Mensagem de erro");
          }
        
        //  
    }
}


let div= document.getElementById("lista-produtos")
let produtos= new Produto("", "2009-01-09", "Produto de Baixa Qualidade", 1.99)

div.insertAdjacentHTML('afterbegin', produtos.emprimirPrincipal())

//Destacados

let divD = document.getElementById("produto-destaque")
let produtodestaque= new ProdutosDestaque("Vall","2019-02-22","Uma variante bem boazinha", 50, "kaka.jpg")

divD.insertAdjacentHTML('afterbegin', produtodestaque.emprimirDestaquePrincipal())