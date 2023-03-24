import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from 'app/_services/user-auth.service';
import { UserServiceService } from 'app/_services/user-service.service';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Accueil', icon: 'dashboard', class: '' },
  { path: '/table-list', title: 'Utilisateurs', icon: 'person', class: '' },
  { path: '/user-profile', title: 'Gestion Emploi_Temps', icon: 'schedule', class: '' },
  { path: '/congeAdmin', title: 'Gestion congés', icon: 'date_range', class: '' },
  { path: '/patientsadmin', title: 'Patients', icon: 'local_hotel', class: '' },
  { path: '/accountadmin', title: 'Mon compte', icon: 'portrait', class: '' }
];

export const ROUTES2: RouteInfo[] = [
  { path: '/ChefService', title: 'Accueil', icon: 'dashboard', class: '' },
  { path: '/congechef', title: 'Demande congé', icon: 'date_range', class: '' },
  { path: '/bloc', title: 'Chambres', icon: 'hotel', class: '' },
  { path: '/patientschef', title: 'Patients', icon: 'local_hotel', class: '' },
  { path: '/account', title: 'Mon compte', icon: 'portrait', class: '' },



];
export const ROUTES3: RouteInfo[] = [
  { path: '/receptionniste', title: 'Accueil', icon: 'dashboard', class: '' },
  { path: '/voiredt', title: 'Emploi du Temps', icon: 'schedule', class: '' },
  { path: '/congeemploye', title: 'Demande congé', icon: 'date_range', class: '' },
  { path: '/patientsrecep', title: 'Patients', icon: 'local_hotel', class: '' },
  { path: '/rdvreceptionniste', title: 'Rendez-vous', icon: 'event_available', class: '' },
  { path: '/Facture', title: 'Facture', icon: 'receipt', class: '' },

  { path: '/accountrecep', title: 'Mon compte', icon: 'portrait', class: '' }

];
export const ROUTES4: RouteInfo[] = [
  { path: '/medecin', title: 'Accueil', icon: 'dashboard', class: '' },
  { path: '/voiredtmedecin', title: 'Emploi du Temps', icon: 'schedule', class: '' },
  { path: '/congemedecin', title: 'Demande congé', icon: 'date_range', class: '' },
  { path: '/patientsmed', title: 'Patients', icon: 'local_hotel', class: '' },
  { path: '/rdv', title: 'Rendez-vous', icon: 'event_available', class: '' },
  { path: '/consultation', title: 'Consultation', icon: 'event_available', class: '' },
  { path: '/Dossiermedicale', title: 'Dossier médicale', icon: 'portrait', class: '' },
  { path: '/accountmedecin', title: 'Mon compte', icon: 'portrait', class: '' },


];
export const ROUTES5: RouteInfo[] = [
  { path: '/medecin', title: 'Accueil', icon: 'dashboard', class: '' },
  { path: '/voiredtmedecin', title: 'Emploi du Temps', icon: 'schedule', class: '' },
  { path: '/congemedecin', title: 'Demande congé', icon: 'date_range', class: '' },
  { path: '/radiographie', title: 'Gestion radiographie', icon: 'portrait', class: '' },
  { path: '/patientsmed', title: 'Patients', icon: 'local_hotel', class: '' },
  { path: '/accountradiologue', title: 'Mon compte', icon: 'portrait', class: '' },



];
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  menuItems2: any[];
  menuItems3: any[];
  menuItems4: any[];
  menuItems5: any[];
  constructor(public userService: UserServiceService, private router: Router, private authService: UserAuthService) { }
  name: string = this.authService.getName();
  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.menuItems2 = ROUTES2.filter(menuItem => menuItem);
    this.menuItems3 = ROUTES3.filter(menuItem => menuItem);
    this.menuItems4 = ROUTES4.filter(menuItem => menuItem);
    this.menuItems5 = ROUTES5.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };
}
