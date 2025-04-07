import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-files',
  imports: [CommonModule],
  templateUrl: './nav-files.component.html',
  styleUrl: './nav-files.component.css'
})
export class NavFilesComponent {

  /* controlar el despliegue del menu */
  isOpen = false; 

  changeOpen(){
    this.isOpen = !this.isOpen;
    
  }

}
