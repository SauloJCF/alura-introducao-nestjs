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

    async atualizar(id: string, novosDados: Partial<UsuarioEntity>) {
        const usuario = await this.buscarPorId(id);

        Object.entries(novosDados).forEach(([chave, valor]) => {
            if (!usuario[chave] || chave === 'id') {
                return;
            }

            usuario[chave] = valor;
        });

        return usuario;
    }

    async deletar(id: string) {
        const usuario = await this.buscarPorId(id);

        this.usuarios = this.usuarios.filter(
            usuarioSalvo => usuarioSalvo.id !== id
        );

        return usuario;
    }

    private async buscarPorId(id: string) {
        const possivelUsuario = this.usuarios.find(usuario => usuario.id === id);

        if (!possivelUsuario) {
            throw new Error('Usuário não encontrado!');
        }

        return possivelUsuario;
    }
}