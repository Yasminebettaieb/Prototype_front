import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PatientService } from 'app/_services/patient/patient.service';
import { AjouterRdvComponent } from '../ajouter-rdv/ajouter-rdv.component';
import Swal from 'sweetalert2';
import { ModifierRdvComponent } from '../modifier-rdv/modifier-rdv.component';
import { UserServiceService } from 'app/_services/user-service.service';

@Component({
  selector: 'app-rdvtoday',
  templateUrl: './rdvtoday.component.html',
  styleUrls: ['./rdvtoday.component.scss']
})
export class RdvtodayComponent implements OnInit {
  date: any;
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private patientService: PatientService,
    public userService: UserServiceService,
    private dialog: MatDialog, public dialogRef: MatDialogRef<RdvtodayComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
    this.date = data;
  }
  rdv: any;
  ngOnInit(): void {
    this.patientService.getRdvToday(this.date).subscribe(data => {
      this.rdv = data;
      console.log(this.rdv);
    })
  }
  ajouterRdv(date: any) {
    let dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "40%";
    dialogConfig.data = date;
    this.dialog.open(AjouterRdvComponent, dialogConfig)
      .afterClosed()
      .subscribe(() => this.ngOnInit());
  }
  modifierRdv(id: any) {
    let dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "40%";
    dialogConfig.data = id;
    console.log(id);
    this.dialog.open(ModifierRdvComponent, dialogConfig)
      .afterClosed()
      .subscribe(() => this.ngOnInit());
  }
  deleteRdv(idRdv: any) {
    Swal.fire({
      title: 'Êtes-vous sûr de vouloir effacer ce Rendez-vous ?',
      icon: 'error',
      showCancelButton: true,
      confirmButtonText: 'Oui',
      cancelButtonText: 'Non',

    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.patientService.deleteRdv(idRdv).subscribe((results) => {
          console.warn("result", results);
        })
        Swal.fire(
          'Supprimé !',
          'Rendez-vous supprimé !',
          'success'
        );
        window.location.reload();
      } else if (result.isDismissed) {
        Swal.fire(
          'Annuler',
          'Rendez-vous restauré',
          'error');
      }
    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
