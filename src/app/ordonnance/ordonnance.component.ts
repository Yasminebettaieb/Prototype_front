import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PatientService } from 'app/_services/patient/patient.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-ordonnance',
  templateUrl: './ordonnance.component.html',
  styleUrls: ['./ordonnance.component.scss']
})
export class OrdonnanceComponent implements OnInit {
  public description: any;
  public searchText: string;
  public dataSource: any = [];
  public value = 'Clear me';
  public myValue: string = ""; 
   ordonnance: any;
  public id :any  ;
  public DefaultdataSource: any[] = [];
  constructor(public dialogRef: MatDialogRef<OrdonnanceComponent>,   @Inject(MAT_DIALOG_DATA) data ,private patientService: PatientService, private router: Router) {
    
      this.description = data;
  }
  

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }




  insertMedicament(data :any) {
  
    console.log("Inserting emploi");
    console.log(data);
    if ((data.nom) || (data.medicamentType) || (data.instructions)
        || (data.dateCreation) ) {
      this.patientService.postMedicament(this.description,data)
        .subscribe((result1) => {
          console.log("result", result1);
          swal({
            title: "Ajout avec succès !",
            text: "Le medicament est ajouté !",
            icon: "success",
            timer: 2000,
          });
  
          this.dialogRef.close();
        })
        this.dialogRef.close();
  
      console.warn(data);
    }
    else {
      swal({
        title: "Alert ! ",
        text: "Il existe des informations manquantes..",
        icon: "error",
        timer: 7000,
        dangerMode: true,
      }).then(function (isConfirm) {
        if (isConfirm) {
  
          this.dialogRef.close();
  
        }
      })
  
    }
    }

}


