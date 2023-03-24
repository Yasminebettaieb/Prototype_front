import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PatientService } from 'app/_services/patient/patient.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-update-medicament',
  templateUrl: './update-medicament.component.html',
  styleUrls: ['./update-medicament.component.scss']
})
export class UpdateMedicamentComponent implements OnInit {

  medicament: any;
  id: any;
  constructor( private patientService: PatientService, private router: Router, public dialogRef: MatDialogRef<UpdateMedicamentComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
    this.id = data;
  }

  ngOnInit(): void {
    this.loadMedicament(this.id);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  loadMedicament(id: any) {
    this.patientService.getMedicament(`${id}`).subscribe(
       medicament => {
        medicament
        this.medicament = medicament;
        console.log(this.medicament);

      },
      error => {
        console.log(error);
      }
    );
  }
  Onupdate(id: string, data: any) {
    this.patientService.apiPutMedicament(id, data)
      .subscribe((result1) => {
        console.log("result", result1);
        swal({
          title: "Modification avec succès!",
          text: "Médicament est modifié !",
          icon: "success",
          timer: 4000
        });
        this.dialogRef.close();
      })
    console.warn(data);
  }
}

