import { Routes } from '@angular/router';
import { AccountSeetingsComponent } from 'app/account-seetings/account-seetings.component';
import { BlocNameComponent } from 'app/bloc-name/bloc-name.component';
import { BlocComponent } from 'app/bloc/bloc.component';
import { ChefServiceComponent } from 'app/chef-service/chef-service.component';
import { CongeChefserviceComponent } from 'app/conge/conge-chefservice/conge-chefservice.component';
import { PatientReceptionnisteComponent } from 'app/patient/patient-receptionniste/patient-receptionniste.component';
import { AuthGuard } from '../../_auth/auth.guard';

export const ChefLayoutRoutes: Routes = [
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
    { path: 'ChefService', component: ChefServiceComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_CHEF_SERVICE'] } },
    { path: 'congechef', component: CongeChefserviceComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_CHEF_SERVICE'] } },
    { path: 'bloc', component: BlocComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_CHEF_SERVICE'] } },
    { path: 'blocName/:name', component: BlocNameComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_CHEF_SERVICE'] } },
    { path: 'account', component: AccountSeetingsComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_CHEF_SERVICE', 'ROLE_MEDECIN', 'ROLE_RECEPTIONNISTE', 'ROLE_ADMINISTRATEUR'] } },
    { path: 'patientschef', component: PatientReceptionnisteComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_TECHNICIAN', 'ROLE_RECEPTIONISTE', 'ROLE_MEDECIN', 'ROLE_CHEF_SERVICE'] } },


];
