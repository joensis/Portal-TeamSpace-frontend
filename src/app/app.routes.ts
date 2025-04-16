import { Routes } from '@angular/router';
import { DefaultComponent } from './views/default/default.component';
import { SpacesComponent } from './views/spaces/spaces.component';
import { ComunicationComponent } from './views/comunication/comunication.component';
import { FilesComponent } from './views/files/files.component';
import { ConfigurationComponent } from './views/configuration/configuration.component';
import { PrincipalComponent } from './views/principal/principal.component';
import { Component } from '@angular/core';
import { LoginComponent } from './views/login/login.component';

export const routes: Routes = [
    {path: "main", component: PrincipalComponent,
        children:[
            {path:"spaces", component: SpacesComponent},
            {path: "comunication", component:ComunicationComponent},
            {path: "files", component:FilesComponent},
            {path: "configuration", component:ConfigurationComponent},
            {path:"default", component: DefaultComponent},
            
        ]
    },
    {path:"login", component: LoginComponent},
    {path:"", redirectTo:"/login", pathMatch:"full"}    /* cambiar a login */
    
    
];
