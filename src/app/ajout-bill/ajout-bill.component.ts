import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PatientService } from 'app/_services/patient/patient.service';
import { UserServiceService } from 'app/_services/user-service.service';
import  swal from 'sweetalert';

@Component({
  selector: 'app-ajout-bill',
  templateUrl: './ajout-bill.component.html',
  styleUrls: ['./ajout-bill.component.scss']
})
export class AjoutBillComponent implements OnInit {

  facture: any;
  listePatient :any;
  constructor(public dialogRef: MatDialogRef<AjoutBillComponent>,private patientService : PatientService, private userService: UserServiceService, private router: Router) { }
  ngOnInit(): void {
    this.patientService.getAllPatient().subscribe(data => {
      this.listePatient = data;
      console.log("patients :", this.listePatient);
    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  types = [

    { id: "NULL", value: "NONE" },
    { id: "Facture d'hospitalisation", value: "   Facture d'hospitalisation" },
    { id: "Facture de soins infirmiers", value: "Facture de soins infirmiers" },
    { id: "Facture de chirurgie", value: "Facture de chirurgie" },
    { id: "Facture de radiologie", value: "Facture de radiologie" },
    { id: "Facture de laboratoire", value: "Facture de laboratoire" },
    { id: "Facture d'ambulance", value: "Facture d'ambulance" },
    { id: "Facture de médicaments", value: "Facture de médicaments" },
    { id: "Facture de consultation", value: "Facture de consultation" },
    { id: "Facture de matériel médical", value: "Facture de matériel médical" },
    { id: "Facture de thérapie physique", value: "Facture de thérapie physique" },
    { id: "Facture de soins intensifs", value: "Facture de soins intensifs" },
    { id: "Facture d'urgences", value: "Facture d'urgences" },
    { id: "Facture de soins palliatifs", value: "Facture de soins palliatifs" },
    { id: "Facture de traitement de la douleur", value: "Facture de traitement de la douleur" },
  ]
  insertFacture(data: any) {
    console.log("Inserting Fact");

    this.userService.postFact(data)
      .subscribe((result1) => {
        console.log("result", result1);
        swal({
          title: "Ajout avec succès !",
          icon: "success",
          timer: 4000
        });
        this.dialogRef.close();
      })
    console.warn(data);
  }

 
}
