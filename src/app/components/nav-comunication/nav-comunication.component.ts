import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-comunication',
  imports: [CommonModule],
  templateUrl: './nav-comunication.component.html',
  styleUrl: './nav-comunication.component.css'
})
export class NavComunicationComponent {

  /* controlar el despliegue del menu */
  isOpen = false; 

  changeOpen(){
    this.isOpen = !this.isOpen;
    
  }

}
