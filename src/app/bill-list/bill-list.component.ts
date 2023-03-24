import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AjoutBillComponent } from 'app/ajout-bill/ajout-bill.component';
import { PatientService } from 'app/_services/patient/patient.service';
import  swal from 'sweetalert';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.scss']
})
export class BillListComponent implements OnInit {

  id_patient: any;
  bills: any[] = [];
  listePatient: any;

  constructor(private http: HttpClient,    private router: Router ,private patientService: PatientService, private dialog : MatDialog ) { }

  ngOnInit() {
    this.patientService.getAllPatient().subscribe(data => {
      this.listePatient = data;
      console.log("patients :", this.listePatient);
    });
    this.fetchBills();
  }

  fetchBills() {
    const apiUrl = 'http://localhost:8090/api/facture/';

    this.http.get(apiUrl).subscribe((data: any[]) => {
      if (this.id_patient) {
        this.bills = data.filter((bill) => bill.id_patient === this.id_patient);
      } else {
        this.bills = data;
      }
    });
  }
  addBill(){

      let dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = "50%";
      this.dialog.open(AjoutBillComponent, dialogConfig)
        .afterClosed()
        .subscribe(() => this.ngOnInit());
    
  }
  deleteBill(id : any){
    Swal.fire({
      title: 'Êtes-vous sûr de vouloir effacer cette facture ?',
      icon: 'error',
      showCancelButton: true,
      confirmButtonText: 'Oui',
      cancelButtonText: 'Non',

    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.patientService.deleteFacure(id).subscribe((results) => {
          console.warn("result", results);
        });
        swal({
          title: "Ajout avec succès !",
          icon: "success",
          timer: 2000
        });
        window.location.reload();

      }});

      } 

  

}
