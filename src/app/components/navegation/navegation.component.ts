import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navegation',
  imports: [CommonModule],
  templateUrl: './navegation.component.html',
  styleUrl: './navegation.component.css'
})
export class NavegationComponent {

  /* controlar el despliegue del menu */
  isOpen = false; 

  changeOpen(){
    this.isOpen = !this.isOpen;
    
  }

}
