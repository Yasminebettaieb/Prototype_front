import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AjouterEmpComponent } from 'app/ajouter-emp/ajouter-emp.component';
import { AjouterEmployeComponent } from 'app/ajouter-employe/ajouter-employe.component';
import { UpdateEdtComponent } from 'app/update-edt/update-edt.component';
import { UpdateEmpComponent } from 'app/update-emp/update-emp.component';
import { UserServiceService } from 'app/_services/user-service.service';
import { Timestamp } from 'rxjs';
import Swal from 'sweetalert2';
export class Emp {

  constructor(
    public id: number,
    public heureSupplementaire: number,
    public nombreHeures: number,
    public heureDebut: Timestamp<any>,
    public heureFin: Timestamp<any>,
    public dateDebut: Timestamp<any>,
    public dateFin: Timestamp<any>,
    
  ) { }
}
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})


export class UserProfileComponent implements OnInit {


  editForm!: FormGroup;
  constructor(public http: HttpClient,
    private apiService: UserServiceService, private router: Router, private dialog: MatDialog, private fb: FormBuilder) { }

  public searchText: string;
  public dataSource: any = [];
  public value = 'Clear me';
  public myValue: string = "";
  public DefaultdataSource: any[] = [];




  getItem() {
    return this.http.get("http://localhost:8091/api/emploi/");

  }
  Search() {
    if (this.myValue && this.myValue !== "") {
      this.dataSource = [this.DefaultdataSource.find(i => i.nom == this.myValue)];
      console.log(this.dataSource);

    } else
      this.dataSource = this.DefaultdataSource;
  }
  deleteCategories(idCateogrie: any) {
    Swal.fire({
      title: 'Êtes-vous sûr de vouloir effacer ce employé ?',
      icon: 'error',
      showCancelButton: true,
      confirmButtonText: 'Oui',
      cancelButtonText: 'Non',

    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.apiService.deleteCategories(idCateogrie).subscribe((results) => {
          console.warn("result", results);
        })
        Swal.fire(
          'Supprimé !',
          'Employé supprimé !',
          'success'
        );
        window.location.reload();
      } else if (result.isDismissed) {
        Swal.fire(
          'Annuler',
          'Employé restauré',
          'error');
      }
    });
  }

  deleteEmp(idEmp: any) {
    Swal.fire({
      title: 'Êtes-vous sûr de vouloir effacer cet EDT ?',
      icon: 'error',
      showCancelButton: true,
      confirmButtonText: 'Oui',
      cancelButtonText: 'Non',

    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.apiService.deleteEmp(idEmp).subscribe((results) => {
          console.warn("result", results);
        })
        Swal.fire(
          'Supprimé !',
          'EDT supprimé !',
          'success'
        );
        window.location.reload();
      } else if (result.isDismissed) {
        Swal.fire(
          'Annuler',
          'EDT restauré',
          'error');
      }
    });
  }
  public items: any;
  ngOnInit() {
    this.getItem().subscribe(data => {
      this.items = data;
      console.log(this.items);
      console.log(data);
    }),
      this.editForm = this.fb.group({
        id: [''],
        nombreHeures: [''],
        heureSupplementaire: [''],
        dateDebut: [''],
        dateFin: [''],
        heureDebut: [''],
        heureFin: [''],
      });
  }


  getEmp() {
  }
  ajouterEmploye() {
    let dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    this.dialog.open(AjouterEmployeComponent, dialogConfig)
      .afterClosed()
      .subscribe(() => this.ngOnInit());
  }

  ajouterEmp() {
    let dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    this.dialog.open(AjouterEmpComponent, dialogConfig)
      .afterClosed()
      .subscribe(() => this.ngOnInit());
  }
  modifierEmploye(id:any) {
    let dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    dialogConfig.data = id;
    this.dialog.open(UpdateEmpComponent, dialogConfig)
      .afterClosed()
      .subscribe(() => this.ngOnInit());
  }

  modifierEDT(id :any) {
    let dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    dialogConfig.data = id;
    this.dialog.open(UpdateEdtComponent, dialogConfig)
      .afterClosed()
      .subscribe(() => this.ngOnInit());
  }
 


}
