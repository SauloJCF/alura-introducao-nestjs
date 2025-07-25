import { IsNotEmpty, IsString } from "class-validator";

const MSG_NOME_INVALIDO = 'Nome da cadasterística não pode ser vazio';
const MSG_DESCRICAO_INVALIDO = 'Descrição da característica não pode ser vazio';
export class CaracteristicaProdutoDTO {

    @IsString()
    @IsNotEmpty({ message: MSG_NOME_INVALIDO })
    nome: string;

    @IsString()
    @IsNotEmpty({ message: MSG_DESCRICAO_INVALIDO })
    descricao: string;
}