import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProdutoRepository } from "./produto.repository";

@Controller('/produtos')
export class ProdutoController {

    constructor(private produtoRepository: ProdutoRepository) { }

    @Post()
    async criar(@Body() dadosProduto) {
        this.produtoRepository.criar(dadosProduto);

        return {
            message: 'Produto Cadastrado Com Sucesso!',
            dadosProduto
        }
    }

    @Get()
    async listar() {
        return this.produtoRepository.listar();
    }
}