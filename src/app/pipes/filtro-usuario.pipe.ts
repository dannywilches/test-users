import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroUsuario'
})
export class FiltroUsuarioPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    // Este pipe esta diseñado para el filtrado de la información, en el for valida las coincidencias con cada uno de los campos de la tabla
    if (arg === '') return value;
    const resultUsuarios = [];
    for(const character of value) {
      if (character.name.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultUsuarios.push(character);
      }
      if (character.location.name.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultUsuarios.push(character);
      }
      if (character.gender.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultUsuarios.push(character);
      }
      if (character.species.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultUsuarios.push(character);
      }
      if (character.status.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultUsuarios.push(character);
      }
      if (character.created.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultUsuarios.push(character);
      }
    }
    return resultUsuarios;
  }

}
