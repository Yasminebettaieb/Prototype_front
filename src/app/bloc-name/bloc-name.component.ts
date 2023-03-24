import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PatientService } from 'app/_services/patient/patient.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddPatientBlocComponent } from 'app/add-patient-bloc/add-patient-bloc.component';
import swal from 'sweetalert';
import Swal from 'sweetalert2';
import { ViewPatientComponent } from 'app/view-patient/view-patient.component';

@Component({
  selector: 'app-bloc-name',
  templateUrl: './bloc-name.component.html',
  styleUrls: ['./bloc-name.component.scss']
})
export class BlocNameComponent implements OnInit {
  rooms: any = {};
  listePatient: any;
  name: any;

  constructor(
    private _Activatedroute: ActivatedRoute,
    private patientService: PatientService, private http: HttpClient, private dialog: MatDialog) { }

  getItem(name: any) {
    return this.http.get("http://localhost:8070/api/blocs/Building/" + name + "/");

  }
  ngOnInit(): void {

    this._Activatedroute.paramMap.subscribe(params => {
      this.name = params.get('name');
    });
    this.getItem(this.name).subscribe(data => {
      this.rooms = data;
      console.log(this.rooms);
      console.log(data);
    });




  }
  Empty(id: any, body: any) {
    Swal.fire({
      title: 'Êtes-vous sûr de vouloir vider cette chambre ?',
      icon: 'error',
      showCancelButton: true,
      confirmButtonText: 'Oui',
      cancelButtonText: 'Non',

    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.http.put("http://localhost:8070/api/blocs/" + id, body)
          .subscribe((results) => {
            console.warn("result", results);
          })
        Swal.fire(
          '',
          'Chambre Maintenant vide  !',
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
  viewPatient(item: any) {
    let dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "40%";
    dialogConfig.height = "95%";
    dialogConfig.data = item;
    this.dialog.open(ViewPatientComponent, dialogConfig);
  }

  assignPatient() {
    let dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    this.dialog.open(AddPatientBlocComponent, dialogConfig)
      .afterClosed()
      .subscribe(() => this.ngOnInit());
  }






}

