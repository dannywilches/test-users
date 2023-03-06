import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroUsuario'
})
export class FiltroUsuarioPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    // Este pipe esta diseñado para el filtrado de la información, en el for valida las coincidencias con cada uno de los campos de la tabla
    if (arg === '') return value;
    const resultUsuarios = [];
    for(const usuario of value) {
      if (usuario.nombres.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultUsuarios.push(usuario);
      }
      else if (usuario.apellidos.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultUsuarios.push(usuario);
      }
      else if (usuario.cedula.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultUsuarios.push(usuario);
      }
      else if (usuario.email.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultUsuarios.push(usuario);
      }
      else if (usuario.pais.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultUsuarios.push(usuario);
      }
      else if (usuario.direccion.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultUsuarios.push(usuario);
      }
      else if (usuario.celular.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultUsuarios.push(usuario);
      }
      else if (usuario.get_categoria.categoria.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultUsuarios.push(usuario);
      }
    }
    return resultUsuarios;
  }

}
