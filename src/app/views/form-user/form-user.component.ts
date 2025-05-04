import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NewUsers } from './userResources/models/NewUsers';
import { UserServicesService } from './userResources/services/user-services.service';

@Component({
  selector: 'app-form-user',
  imports: [ReactiveFormsModule],
  templateUrl: './form-user.component.html',
  styleUrl: './form-user.component.css'
})
export class FormUserComponent {

  formUser: FormGroup; 

  constructor(private UserService: UserServicesService){
    this.formUser = new FormGroup({
      userName: new FormGroup(undefined, [Validators.required, Validators.minLength(4)]),
      userEmail: new FormGroup(undefined, [Validators.required, Validators.email]),
      userPassword: new FormGroup(undefined, [Validators.required, Validators.minLength(4)])
    })
  }

  onSubmit(){
    if(this.formUser.valid){ //aqui vamos a llamar a lo desarrollado en el userService
      const newUser = new NewUsers (this.formUser.value.userName, this.formUser.value.userEmail, this.formUser.value.userPassword);
      this.UserService.createUser(newUser)
      .subscribe({
        next:(response)=>{
          //codigo
        },                             // modificar todo esto 
        error:(err)=>{
          console.log("Error de algun tipo")
        }
    })
    }
  }


}
