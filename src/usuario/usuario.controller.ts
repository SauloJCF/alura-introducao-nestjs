import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsuarioRepository } from "./usuario.repository";

@Controller('/usuarios')
export class UsuarioController {
    private usuarioRepository = new UsuarioRepository();

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