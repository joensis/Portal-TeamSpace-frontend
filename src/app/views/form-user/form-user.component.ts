import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators, FormControl } from '@angular/forms';
import { NewUsers } from './userResources/models/NewUsers';
import { UserServicesService } from './userResources/services/user-services.service';
import { UserSuccesComponent } from "../../components/user-succes/user-succes.component";

@Component({
  selector: 'app-form-user',
  imports: [ReactiveFormsModule, UserSuccesComponent],
  templateUrl: './form-user.component.html',
  styleUrl: './form-user.component.css'
})
export class FormUserComponent {

   formUser: FormGroup; 
   succesMessage: string = '';
   showVisible: boolean = false; 

  constructor(private UserService: UserServicesService){
    this.formUser = new FormGroup({
      nameUser: new FormControl (undefined, [Validators.required, Validators.minLength(4)]),
      emailUser: new FormControl(undefined, [Validators.required, Validators.email]),
      passwordUser: new FormControl(undefined, [Validators.required, Validators.minLength(4)])
    })
  }

  onSubmit(){
    if(this.formUser.valid){ //aqui vamos a llamar a lo desarrollado en el userService
      const newUser = new NewUsers (this.formUser.value.nameUser, this.formUser.value.emailUser, this.formUser.value.passwordUser);
      this.UserService.createUser(newUser)
      .subscribe({
        next:(response)=>{
          this.succesMessage = response.message; 
          this.showVisible = true; 
          
          console.log("Creacion de usuario correcto");
          this.formUser.reset(); 
          //ocultar el mensaje despues de 5 seg
           setTimeout(() => {
            this.showVisible = false; 
          }, 3000); 


        },                           
        error:(err)=>{
          console.log("Error al crear el usuario")
        }
    })
    }
  }  


}
