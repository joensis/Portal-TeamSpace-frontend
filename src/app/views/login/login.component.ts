import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Route, Router, RouterModule } from '@angular/router';
import { LoginServiceService } from './loginResources/services/login-service.service';
import { User } from './loginResources/models/User';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

   formLogin: FormGroup;

  constructor(private loginService: LoginServiceService, private router: Router){     //HttpClient inyectado en el constructor 
    this.formLogin = new FormGroup({
      email:new FormControl(undefined, [Validators.email,  Validators.required,  ]),
      password: new FormControl('', [Validators.required, ])

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
          this.router.navigate(["./main/default"]);

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
    
    

    
    
    

  } 



}
