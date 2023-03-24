import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AjouterEmployeComponent } from 'app/ajouter-employe/ajouter-employe.component';
import { Emp } from 'app/user-profile/user-profile.component';
import { UserServiceService } from 'app/_services/user-service.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-ajouter-emp',
  templateUrl: './ajouter-emp.component.html',
  styleUrls: ['./ajouter-emp.component.scss']
})
export class AjouterEmpComponent implements OnInit {
  emp: any;
  constructor(public dialogRef: MatDialogRef<AjouterEmployeComponent>, private userService: UserServiceService, private router: Router) { }
  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  insertEmp(data: Emp) {
    console.log("Inserting emploi");
    console.log(data);
    if ((data.heureDebut) || (data.heureFin) || (data.dateDebut)
      || (data.dateFin) || (data.nombreHeures)) {
      this.userService.postEmp(data)
        .subscribe((result1) => {
          console.log("result", result1);
          swal({
            title: "Ajout avec succès !",
            text: "L'emploi du temps est ajouté !",
            icon: "success",
            timer: 1000,
          });
          this.dialogRef.close();
          this.router.navigate(['/user-profile']);
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

          window.location.reload();

        }
      })

    }
  }

}

