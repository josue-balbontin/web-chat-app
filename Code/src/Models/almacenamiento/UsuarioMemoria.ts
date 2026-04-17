 import type  { Usuario } from "../entidades/Usuario"

export const UsuarioMemoria = {
    usuario: null as Usuario | null,

      setUsuario(usuario : Usuario) {
        this.usuario = usuario;
      },

      existeUsuario() : boolean {
        return this.usuario !== null;
      },

    obtenerUsuario() : Usuario | null {
        return this.usuario;
      }



}