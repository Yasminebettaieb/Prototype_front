import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_auth/auth.guard';
import { AuthInterceptor } from './_auth/auth.interceptor';
import { UserServiceService } from './_services/user-service.service';
import { CongeService } from './_services/conge.service';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ModifierEmployeComponent } from './modifier-employe/modifier-employe.component';
import { UpdateEmpComponent } from './update-emp/update-emp.component';
import { AjouterEmployeComponent } from './ajouter-employe/ajouter-employe.component';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ChefLayoutComponent } from './layouts/chef-layout/chef-layout.component';
import { UpdateEdtComponent } from './update-edt/update-edt.component';
import { AjouterEmpComponent } from './ajouter-emp/ajouter-emp.component';
import { ReceptionnisteLayoutComponent } from './layouts/receptionniste-layout/receptionniste-layout.component';
import { MatButtonModule } from '@angular/material/button';
import { AjouterCongeComponent } from './conge/ajouter-conge/ajouter-conge.component';
import { ViewEmpComponent } from './view-emp/view-emp.component';
import { ViewEmpchoicesComponent } from './view-empchoices/view-empchoices.component';
import { PatientService } from './_services/patient/patient.service';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { RdvReceptionnisteComponent } from './rdv/rdv-receptionniste/rdv-receptionniste.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import { RdvtodayComponent } from './rdv/rdvtoday/rdvtoday.component';
import { AjouterRdvComponent } from './rdv/ajouter-rdv/ajouter-rdv.component';
import { ModifierRdvComponent } from './rdv/modifier-rdv/modifier-rdv.component';
import { MedecinLayoutComponent } from './layouts/medecin-layout/medecin-layout.component';
import { RdvmedecinComponent } from './rdv/rdvmedecin/rdvmedecin.component';
import { AjoutConsultationComponent } from './ajout-consultation/ajout-consultation.component';
import { OrdonnanceComponent } from './ordonnance/ordonnance.component';
import { ViewordonnanceComponent } from './viewordonnance/viewordonnance.component';
import { MatListModule } from '@angular/material/list';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { UpdateMedicamentComponent } from './update-medicament/update-medicament.component';
import { ViewDiagnostiqueComponent } from './view-diagnostique/view-diagnostique.component';
import { AjoutDcomComponent } from './ajout-dcom/ajout-dcom.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { DicomViewerComponent } from './dicom-viewer/dicom-viewer.component';
import { NgxDicomModule } from '../../ngx-dicom-lib/src/lib/ngx-dicom.module';
import { ViewPatientComponent } from './view-patient/view-patient.component';
import { OrderModule } from 'ngx-order-pipe';
import { DocumentEditorAllModule, DocumentEditorContainerModule } from '@syncfusion/ej2-angular-documenteditor';
import { WordviewerComponent } from './wordviewer/wordviewer.component';
import { AccountSeetingsComponent } from './account-seetings/account-seetings.component';
import { UserAuthService } from './_services/user-auth.service';
import { DossierMedicaleComponent } from './dossier-medicale/dossier-medicale.component';
import { ViewDossierComponent } from './view-dossier/view-dossier.component';
import { BillListComponent } from './bill-list/bill-list.component';
import { AjoutBillComponent } from './ajout-bill/ajout-bill.component';

pdfMake.vfs = pdfFonts.pdfMake.vfs;
FullCalendarModule.registerPlugins([interactionPlugin, dayGridPlugin]);

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    MatTableModule,
    MatMenuModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    MatTableModule,
    AppRoutingModule,
    MatIconModule,
    MatDialogModule,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    FullCalendarModule,
    MatListModule,
    NgxSpinnerModule,
    NgxDicomModule,
    OrderModule, DocumentEditorContainerModule, DocumentEditorAllModule],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    ChefLayoutComponent,
    LoginComponent,
    ModifierEmployeComponent,
    UpdateEmpComponent,
    AjouterEmployeComponent,
    UpdateEdtComponent,
    AjouterEmpComponent,
    ReceptionnisteLayoutComponent,
    MedecinLayoutComponent,
    AjouterCongeComponent,
    ViewEmpComponent,
    ViewEmpchoicesComponent,
    AjouterEmpComponent,
    UpdateEdtComponent,
    RdvReceptionnisteComponent,
    RdvtodayComponent,
    AjouterRdvComponent,
    ModifierRdvComponent,
    RdvmedecinComponent,
    AjoutConsultationComponent,
    OrdonnanceComponent,
    ViewordonnanceComponent,
    UpdateMedicamentComponent,
    ViewDiagnostiqueComponent,
    AjoutDcomComponent,
    DicomViewerComponent,
    ViewPatientComponent, WordviewerComponent, DossierMedicaleComponent, ViewDossierComponent, BillListComponent, AjoutBillComponent




  ],
  providers: [AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }, UserServiceService, CongeService, PatientService, UserAuthService],
  bootstrap: [AppComponent],
  entryComponents: [ModifierRdvComponent, UpdateEmpComponent, RdvtodayComponent, ModifierEmployeComponent, AjouterEmployeComponent, AjouterCongeComponent, AjouterRdvComponent,]
})
export class AppModule { }