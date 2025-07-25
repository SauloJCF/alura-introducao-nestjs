import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsuarioRepository } from "./usuario.repository";
import { CriaUsuarioDTO } from "./dto/CriaUsuario.dto";

@Controller('/usuarios')
export class UsuarioController {
    constructor(private usuarioRepository: UsuarioRepository) { }

    @Post()
    async criar(@Body() dadosUsuario: CriaUsuarioDTO) {
        this.usuarioRepository.criar(dadosUsuario);

        return { message: 'Usuário Cadastrado Com Sucesso!', dadosUsuario };
    }

    @Get()
    async listar() {
        return this.usuarioRepository.listar();
    }
}