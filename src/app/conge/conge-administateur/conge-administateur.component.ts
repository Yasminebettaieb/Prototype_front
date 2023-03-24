import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CongeService } from 'app/_services/conge.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-conge-administateur',
  templateUrl: './conge-administateur.component.html',
  styleUrls: ['./conge-administateur.component.scss']
})
export class CongeAdministateurComponent implements OnInit {

  constructor(public http: HttpClient,
    private congeService: CongeService, private router: Router, private dialog: MatDialog, private fb: FormBuilder) { }
  public searchText: string;

  public conge: any;
  ngOnInit(): void {
    this.congeService.getForAdmin().subscribe(data => {
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
        this.congeService.AccepterForAdmin(idconge).subscribe((results) => {
          console.warn("result", results);
          this.router.navigate(['/congeAdmin']);
          window.location.reload();
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
        this.congeService.RefuserForAdmin(idconge).subscribe((results) => {
          console.warn("result", results);
          this.router.navigate(['/congeAdmin']);
          window.location.reload();
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
  DeleteConge(idConge: any) {
    Swal.fire({
      title: 'Êtes-vous sûr de vouloir effacer cette demande  ?',
      icon: 'error',
      showCancelButton: true,
      confirmButtonText: 'Oui',
      cancelButtonText: 'Non',

    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.congeService.DeleteConge(idConge).subscribe((results) => {
          console.warn("result", results);
        })
        Swal.fire(
          'Supprimé !',
          'Demande de congé  supprimée !',
          'success'
        );
        window.location.reload();
      } else if (result.isDismissed) {
        Swal.fire(
          'Annuler',
          'Demande de congé restaurée',
          'error');
      }
    });
  }
}
