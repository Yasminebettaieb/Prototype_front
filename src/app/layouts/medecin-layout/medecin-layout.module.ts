
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MedecinLayoutRoutes } from './medecin-layout.routing';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MedecinComponent } from 'app/medecin/medecin.component';
import { ConsultationComponent } from 'app/consultation/consultation.component';
import { MatDividerModule } from '@angular/material/divider';
import { RadiographieComponent } from 'app/radiographie/radiographie.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { DocumentEditorAllModule, DocumentEditorContainerModule } from '@syncfusion/ej2-angular-documenteditor';
import { AccountSeetingsComponent } from 'app/account-seetings/account-seetings.component';
import { AuthGuard } from 'app/_auth/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from 'app/_auth/auth.interceptor';
import { UserServiceService } from 'app/_services/user-service.service';
import { UserAuthService } from 'app/_services/user-auth.service';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MedecinLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule, MatDividerModule, MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatMenuModule,
    MatProgressBarModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,DocumentEditorContainerModule,DocumentEditorAllModule,
  ],    providers: [AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true}, UserServiceService,UserAuthService
  ],

  declarations: [

    MedecinComponent, ConsultationComponent,
    RadiographieComponent,AccountSeetingsComponent]
})

export class MedecinLayoutModule { }