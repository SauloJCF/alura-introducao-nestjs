import { Injectable } from "@nestjs/common";
import { UsuarioEntity } from "./usuario.entity";

@Injectable()
export class UsuarioRepository {

    private usuarios: UsuarioEntity[] = [];

    async criar(dadosUsuario: UsuarioEntity) {
        this.usuarios.push(dadosUsuario);
    }

    async listar() {
        return this.usuarios;
    }

    async existeComEmail(email: string): Promise<boolean> {
        const existeUsuario = this.usuarios.some((usuario: UsuarioEntity) => usuario.email === email);
        return existeUsuario;
    }
}