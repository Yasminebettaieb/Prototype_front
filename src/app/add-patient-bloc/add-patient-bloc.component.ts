import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PatientService } from 'app/_services/patient/patient.service';
import swal from 'sweetalert';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-patient-bloc',
  templateUrl: './add-patient-bloc.component.html',
  styleUrls: ['./add-patient-bloc.component.scss']
})
export class AddPatientBlocComponent implements OnInit {
  listePatient: any;
  bloc: any;
  types: any[] = ['A', 'B', 'C'];
  idpatient: any;
  selectedItem:any;

  constructor( private dialog: MatDialog ,private patientService:PatientService,public dialogRef: MatDialogRef<AddPatientBlocComponent> , private router :Router) { }

  ngOnInit(): void {
    this.patientService.getAllPatient().subscribe(data => {
      this.listePatient = data;
      console.log("patients :", this.listePatient);
    })         
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  Assign(data: any) {


      console.log("Inserting room");
      
          Swal.fire({
          title: 'Êtes-vous sûr de vouloir Assigner le patient ?',
          icon: 'error',
          showCancelButton: true,
          confirmButtonText: 'Oui',
          cancelButtonText: 'Non',
    
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {

            this.patientService.postRoom(data).subscribe((results) => {
              console.warn("result", results);
            })
            Swal.fire(
              '',
              'Chambre non vide',
              'success'
            );
                this.dialogRef.close();
            console.log(this.selectedItem)
            console.log(data);


          } else if (result.isDismissed) {
            Swal.fire(
              'Annuler',
              'Chambre reste vide',
              'error');
          }
        });
      
    }
    }
  

