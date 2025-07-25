import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsuarioRepository } from "./usuario.repository";

@Controller('/usuarios')
export class UsuarioController {
    constructor(private usuarioRepository: UsuarioRepository) { }

    @Post()
    async criarUsuario(@Body() dadosUsuario) {
        this.usuarioRepository.criarUsuario(dadosUsuario);

        return { message: 'Usuário Cadastrado Com Sucesso!', dadosUsuario };
    }

    @Get()
    async listarUsuarios() {
        return this.usuarioRepository.listarUsuarios();
    }
}