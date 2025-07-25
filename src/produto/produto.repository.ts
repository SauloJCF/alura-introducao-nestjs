import { Injectable } from "@nestjs/common";

@Injectable()
export class ProdutoRepository {

    private produtos: any[] = [];

    async criar(dadosProdutos) {
        this.produtos.push(dadosProdutos);        
    }

    async listar() {
        return this.produtos;
    }
}