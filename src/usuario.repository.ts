
export class UsuarioRepository {

    private usuarios: any[] = [];

    async criarUsuario(dadosUsuario) {
        this.usuarios.push(dadosUsuario);
        console.log(this.usuarios);
    }

    async listarUsuarios() {
        return this.usuarios;
    }
}