import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { LoginComponent } from 'app/login/login.component';
import { CongeAdministateurComponent } from 'app/conge/conge-administateur/conge-administateur.component'; 4
import { AuthGuard } from '../../_auth/auth.guard';
import { PatientReceptionnisteComponent } from 'app/patient/patient-receptionniste/patient-receptionniste.component';
import { AccountSeetingsComponent } from 'app/account-seetings/account-seetings.component';

export const AdminLayoutRoutes: Routes = [
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
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_ADMINISTRATEUR'] } },
    { path: 'user-profile', component: UserProfileComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_ADMINISTRATEUR'] } },
    { path: 'table-list', component: TableListComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_ADMINISTRATEUR'] } },
    { path: 'login', component: LoginComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_ADMINISTRATEUR'] } },
    { path: 'congeAdmin', component: CongeAdministateurComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_ADMINISTRATEUR'] } },
    { path: 'patientsadmin', component: PatientReceptionnisteComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_ADMINISTRATEUR'] } },
    { path: 'accountadmin', component: AccountSeetingsComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_CHEF_SERVICE', 'ROLE_MEDECIN', 'ROLE_RECEPTIONNISTE', 'ROLE_ADMINISTRATEUR'] } },


    //{ component: UpdateEmpComponent, path: 'update-emp/:id' }
];
