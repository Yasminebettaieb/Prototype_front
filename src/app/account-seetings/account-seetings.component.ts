import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserAuthService } from 'app/_services/user-auth.service';
import { UserServiceService } from 'app/_services/user-service.service';
import swal from 'sweetalert';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-account-seetings',
  templateUrl: './account-seetings.component.html',
  styleUrls: ['./account-seetings.component.scss']
})
export class AccountSeetingsComponent implements OnInit {
  Employee: any;
  id: any;
  repass: any;
  mdp: any;
  dialogRef: any;
  constructor(private apiService: UserServiceService, private router: Router, private Auth: UserAuthService) {
  }


  ngOnInit(): void {
    const idAuth = Number(this.Auth.getId());
    this.id = idAuth;
    this.loadProduits(this.id);
  }

  loadProduits(id: any) {
    this.apiService.getUser(`${id}`).subscribe(
      Employee => {
        Employee
        this.Employee = Employee;
        
        console.error(this.Employee.dateNaissance); 
        console.log(this.Employee);
      },
      error => {
        console.log(error);
      }
    );
  }
  Onupdate(id: string, data: any) {
    this.apiService.apiPutCat(id, data)
      .subscribe((result1) => {
        console.log("result", result1);
        swal({
          title: "Modification avec succès!",
          icon: "success",
          timer: 1000
        });

      })
    console.warn(data);
  }


  OnChange(id: string, data: any) {

    Swal.fire({
      title: 'Êtes-vous sûr de vouloir changer votre mot de passe  ?',
      icon: 'error',
      showCancelButton: true,
      confirmButtonText: 'Oui',
      cancelButtonText: 'Non',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        console.log("changement en cours ");
        console.error(data);

        this.apiService.changepassword(id, data)
          .subscribe((result1) => {
            console.log("result", result1);
            Swal.fire(
              '',
              'Mot de passe est changé !',
              'success'
            );
            window.location.reload();
          });

      }
      else if (result.isDismissed) {
        Swal.fire(
          'Annuler',
          'Image et rapport restauré',
          'error');
      }
    });
  }

}