import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Route, Router } from '@angular/router';
import { CongeService } from 'app/_services/conge.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-conge-chefservice',
  templateUrl: './conge-chefservice.component.html',
  styleUrls: ['./conge-chefservice.component.scss']
})
export class CongeChefserviceComponent implements OnInit {

  constructor(public http: HttpClient,
    private congeService: CongeService,
    private router: Router) { }

  public searchText: string;

  public conge: any;
  ngOnInit(): void {
    this.congeService.getForChef().subscribe(data => {
      this.conge = data;
      console.log(this.conge);
      console.log(data);
    })
  }
  AccepterConge(idconge: any) {
    Swal.fire({
      title: 'Êtes-vous sûr de vouloir accepter cette demande  ?',
      icon: 'error',
      showCancelButton: true,
      confirmButtonText: 'Oui',
      cancelButtonText: 'Non',

    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.congeService.AccepterForChef(idconge).subscribe((results) => {
          console.warn("result", results);
          this.congeService.getForChef().subscribe(data => {
            this.conge = data;
            console.log(this.conge);
            console.log(data);
          });
        })
        Swal.fire(
          'Acceptée !',
          'Demande acceptée !',
          'success'
        );
      } else if (result.isDismissed) {
        Swal.fire(
          'Annuler',
          'Demande pas acceter',
          'error');
      }
    });
  }
  RefuserConge(idconge: any) {
    Swal.fire({
      title: 'Êtes-vous sûr de vouloir réfuser cette demande  ?',
      icon: 'error',
      showCancelButton: true,
      confirmButtonText: 'Oui',
      cancelButtonText: 'Non',

    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.congeService.RefuserForChef(idconge).subscribe((results) => {
          console.warn("result", results);
          this.congeService.getForChef().subscribe(data => {
            this.conge = data;
            console.log(this.conge);
            console.log(data);
          });
        })
        Swal.fire(
          'Acceptée !',
          'Demande réfusée !',
          'success'
        );

      } else if (result.isDismissed) {
        Swal.fire(
          'Annuler',
          'Demande pas réfuser',
          'error');
      }
    });
  }
}
