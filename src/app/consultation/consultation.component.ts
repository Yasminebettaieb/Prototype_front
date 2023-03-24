
import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'app/_services/user-service.service';
import { Timestamp } from "rxjs";
import Swal from 'sweetalert2';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModifierEmployeComponent } from '../modifier-employe/modifier-employe.component'
import { AjouterEmployeComponent } from 'app/ajouter-employe/ajouter-employe.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';
import { UpdateEmpComponent } from 'app/update-emp/update-emp.component';
import { ViewEmpComponent } from 'app/view-emp/view-emp.component';
import { ViewEmpchoicesComponent } from 'app/view-empchoices/view-empchoices.component';
import { Consultation_medcin } from 'app/ajout-consultation/ajout-consultation.component';
import { ViewDiagnostiqueComponent } from 'app/view-diagnostique/view-diagnostique.component';
import { PatientService } from 'app/_services/patient/patient.service';
import  swal from 'sweetalert';
import { ViewordonnanceComponent } from 'app/viewordonnance/viewordonnance.component';
import { UserAuthService } from 'app/_services/user-auth.service';





@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss']
})
export class ConsultationComponent implements OnInit {


listeMedecin: any;
  listePatient: any;
  idDoctor:any;
  consultation: any;

  constructor( private authService: UserAuthService,public http: HttpClient,
    private userService: UserServiceService,
    private router: Router, private dialog: MatDialog,
    private fb: FormBuilder , private patientService: PatientService) { }
    getItem() {
      return this.http.get("http://localhost:8080/patient-ms/api/consultation");
  
    }
    public items: any;

    
  ngOnInit(): void {
    console.log(this.authService.getId());
     this.idDoctor = Number(this.authService.getId());

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
          window.location.reload();
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

  afficherDiagnostique(id: any) {
    let dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "40%";
    dialogConfig.height="40%";
    dialogConfig.data = id;
    this.dialog.open(ViewDiagnostiqueComponent, dialogConfig)
      .afterClosed()
      .subscribe(() => this.ngOnInit());
  }
  
  deleteConsultation(id:any){
      Swal.fire({
        title: 'Êtes-vous sûr de vouloir effacer ce employé ?',
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
    dialogConfig.data = [id , idpatient ,this.idDoctor];
    this.dialog.open(ViewordonnanceComponent, dialogConfig)
      .afterClosed()
      .subscribe(() => this.ngOnInit());

  }
 

 
  test(idConsultation: any) {
    console.log("Inserting ordonnance");
    this.patientService.postOrdonnance(idConsultation)
      .subscribe((result1) => {
        console.log("result", result1);
        swal({
          title: "Ajout avec succès !",
          icon: "success",
          timer: 4000
        });
        window.location.reload();

      })


  }

}