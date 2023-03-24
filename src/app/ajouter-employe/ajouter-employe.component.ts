import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserServiceService } from 'app/_services/user-service.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-ajouter-employe',
  templateUrl: './ajouter-employe.component.html',
  styleUrls: ['./ajouter-employe.component.css']
})
export class AjouterEmployeComponent implements OnInit {
  employe: any;
  constructor(public dialogRef: MatDialogRef<AjouterEmployeComponent>, private userService: UserServiceService, private router: Router) { }
  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  roles = [
    { id: "ROLE_ADMINISTRATEUR", value: "ADMINISTATEUR" },
    { id: "ROLE_CHEF_SERVICE", value: "CHEF_SERVICE" },
    { id: "ROLE_MEDECIN", value: "MEDECIN" },
    { id: "ROLE_TECHNICIAN", value: "TECHNICIAN" },
    { id: "ROLE_INFERMIER", value: "INFERMIER" },
    { id: "ROLE_RECEPTIONISTE", value: "RECEPTIONISTE" }]
  specialites = [
    { id: "NULL", value: "NONE" },
    { id: "ANESTHÉSIOLOGIE", value: "ANESTHÉSIOLOGIE" },
    { id: "ANDROLOGIE", value: "ANDROLOGIE" },
    { id: "CARDIOLOGIE", value: "CARDIOLOGIE" },
    { id: "CHIRURGIE", value: "CHIRURGIE" },
    { id: "CHIRURGIE_CARDIAQUE", value: "CHIRURGIE_CARDIAQUE" },
    { id: "CHIRURGIE_ESTHÉTIQUE", value: "CHIRURGIE_ESTHÉTIQUE" },
    { id: "CHIRURGIE_GÉNÉRALE", value: "CHIRURGIE_GÉNÉRALE" },
    { id: "CHIRURGIE_PÉDIATRIQUE", value: "CHIRURGIE_PÉDIATRIQUE" },
    { id: "CHIRURGIE_MAXILLO_FACIALE", value: "CHIRURGIE_MAXILLO_FACIALE" },
    { id: "CHIRURGIE_PÉDIATRIQUE", value: "CHIRURGIE_PÉDIATRIQUE" },
    { id: "CHIRURGIE_THORACIQUE", value: "CHIRURGIE_THORACIQUE" },
    { id: "CHIRURGIE_VASCULAIRE", value: "CHIRURGIE_VASCULAIRE" },
    { id: "NEUROCHIRURGIE", value: "NEUROCHIRURGIE" },
    { id: "DERMATOLOGIE", value: "DERMATOLOGIE" },
    { id: "ENDOCRINOLOGIE", value: "ENDOCRINOLOGIE" },
    { id: "GASTRO_ENTÉROLOGIE", value: "GASTRO_ENTÉROLOGIE" },
    { id: "GÉRIATRIE", value: "GÉRIATRIE" },
    { id: "GYNÉCOLOGIE", value: "GYNÉCOLOGIE" },
    { id: "HÉMATOLOGIE", value: "DERMATOLOGIE" },
    { id: "HÉPATOLOGIE", value: "HÉPATOLOGIE" },
    { id: "NEUROLOGIE", value: "NEUROLOGIE" },
    { id: "ODONTOLOGIE", value: "ODONTOLOGIE" },
    { id: "OPHTALMOLOGIE", value: "OPHTALMOLOGIE" },
    { id: "PÉDIATRIE", value: "PÉDIATRIE" },
    { id: "PNEUMOLOGIE", value: "PNEUMOLOGIE" },
    { id: "RHUMATOLOGIE", value: "RHUMATOLOGIE" },
  ]
  insertEmployee(data: any) {
    console.log("Inserting employee");
    if (data.spécialité == "") {
      console.log("vide");
      data.spécialité = "NULL";
    }
    this.userService.postEmployee(data)
      .subscribe((result1) => {
        console.log("result", result1);
        swal({
          title: "Ajout avec succès !",
          text: "L'employe avec l 'id :" + data.id + "et le nom " + data.nom + " " + data.prenom + "est ajouté !",
          icon: "success",
          timer: 1000
        });
        this.dialogRef.close();
        this.router.navigate(['/table-list']);
      })
    console.warn(data);
  }
  isEnable: boolean = true;
  onChange(data) {
    console.log(data)
    console.log(this.isEnable);
    if (data === "ROLE_MEDECIN")
      this.isEnable = !this.isEnable;
  }
}
