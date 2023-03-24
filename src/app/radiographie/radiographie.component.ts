import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import swal from 'sweetalert';
import { PatientService } from 'app/_services/patient/patient.service';
import { AjoutDcomComponent } from 'app/ajout-dcom/ajout-dcom.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-radiographie',
  templateUrl: './radiographie.component.html',
  styleUrls: ['./radiographie.component.scss']
})


export class RadiographieComponent implements OnInit {
  irm: any;
  listePatient: any;
  constructor(
    public patientService: PatientService,
    private http: HttpClient,
    private dialog: MatDialog) { }

  getItem() {
    return this.http.get("http://localhost:8090/api/cloud/getAll");
  }
  ngOnInit(): void {
    this.getItem().subscribe(data => {
      this.irm = data;
      console.log(this.irm);
      console.log(data);
    }), this.patientService.getAllPatient().subscribe(data => {
      this.listePatient = data;
      console.log("patients :", this.listePatient);
    });
  }

  AjoutDcom() {
    let dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    this.dialog.open(AjoutDcomComponent, dialogConfig)
      .afterClosed()
      .subscribe(() => this.ngOnInit());
  }

  insertFile(data: any) {
    console.log("Inserting file");
    this.patientService.uploadImg(data)
      .subscribe((result1) => {
        console.log("result", result1);
        swal({
          title: "Ajout avec succès !",
          icon: "success",
          timer: 4000
        });
        window.location.reload();
      })
    console.warn(data);
  }
  deleteImagerie(id: any) {
    console.log("theeeeeeeeeeeeeeeeee id ", id);
    Swal.fire({
      title: 'Êtes-vous sûr de vouloir effacer cet image et rapport  ?',
      icon: 'error',
      showCancelButton: true,
      confirmButtonText: 'Oui',
      cancelButtonText: 'Non',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.patientService.deleteImage(id).subscribe((results) => {
          console.warn("result", results);
        })
        Swal.fire(
          'Supprimé !',
          'Image et rapport supprimés !',
          'success'
        );
        window.location.reload();
      } else if (result.isDismissed) {
        Swal.fire(
          'Annuler',
          'Image et rapport restauré',
          'error');
      }
    });
  }

}
