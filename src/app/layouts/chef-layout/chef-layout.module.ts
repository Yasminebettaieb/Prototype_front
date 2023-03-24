import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { ChefLayoutRoutes } from './chef-layout.routing';
import { ChefServiceComponent } from 'app/chef-service/chef-service.component';
import { CongeChefserviceComponent } from 'app/conge/conge-chefservice/conge-chefservice.component';
import { GrdFilterPipe } from 'app/grd-filter.pipe';
import { TestFilterPipe } from 'app/test-filter.pipe';
import { CheffFilterPipe } from 'app/cheff-filter.pipe';
import { BlocComponent } from 'app/bloc/bloc.component';
import { AddPatientBlocComponent } from 'app/add-patient-bloc/add-patient-bloc.component';
import { BlocNameComponent } from 'app/bloc-name/bloc-name.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ChefLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    
  ],
  declarations: [
    ChefServiceComponent,
    CongeChefserviceComponent,CheffFilterPipe,BlocComponent,AddPatientBlocComponent
    ,BlocNameComponent,
  ]
})

export class ChefLayoutModule { }
