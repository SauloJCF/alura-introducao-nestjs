import { Injectable } from "@nestjs/common";
import { CriaUsuarioDTO } from "./dto/CriaUsuario.dto";

@Injectable()
export class UsuarioRepository {

    private usuarios: any[] = [];

    async criar(dadosUsuario: CriaUsuarioDTO) {
        this.usuarios.push(dadosUsuario);
    }

    async listar() {
        return this.usuarios;
    }
}