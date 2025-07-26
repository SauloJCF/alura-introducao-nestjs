import { Injectable } from "@nestjs/common";
import { ProdutoEntity } from "./produto.entity";

@Injectable()
export class ProdutoRepository {

    private produtos: ProdutoEntity[] = [];

    async criar(dadosProdutos: ProdutoEntity) {
        this.produtos.push(dadosProdutos);
    }

    async listar() {
        return this.produtos;
    }

    async atualizar(id: string, novosDados: Partial<ProdutoEntity>) {
        const produto = await this.buscarPorId(id, String(novosDados.usuarioId));
        console.log(`Produto antes da atualização: ${JSON.stringify(produto)}`);

        Object.entries(novosDados).forEach(([chave, valor]) => {
            if (valor == null ||  chave === 'id' || chave === 'usuarioId') {
                return;
            }

            produto[chave] = valor;

            console.log(`Atualizando ${chave} para ${valor}`);
            
        });

        console.log(`Produto atualizado: ${JSON.stringify(produto)}`);
        
        return produto;
    }

    async deletar(id: string) {
        const produto = await this.buscarPorId(id);

        this.produtos = this.produtos.filter(
            produtoSalvo => produtoSalvo.id !== id
        );

        return produto;
    }

    private async buscarPorId(id:string, usuarioId?: string) {
        const possivelProduto = this.produtos.find(
            produto =>
                produto.id === id && (!usuarioId || produto.usuarioId === usuarioId)
        );

        if (!possivelProduto) {
            throw new Error('Produto não encontrado!');
        }

        return possivelProduto;
    }
}