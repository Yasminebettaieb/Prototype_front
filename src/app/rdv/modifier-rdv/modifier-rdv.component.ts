import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PatientService } from 'app/_services/patient/patient.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-modifier-rdv',
  templateUrl: './modifier-rdv.component.html',
  styleUrls: ['./modifier-rdv.component.scss']
})
export class ModifierRdvComponent implements OnInit {
  rdv: any;
  id: any
  constructor(private router: Router,
    public dialogRef: MatDialogRef<ModifierRdvComponent>,
    private httpClient: HttpClient,
    private patientService: PatientService,
    @Inject(MAT_DIALOG_DATA) data) {
    this.id = data;
  }

  ngOnInit(): void {
    console.log("*********************** id ");
    console.log(this.id)
    this.patientService.getOneRdv(this.id).subscribe(
      thisRdv => {
        thisRdv
        this.rdv = thisRdv;
        console.log(this.rdv);
      },
      error => {
        console.log(error);
      }
    );
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  modifierRdv(id: string, data: any) {
    data.patient = { id_patient: data.patient };
    if (data.patient.id_patient == "") {
      data.patient.id_patient = 0
    }
    if (data.idMedecin == "") {
      data.idMedecin = 0
    }
    console.log(data.patient.id_patient)
    console.log("cliquer modifier");
    console.log("*******data", data);
    this.patientService.modifierRdv(id, data)
      .subscribe((result1) => {
        console.log("result", result1);
        swal({
          title: "Modification avec succès!",
          text: "Le RDV avec l 'id :" + id + "est modifié !",
          icon: "success",
          timer: 4000
        });
        window.location.reload();
        this.dialogRef.close();
        this.router.navigate(['/rdvreceptionniste']);
      })
    console.warn(data);
  }

}
