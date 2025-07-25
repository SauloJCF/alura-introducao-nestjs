import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsuarioRepository } from "./usuario.repository";

@Controller('/usuarios')
export class UsuarioController {
    constructor(private usuarioRepository: UsuarioRepository) { }

    @Post()
    async criar(@Body() dadosUsuario) {
        this.usuarioRepository.criar(dadosUsuario);

        return { message: 'Usuário Cadastrado Com Sucesso!', dadosUsuario };
    }

    @Get()
    async listar() {
        return this.usuarioRepository.listar();
    }
}