import { Component } from '@angular/core';
import { ProfileComponent } from "../../components/profile/profile.component";
import { CommonModule } from '@angular/common';
import { NavSpacesComponent } from '../../components/nav-spaces/nav-spaces.component';
import { NavComunicationComponent } from "../../components/nav-comunication/nav-comunication.component";
import { NavFilesComponent } from "../../components/nav-files/nav-files.component";
import { NavConfigurationComponent } from '../../components/nav-configuration/nav-configuration.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-principal',
  imports: [CommonModule, ProfileComponent, NavSpacesComponent, NavComunicationComponent, 
    NavFilesComponent, NavConfigurationComponent, RouterOutlet],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

 



}
