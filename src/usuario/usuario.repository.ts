import { Injectable } from "@nestjs/common";
import { CriaUsuarioDTO } from "./dto/CriaUsuario.dto";

@Injectable()
export class UsuarioRepository {

    private usuarios: CriaUsuarioDTO[] = [];

    async criar(dadosUsuario: CriaUsuarioDTO) {
        this.usuarios.push(dadosUsuario);
    }

    async listar() {
        return this.usuarios;
    }

    async existeComEmail(email: string): Promise<boolean> {
        const existeUsuario = this.usuarios.some((usuario: CriaUsuarioDTO) => usuario.email === email);
        return existeUsuario;
    }
}