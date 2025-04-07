import { Component } from '@angular/core';
import { ProfileComponent } from "../../components/profile/profile.component";
import { CommonModule } from '@angular/common';
import { NavSpacesComponent } from '../../components/nav-spaces/nav-spaces.component';

@Component({
  selector: 'app-principal',
  imports: [CommonModule, ProfileComponent, NavSpacesComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

 



}
