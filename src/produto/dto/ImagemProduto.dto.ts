import { IsNotEmpty, IsString, IsUrl } from "class-validator";

const MSG_URL_OBRIGATORIA = 'URL da imagem não pode ser vazio';
const MSG_DESCRICAO_INVALIDO = 'Descrição da imagem não pode ser vazia';
const MSG_URL_INVALIDA = 'URL para imagem inválida';

export class ImagemProdutoDTO {

    @IsString()
    @IsNotEmpty({ message: MSG_URL_OBRIGATORIA })
    @IsUrl({}, { message: MSG_URL_INVALIDA })
    url: string;

    @IsString()
    @IsNotEmpty({ message: MSG_DESCRICAO_INVALIDO })
    descricao: string;
}