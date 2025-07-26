import { ArrayMinSize, IsArray, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, IsUUID, MaxLength, Min, ValidateNested } from "class-validator";
import { CaracteristicaProdutoDTO } from "./CaracteristicaProduto.dto";
import { ImagemProdutoDTO } from "./ImagemProduto.dto";
import { Type } from "class-transformer";

const MSG_NOME_INVALIDO = 'O nome do produto não pode ser vazio';
const MSG_VALOR_INVALIDO = 'O valor do produto precisa ser um número positivo (não pode ser zero) e ter até duas casas decimais';
const MSG_QUANTIDADE_INVALIDA = 'A quantidade precisa ser um número igual ou maior que zero';
const MSG_DESCRICAO_INVALIDA = 'A descrição não pode ser vazia ou maior que 1000 caracteres';
const MSG_CARACTERISTICAS_INVALIDAS = 'A lista de características do produto precisa ter pelo menos 3 itens';
const MSG_IMAGEM_INVALIDAS = 'A lista de imagens do produto precisa ter pelo menos 1 item';
const MSG_CATEGORIA_INVALIDAS = 'A categoria do produto não pode ser vazia';

export class AtualizaProdutoDTO {
    @IsUUID(undefined, { message: 'ID de usuário inválido' })
    usuarioId: string;
    
    @IsString()
    @IsNotEmpty({ message: MSG_NOME_INVALIDO })
    @IsOptional()
    nome: string;

    @IsNumber({maxDecimalPlaces: 2, allowNaN: false, allowInfinity: false }, { message: MSG_VALOR_INVALIDO })
    @IsPositive({ message: MSG_VALOR_INVALIDO })
    @IsOptional()
    valor: number;

    @IsNumber()
    @Min(0, { message: MSG_QUANTIDADE_INVALIDA })
    @IsOptional()
    quantidadeDisponivel: number;

    @IsString()
    @IsNotEmpty({ message: MSG_DESCRICAO_INVALIDA })
    @MaxLength(1000, { message: MSG_DESCRICAO_INVALIDA })
    @IsOptional()
    descricao: string;

    @IsArray({ message: MSG_CARACTERISTICAS_INVALIDAS })
    @ValidateNested({ message: MSG_CARACTERISTICAS_INVALIDAS })
    @Type(() => CaracteristicaProdutoDTO)
    @ArrayMinSize(3, { message: MSG_CARACTERISTICAS_INVALIDAS })
    @IsOptional()
    caracteristicas: CaracteristicaProdutoDTO[];

    @IsArray({ message: MSG_IMAGEM_INVALIDAS })
    @ValidateNested({ message: MSG_IMAGEM_INVALIDAS })
    @Type(() => ImagemProdutoDTO)
    @ArrayMinSize(1, { message: MSG_IMAGEM_INVALIDAS })
    @IsOptional()
    imagens: ImagemProdutoDTO[];

    @IsString()
    @IsNotEmpty({ message: MSG_CATEGORIA_INVALIDAS })
    @IsOptional()
    categoria: string;
}