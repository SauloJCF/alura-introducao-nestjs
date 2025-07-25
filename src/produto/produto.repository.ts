import { Injectable } from "@nestjs/common";
import { CriaProdutoDTO } from "./dto/CriaProduto.dto";

@Injectable()
export class ProdutoRepository {

    private produtos: any[] = [];

    async criar(dadosProdutos: CriaProdutoDTO) {
        this.produtos.push(dadosProdutos);        
    }

    async listar() {
        return this.produtos;
    }
}