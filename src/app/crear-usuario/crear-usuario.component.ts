import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { UsuariosService } from '../services/usuarios.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  userForm: FormGroup;
  submitted = false;
  ListCountries: any = [];
  ListCategory: any = [];
  infoUser: any = [];
  resultUser: any = [];
  id_user = false;

  constructor(private userService: UsuariosService, private formBuilder: FormBuilder, public router: Router, public routeActive: ActivatedRoute) {
    this.userForm = this.formBuilder.group({
      nombres: new FormControl(this.infoUser.nombres, [Validators.required, Validators.maxLength(100), Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+')]),
      apellidos: new FormControl(this.infoUser.apellidos, [Validators.required, Validators.maxLength(100), Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+')]),
      cedula: new FormControl(this.infoUser.cedula, [Validators.required, Validators.minLength(5), Validators.maxLength(30)]),
      email: new FormControl(this.infoUser.email, [Validators.required, Validators.email, Validators.maxLength(150)]),
      pais: new FormControl(this.infoUser.pais, [Validators.required]),
      direccion: new FormControl(this.infoUser.direccion, [Validators.required, Validators.minLength(5), Validators.maxLength(180)]),
      celular: new FormControl(this.infoUser.celular, [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10), Validators.maxLength(10)]),
      categoria: new FormControl(this.infoUser.categoria, [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.listCountriesComponent();
    this.listCategoryComponent();
    this.routeActive.params.subscribe((params: Params) => {
      this.id_user = params.id_usuario;
    });

    if (this.id_user != false && this.id_user != undefined) {
      this.listInfoUser(this.id_user);
    }
  }

  private makeForm() {}

  get f() {
    return this.userForm.controls;
  }

  listCountriesComponent() {
    this.userService.listCountriesService().subscribe(response =>{
      Object.values(response).forEach((Country:any) => {
        if (Country.subregion == "South America") {
          this.ListCountries.push(Country.name);
        }
      });
    });
  }

  listCategoryComponent() {
    this.userService.listCategoryService().subscribe(response =>{
      let dataCategory: any = response;
      this.ListCategory = dataCategory.categorias;
    });
  }

  listInfoUser(id_user:any) {
    this.userService.infoUsuario(id_user).subscribe(response =>{
      let user: any = response;
      this.infoUser = user.usuario;
    });
  }

  nuevoUsuario(){
    this.userService.registrarUsuario(this.userForm.value).subscribe(response =>{
      this.resultUser = response;
      if (this.resultUser.status == 201) {
        Swal.fire(
          'Registro Exitoso',
          'El usuario ha sido registrado',
          'success'
        ).then((result) => {
          this.router.navigate(['/', 'lista-usuarios']);
        });
      }
      else{
        Swal.fire(
          'Error',
          'El usuario no pudo ser registrado',
          'error'
        );
      }
    });
  }

  actualizarUsuario(){
    this.userService.editarUsuario(this.userForm.value, this.id_user).subscribe(response =>{
      this.resultUser = response;
      if (this.resultUser.status == 201) {
        Swal.fire(
          'Actualización Exitoso',
          'El usuario ha sido actualizar',
          'success'
        ).then((result) => {
          this.router.navigate(['/', 'lista-usuarios']);
        });
      }
      else{
        Swal.fire(
          'Error',
          'El usuario no pudo ser actualizado',
          'error'
        );
      }
    });
  }

}
