import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UpdatePatientComponent } from 'app/update-patient/update-patient.component';
import { PatientService } from 'app/_services/patient/patient.service';
import { UserAuthService } from 'app/_services/user-auth.service';
import Swal from 'sweetalert2';
import { AjouterPatientComponent } from '../ajouter-patient/ajouter-patient.component';

@Component({
  selector: 'app-patient-receptionniste',
  templateUrl: './patient-receptionniste.component.html',
  styleUrls: ['./patient-receptionniste.component.css']
})
export class PatientReceptionnisteComponent implements OnInit {
  public searchText: string;

  constructor(public http: HttpClient,
    private patientService: PatientService,
    private dialog: MatDialog,
    private userAuthService: UserAuthService) { }
  public patients: any;
  public truerole: boolean;

  ngOnInit(): void {
    var role: [] = this.userAuthService.getRoles();
    const myrole = role.shift()
    const truerole = myrole === 'ROLE_RECEPTIONISTE';

    console.log(truerole);
    this.patientService.getAllPatient().subscribe(data => {
      this.patients = data;
      console.log(this.patients);
    })
  }
  ajouterPatient() {
    let dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    this.dialog.open(AjouterPatientComponent, dialogConfig)
      .afterClosed()
      .subscribe(() => this.ngOnInit());
  }

  deletePat(id: any) {
    Swal.fire({
      title: 'Êtes-vous sûr de vouloir effacer ce patient  ?',
      icon: 'error',
      showCancelButton: true,
      confirmButtonText: 'Oui',
      cancelButtonText: 'Non',

    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.patientService.deletePaitnet(id).subscribe((results) => {
          console.warn("result", results);
        })
        Swal.fire(
          'Supprimé !',
          'Patient supprimé !',
          'success'
        );
        window.location.reload();
      } else if (result.isDismissed) {
        Swal.fire(
          'Annuler',
          'Patient restauré',
          'error');
      }
    });
  }

  modifierPatient(id: any) {
    let dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    dialogConfig.data = id;
    this.dialog.open(UpdatePatientComponent, dialogConfig)
      .afterClosed()
      .subscribe(() => this.ngOnInit());
  }

}
