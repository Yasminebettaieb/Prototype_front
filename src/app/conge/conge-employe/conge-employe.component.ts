import { Component, OnInit } from '@angular/core';
import { CongeService } from 'app/_services/conge.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserAuthService } from 'app/_services/user-auth.service';
import { AjouterCongeComponent } from '../ajouter-conge/ajouter-conge.component';
@Component({
  selector: 'app-conge-employe',
  templateUrl: './conge-employe.component.html',
  styleUrls: ['./conge-employe.component.scss']
})
export class CongeEmployeComponent implements OnInit {

  constructor(public http: HttpClient,
    private congeService: CongeService,
    private authService: UserAuthService,
    private router: Router,
    private dialog: MatDialog) { }
  public searchText: string;
  public conge: any;
  ngOnInit(): void {
    console.log(this.authService.getId());
    const id = Number(this.authService.getId());
    this.congeService.GetForEmploye(id).subscribe(data => {
      this.conge = data;
      console.log(this.conge);
      console.log(data);
    })
  }
  ajouterConge() {
    let dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "40%";
    this.dialog.open(AjouterCongeComponent, dialogConfig)
      .afterClosed()
      .subscribe(() => this.ngOnInit());
  }
}
