import { ImagemProdutoEntity } from "./imagemProduto.entity";
import { CaracteristicaProdutoEntity } from "./caracteristicaProduto.entity";

export class ProdutoEntity {
    id: string;
    usuarioId: string;
    nome: string;
    valor: number;
    quantidadeDisponivel: number;
    descricao: string;
    caracteristicas: CaracteristicaProdutoEntity[];
    imagens: ImagemProdutoEntity[];
    categoria: string;
}