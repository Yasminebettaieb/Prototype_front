import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CongeService } from 'app/_services/conge.service';
import { UserAuthService } from 'app/_services/user-auth.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-ajouter-conge',
  templateUrl: './ajouter-conge.component.html',
  styleUrls: ['./ajouter-conge.component.css']
})
export class AjouterCongeComponent implements OnInit {
  conge: any;

  constructor(
    private congeService: CongeService,
    private router: Router,
    private authService: UserAuthService,
    public dialogRef: MatDialogRef<AjouterCongeComponent>) { }
  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();

  }
  types = [
    { id: "Congé payé", value: "Congé payé" },
    { id: "Congé sans solde", value: "Congé sans solde" },
    { id: "Congé annuel", value: "Congé annuel" },
    { id: "Congé d'examen", value: "Congé d'examen" },
    { id: "Congé de formation", value: "Congé de formation" },
    { id: "Congé maladie", value: "Congé maladie" },
    { id: "Congé maternité", value: "Congé maternité" }];

  insertEmployee(data: any) {
    console.log("Inserting employee");
    data.idUser = Number(this.authService.getId());
    this.congeService.PostConge(data)
      .subscribe((result1) => {
        console.log("result", result1);
        swal({
          title: "Ajout avec succès !",
          text: "La demande  est passé !",
          icon: "success",
          timer: 4000
        });
        this.dialogRef.close();

      })
    console.warn(data);
  }
}
