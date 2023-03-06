import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuario } from './usuario';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {
  // Variables donde se almacenan la informacion de los usuarios
  usuarios: Usuario[] = [];
  // Variable del filtro de busqueda
  searchUsuario = '';
  resultReq: any = [];

  constructor(public userService: UsuariosService) { }

  ngOnInit(): void {
    this.listUsersComponent();
  }

  listUsersComponent() {
    this.userService.listaUsuarios().subscribe((data) =>{
      let dataUsuarios: any = data;
      this.usuarios = dataUsuarios.usuarios;
    });
  }

  removerUsuario(id_user:any) {
    Swal.fire({
      title: 'Desea eliminar el usuario seleccionado',
      showDenyButton: true,
      confirmButtonText: 'Eliminar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.eliminarUsuario(id_user).subscribe((data) =>{
          this.resultReq = data;
          if (this.resultReq.status == 200) {
            Swal.fire(
              'Registro Exitoso',
              'El usuario ha sido eliminado',
              'success'
            ).then((result) => {
              this.listUsersComponent();
            });
          }
          else{
            Swal.fire(
              'Error',
              'El usuario no pudo ser eliminado',
              'error'
            );
          }
        });
      }
    });
  }

  cleanFilter(){
    this.searchUsuario = '';
  }

}
