import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UpdateEmpComponent } from 'app/update-emp/update-emp.component';
import { PatientService } from 'app/_services/patient/patient.service';
import  swal from 'sweetalert';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.scss']
})
export class UpdatePatientComponent implements OnInit {

  Patients: any;
  id: any;
  constructor( private patientService: PatientService, private router: Router, public dialogRef: MatDialogRef<UpdatePatientComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
    this.id = data;
  }

  ngOnInit(): void {
    this.loadPatient(this.id);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  loadPatient(id: any) {
    this.patientService.getPatient(`${id}`).subscribe(
       Patients => {
        Patients
        this.Patients = Patients;
        console.log(this.Patients);

      },
      error => {
        console.log(error);
      }
    );
  }
  Onupdate(id: string, data: any) {
    this.patientService.apiPutPatient(id, data)
      .subscribe((result1) => {
        console.log("result", result1);
        swal({
          title: "Modification avec succès!",
          text: "Le Patient est modifié !",
          icon: "success",
          timer: 4000
        });
        this.dialogRef.close();
        this.router.navigate(['/patient']);
      })
    console.warn(data);
  }

}
