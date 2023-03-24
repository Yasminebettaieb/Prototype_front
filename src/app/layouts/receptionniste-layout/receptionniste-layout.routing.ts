import { Routes } from '@angular/router';
import { AccountSeetingsComponent } from 'app/account-seetings/account-seetings.component';
import { BillListComponent } from 'app/bill-list/bill-list.component';

import { CongeEmployeComponent } from 'app/conge/conge-employe/conge-employe.component';
import { PatientReceptionnisteComponent } from 'app/patient/patient-receptionniste/patient-receptionniste.component';
import { RdvReceptionnisteComponent } from 'app/rdv/rdv-receptionniste/rdv-receptionniste.component';
import { RdvtodayComponent } from 'app/rdv/rdvtoday/rdvtoday.component';
import { ReceptionnisteComponent } from 'app/receptionniste/receptionniste.component';
import { VoirEdtComponent } from 'app/voir-edt/voir-edt.component';
import { AuthGuard } from '../../_auth/auth.guard';

export const receptionnisteLayoutRoutes: Routes = [
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
    { path: 'receptionniste', component: ReceptionnisteComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_RECEPTIONISTE'] } },
    { path: 'congeemploye', component: CongeEmployeComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_RECEPTIONISTE', 'ROLE_MEDECIN'] } },
    { path: 'voiredt', component: VoirEdtComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_RECEPTIONISTE', 'ROLE_MEDECIN'] } },
    { path: 'patientsrecep', component: PatientReceptionnisteComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_RECEPTIONISTE'] } },
    { path: 'rdvreceptionniste', component: RdvReceptionnisteComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_RECEPTIONISTE'] } },
    { path: 'rdvtoday', component: RdvtodayComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_RECEPTIONISTE'] } },
    { path: 'Facture', component: BillListComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_RECEPTIONISTE'] } },

    { path: 'accountrecep', component: AccountSeetingsComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_RECEPTIONISTE'] } },


    //{ component: UpdateEmpComponent, path: 'update-emp/:id' }
];
