import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { OrdonnanceComponent } from 'app/ordonnance/ordonnance.component';
import { ViewordonnanceComponent } from 'app/viewordonnance/viewordonnance.component';
import { PatientService } from 'app/_services/patient/patient.service';
import { UserServiceService } from 'app/_services/user-service.service';
import { Timestamp } from 'rxjs';
import  swal from 'sweetalert';
import Swal from 'sweetalert2';
export class  Consultation_medcin {

  constructor(
    public id_Consultation: number,
    public date: Timestamp<any>,
    public dateCreation:Timestamp<any>,
    public heure: Timestamp<any>,

    
  ) { }
}
@Component({
  selector: 'app-ajout-consultation',
  templateUrl: './ajout-consultation.component.html',
  styleUrls: ['./ajout-consultation.component.scss']
})
export class AjoutConsultationComponent implements OnInit {
 listeMedecin: any;
  listePatient: any;
  
  consultation: any;

  constructor(public http: HttpClient,
    private userService: UserServiceService,
    private router: Router, private dialog: MatDialog,
    private fb: FormBuilder , private patientService: PatientService) { }
    getItem() {
      return this.http.get("http://localhost:8080/patient-ms/api/consultation");
  
    }
    public items: any;
    
  ngOnInit(): void {
    this.patientService.getAllPatient().subscribe(data => {
      this.listePatient = data;
      console.log("patients :", this.listePatient);
    }),
    this.getItem().subscribe(data => {
      this.items = data;
      console.log(this.items);
      console.log(data);

    });
  }
  insertConsultation(data: any) {
    console.log("Inserting Consultation");
    console.log(data);
    if ((data.id_Consultation) || (data.date) || (data.heure)
      || (data.dateCreation) ) {
      this.userService.postConsultation(data)
        .subscribe((result1) => {
          console.log("result", result1);
          swal({
            title: "Ajout avec succès !",
            text: "La consultation est ajouté !",
            icon: "success",
            timer: 5000,
          });
          this.router.navigate(['/consultation']);
        })
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

          window.location.reload();

        }
      })

    }
  }
  deleteConsultation(id:any){
      Swal.fire({
        title: 'Êtes-vous sûr de vouloir effacer cette consultation ?',
        icon: 'error',
        showCancelButton: true,
        confirmButtonText: 'Oui',
        cancelButtonText: 'Non',
  
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          this.patientService.deleteConsultation(id).subscribe((results) => {
            console.warn("result", results);
          })
          Swal.fire(
            'Supprimé !',
            'Consultation supprimé !',
            'success'
          );
          window.location.reload();
        } else if (result.isDismissed) {
          Swal.fire(
            'Annuler',
            'Consultation restauré',
            'error');
        }
      });
    
  }
 viewOrdonnace(id :string ,idpatient:string){
  this.patientService.getOrdonnance(id).subscribe(data => {
    console.log("Ordonnace :", data);
  });
  let dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "80%";
    dialogConfig.height= "60%";
    dialogConfig.data = [id , idpatient];
    this.dialog.open(ViewordonnanceComponent, dialogConfig)
      .afterClosed()
      .subscribe(() => this.ngOnInit());

  }
 

 
  test(idConsultation: any) {
    console.log("Inserting ordonnance");
    this.patientService.postOrdonnance(idConsultation)
      .subscribe((result1) => {
        console.log("result", result1);
    
        window.location.reload();

      });
      window.location.reload();


  }

}
