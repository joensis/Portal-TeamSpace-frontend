import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-configuration',
  imports: [CommonModule],
  templateUrl: './nav-configuration.component.html',
  styleUrl: './nav-configuration.component.css'
})
export class NavConfigurationComponent {

   /* controlar el despliegue del menu */
   isOpen = false; 

   changeOpen(){
     this.isOpen = !this.isOpen;
     
   }
}
