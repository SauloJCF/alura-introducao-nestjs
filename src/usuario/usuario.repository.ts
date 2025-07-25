import { Injectable } from "@nestjs/common";

@Injectable()
export class UsuarioRepository {

    private usuarios: any[] = [];

    async criar(dadosUsuario) {
        this.usuarios.push(dadosUsuario);
    }

    async listar() {
        return this.usuarios;
    }
}