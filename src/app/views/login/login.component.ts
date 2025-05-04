import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { LoginServiceService } from './loginResources/services/login-service.service';
import { User } from './loginResources/models/User';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  formLogin: FormGroup;

  constructor(private loginService: LoginServiceService ){     //HttpClient inyectado en el constructor 
    this.formLogin = new FormGroup({
      email:new FormControl(undefined, [Validators.email,  Validators.required, /*Validators.minLength(4), */ ]),
      password: new FormControl('', [Validators.required, /* Validators.minLength(4) */])

  })
  }

  

  onSubmit(){
    if(this.formLogin.valid){
      const user =  new User (this.formLogin.value.email, this.formLogin.value.password);
      this.loginService.LoginUser(user)  //llamamos a la funcion declarada en el servicio loginService
      .subscribe({
        next: (response)=>{
          localStorage.setItem('token', response.token); //almacena el token 
          console.log("Login correcto");
          this.router.navigate(["./main"]);

        },
        error:(err)=>{
          console.error("Error en el login", err);
        }
      })
      this.formLogin.reset();
      }else{
      this.formLogin.markAllAsTouched(); 
      console.log("Error en la validación")
    }
    
    

    
    /* const userData = this.formLogin.value;   //guardamos los valores del formulario en userData

    this.http.post<{token: string, message: string}>('./api/loginUser', userData)  //mandamos el post con las variables
    .subscribe({
      next:(response)=>{       //si la respuesta es correcta
        localStorage.setItem('token', response.token);    //almacenamos el token en el navegador
        console.log("Login correcto")
        this.router.navigate(["./main"]);
      },
      error: (err)=>{    // si es incorrecto 
          console.log("Error en el login", err)
        }
    }) */
    

  }



}
