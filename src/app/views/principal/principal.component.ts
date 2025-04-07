import { Component } from '@angular/core';
import { ProfileComponent } from "../../components/profile/profile.component";
import { CommonModule } from '@angular/common';
import { NavSpacesComponent } from '../../components/nav-spaces/nav-spaces.component';
import { NavComunicationComponent } from "../../components/nav-comunication/nav-comunication.component";
import { NavFilesComponent } from "../../components/nav-files/nav-files.component";
import { ConfigurationComponent } from "../configuration/configuration.component";

@Component({
  selector: 'app-principal',
  imports: [CommonModule, ProfileComponent, NavSpacesComponent, NavComunicationComponent, NavFilesComponent, ConfigurationComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

 



}
