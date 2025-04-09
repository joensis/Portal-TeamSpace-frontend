import { Component } from '@angular/core';
import { ProfileComponent } from "../../components/profile/profile.component";
import { CommonModule } from '@angular/common';
import { NavegationComponent } from "../../components/navegation/navegation.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-principal',
  imports: [CommonModule, ProfileComponent, NavegationComponent, 
    RouterOutlet],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

 



}
