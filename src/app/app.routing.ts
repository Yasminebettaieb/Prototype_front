import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthGuard } from './_auth/auth.guard';
import { ChefLayoutComponent } from './layouts/chef-layout/chef-layout.component';
import { ReceptionnisteLayoutComponent } from './layouts/receptionniste-layout/receptionniste-layout.component';
import { MedecinLayoutComponent } from './layouts/medecin-layout/medecin-layout.component';
import { DicomViewerComponent } from './dicom-viewer/dicom-viewer.component';
import { WordviewerComponent } from './wordviewer/wordviewer.component';
import { ViewDossierComponent } from './view-dossier/view-dossier.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'dicomViewer/:id',
    component: DicomViewerComponent,
  }, 
  {
    path: 'dashboard',
    redirectTo: 'dashboard',
    pathMatch: 'full', canActivate: [AuthGuard], data: { roles: ['ROLE_ADMINISTRATEUR'] }
  },
  {
    path: '',
    component: ChefLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layouts/chef-layout/chef-layout.module').then(m => m.ChefLayoutModule)
    }], canActivate: [AuthGuard], data: {
      roles: ['ROLE_CHEF_SERVICE']
    }
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
    }], canActivate: [AuthGuard], data: {
      roles: ['ROLE_ADMINISTRATEUR']
    }
  },
  {
    path: '',
    component: ReceptionnisteLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layouts/receptionniste-layout/receptionniste-layout.module').then(m => m.ReceptionnisteLayoutModule)
    }], canActivate: [AuthGuard], data: {
      roles: ['ROLE_RECEPTIONISTE']
    }
  },
  {
    path: '',
    component: MedecinLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layouts/medecin-layout/medecin-layout.module').then(m => m.MedecinLayoutModule)
    }], canActivate: [AuthGuard], data: {
      roles: ['ROLE_TECHNICIAN', 'ROLE_MEDECIN']
    }
  },
  {
    path: 'ChefService',
    redirectTo: 'ChefService',
    pathMatch: 'full', canActivate: [AuthGuard], data: { roles: ['ROLE_CHEF_SERVICE'] }
  },
  {
    path: 'receptionniste',
    redirectTo: 'receptionniste',
    pathMatch: 'full', canActivate: [AuthGuard], data: { roles: ['ROLE_RECEPTIONISTE'] }
  },
  {
    path: 'medecin',
    redirectTo: 'medecin',
    pathMatch: 'full', canActivate: [AuthGuard], data: { roles: ['ROLE_TECHNICIAN', 'ROLE_MEDECIN'] }
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
