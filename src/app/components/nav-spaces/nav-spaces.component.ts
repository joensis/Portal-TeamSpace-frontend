import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-spaces',
  imports: [CommonModule],
  templateUrl: './nav-spaces.component.html',
  styleUrl: './nav-spaces.component.css'
})
export class NavSpacesComponent {

 /* controlar el despliegue del menu */
 isOpen = false; 

 changeOpen(){
   this.isOpen = !this.isOpen;
   
 }

}
