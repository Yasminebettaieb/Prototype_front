import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PatientService } from 'app/_services/patient/patient.service';
import swal from 'sweetalert';
@Component({
  selector: 'app-ajouter-patient',
  templateUrl: './ajouter-patient.component.html',
  styleUrls: ['./ajouter-patient.component.scss']
})
export class AjouterPatientComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AjouterPatientComponent>, private patientService: PatientService, private router: Router) { }
  patient: any;
  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  insertPatient(data: any) {
    console.log("Inserting employee");
    console.log(data);
    this.patientService.postPatient(data)
      .subscribe((result1) => {
        console.log("result", result1);
        swal({
          title: "Ajout avec succès !",
          text: "Le patient a est ajouté !",
          icon: "success",
          timer: 4000
        });
        this.dialogRef.close();
        this.router.navigate(['/patient']);
      })
    console.warn(data);
  }

}
