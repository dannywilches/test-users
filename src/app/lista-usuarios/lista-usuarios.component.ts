import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { UsuarioModel } from './usuario';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {
  // Variables donde se almacenan la informacion de los paises y usuarios
  DataInfo: any = [];
  ListCountries: any = [];
  Usuarios: Array<UsuarioModel> = [];
  // Variable del filtro de busqueda
  searchUsuario = '';

  constructor(private userService: UsuariosService) { }

  ngOnInit(): void {
    this.listUsersComponent();
    this.listCountriesComponent();
  }

  listUsersComponent(): void {

  }

  listCountriesComponent() {
    this.userService.listCountriesService().subscribe(response =>{
      this.DataInfo = response;
      console.log(response);
      Object.values(this.DataInfo.results).forEach((Places:any) => {
        // Object.values(Places.residents).forEach((character:any) => {
        //   this.character.getCharacter(character).subscribe(infoCharacter =>{
        //     this.Characters.push(this.ListCountries);
        //   });
        // });
      });
    });
  }

  cleanFilter(){
    this.searchUsuario = '';
  }

}
