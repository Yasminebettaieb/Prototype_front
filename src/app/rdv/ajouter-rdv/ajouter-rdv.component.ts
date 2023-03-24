import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PatientService } from 'app/_services/patient/patient.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-ajouter-rdv',
  templateUrl: './ajouter-rdv.component.html',
  styleUrls: ['./ajouter-rdv.component.scss']
})
export class AjouterRdvComponent implements OnInit {
  rdv: any;
  constructor(private router: Router,
    public dialogRef: MatDialogRef<AjouterRdvComponent>,
    private httpClient: HttpClient,
    private patientService: PatientService)
    /*@Inject(MAT_DIALOG_DATA) data) {
    this.date = data;
  }*/ { }
  listeMedecin: any;
  listePatient: any;
  listeRadiologue : any;
  ngOnInit(): void {
    this.patientService.getAllPatient().subscribe(data => {
      this.listePatient = data;
      console.log("patients :", this.listePatient);
    })
    this.patientService.getAllDoctor().subscribe(data => {
      this.listeMedecin = data;
      console.log("medecin :", this.listeMedecin);
    })
    this.patientService.getAllRadiologue().subscribe(data => {
      this.listeRadiologue = data;
      console.log("radiologue :", this.listeRadiologue);
    })
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  insertRdv(data: any) {
    data.patient = { id_patient: data.patient };
    console.log(data);
    this.patientService.postRdv(data)
      .subscribe((result1) => {
        console.log("result", result1);
        swal({
          title: "Ajout de RDV avec succès !",
          icon: "success",
          timer: 4000
        });
        this.dialogRef.close();
        this.router.navigate(['/rdvreceptionniste']);
      })
    console.warn(data);
  }
}
