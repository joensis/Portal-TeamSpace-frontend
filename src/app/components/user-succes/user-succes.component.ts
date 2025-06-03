import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-succes',
  imports: [CommonModule],
  templateUrl: './user-succes.component.html',
  styleUrl: './user-succes.component.css'
})
export class UserSuccesComponent {

  @Input() message: string = ''; 
  @Input() visible: boolean = false; 

}
