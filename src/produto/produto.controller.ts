import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ProdutoRepository } from "./produto.repository";
import { CriaProdutoDTO } from "./dto/CriaProduto.dto";
import { ProdutoEntity } from "./produto.entity";
import { v4 as uuid } from "uuid";
import { AtualizaProdutoDTO } from "./dto/AtualizaProduto.dto";

@Controller('/produtos')
export class ProdutoController {

    constructor(private produtoRepository: ProdutoRepository) { }

    @Post()
    async criar(@Body() dadosProduto: CriaProdutoDTO) {
        const produtoEntity = new ProdutoEntity();

        produtoEntity.id = uuid();
        produtoEntity.nome = dadosProduto.nome;
        produtoEntity.descricao = dadosProduto.descricao;
        produtoEntity.categoria = dadosProduto.categoria;
        produtoEntity.quantidadeDisponivel = dadosProduto.quantidadeDisponivel;
        produtoEntity.valor = dadosProduto.valor;
        produtoEntity.usuarioId = dadosProduto.usuarioId;
        produtoEntity.caracteristicas = dadosProduto.caracteristicas;
        produtoEntity.imagens = dadosProduto.imagens;

        this.produtoRepository.criar(produtoEntity);

        return {
            message: 'Produto Cadastrado Com Sucesso!',
            produtoEntity
        }
    }

    @Get()
    async listar() {
        return this.produtoRepository.listar();
    }

    @Put('/:id')
    async atualizaUsuario(@Param('id') id: string, @Body() novosDados: AtualizaProdutoDTO) {
        const produtoAtualizado = await this.produtoRepository.atualizar(id, novosDados);

        return {
            produto: produtoAtualizado,
            message: 'Produto atualizado com sucesso!'
        }
    }
 
    @Delete('/:id')
    async deletar(@Param('id') id) {
        const produtoDeletado = await this.produtoRepository.deletar(id);

        return {
            produto: produtoDeletado,
            message: 'Produto deletado com sucesso!'
        }
    }
}