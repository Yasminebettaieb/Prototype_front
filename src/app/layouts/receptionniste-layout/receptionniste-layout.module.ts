import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { receptionnisteLayoutRoutes } from './receptionniste-layout.routing';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { CongeEmployeComponent } from 'app/conge/conge-employe/conge-employe.component';
import { ReceptionnisteComponent } from 'app/receptionniste/receptionniste.component';
import { TestFilterPipe } from 'app/test-filter.pipe';
import { VoirEdtComponent } from 'app/voir-edt/voir-edt.component';
import { PatientReceptionnisteComponent } from 'app/patient/patient-receptionniste/patient-receptionniste.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from '../../_auth/auth.guard';
import { AuthInterceptor } from '../../_auth/auth.interceptor';
import { AjouterPatientComponent } from 'app/patient/ajouter-patient/ajouter-patient.component';
import { MatRadioModule } from '@angular/material/radio';
import { UpdatePatientComponent } from 'app/update-patient/update-patient.component';
import { AccountSeetingsComponent } from 'app/account-seetings/account-seetings.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(receptionnisteLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatRadioModule,

  ],
  providers: [AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  declarations: [
    ReceptionnisteComponent,
    CongeEmployeComponent, TestFilterPipe,
    VoirEdtComponent, PatientReceptionnisteComponent, AjouterPatientComponent, UpdatePatientComponent,
  ],

  entryComponents: [AjouterPatientComponent, UpdatePatientComponent]
})

export class ReceptionnisteLayoutModule { }
