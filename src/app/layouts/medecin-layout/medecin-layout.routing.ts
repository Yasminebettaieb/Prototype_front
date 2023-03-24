import { Routes } from '@angular/router';
import { AuthGuard } from '../../_auth/auth.guard';
import { MedecinComponent } from 'app/medecin/medecin.component';
import { VoirEdtComponent } from 'app/voir-edt/voir-edt.component';
import { CongeEmployeComponent } from 'app/conge/conge-employe/conge-employe.component';
import { RdvmedecinComponent } from 'app/rdv/rdvmedecin/rdvmedecin.component';
import { ConsultationComponent } from 'app/consultation/consultation.component';
import { AjoutConsultationComponent } from 'app/ajout-consultation/ajout-consultation.component';
import { RadiographieComponent } from 'app/radiographie/radiographie.component';
import { AjoutDcomComponent } from 'app/ajout-dcom/ajout-dcom.component';
import { WordviewerComponent } from 'app/wordviewer/wordviewer.component';
import { AccountSeetingsComponent } from 'app/account-seetings/account-seetings.component';
import { DossierMedicaleComponent } from 'app/dossier-medicale/dossier-medicale.component';
import { ViewDossierComponent } from 'app/view-dossier/view-dossier.component';
import { PatientReceptionnisteComponent } from 'app/patient/patient-receptionniste/patient-receptionniste.component';

export const MedecinLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'medecin', component: MedecinComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_TECHNICIAN', 'ROLE_MEDECIN'] } },
    { path: 'voiredtmedecin', component: VoirEdtComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_TECHNICIAN', 'ROLE_MEDECIN'] } },
    { path: 'congemedecin', component: CongeEmployeComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_TECHNICIAN', 'ROLE_MEDECIN'] } },
    { path: 'rdv', component: RdvmedecinComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_MEDECIN'] } },
    { path: 'consultation', component: ConsultationComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_MEDECIN'] } },
    { path: 'ajoutconsultation', component: AjoutConsultationComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_MEDECIN'] } },
    { path: 'radiographie', component: RadiographieComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_TECHNICIAN'] } },
    { path: 'ajoutdcom', component: AjoutDcomComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_TECHNICIAN'] } },
    { path: 'accountmedecin', component: AccountSeetingsComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_MEDECIN'] } },
    { path: 'Dossiermedicale', component: DossierMedicaleComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_MEDECIN'] } },
    { path: 'Dossier/:id_patient', component: ViewDossierComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_MEDECIN'] } },
    { path: 'accountradiologue', component: AccountSeetingsComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_TECHNICIAN'] } },
    { path: 'patientsmed', component: PatientReceptionnisteComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_MEDECIN', 'ROLE_TECHNICIAN'] } },







    //{ component: UpdateEmpComponent, path: 'update-emp/:id' }
];
