import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'app/_services/user-service.service';
import { Timestamp } from "rxjs";
import Swal from 'sweetalert2';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModifierEmployeComponent } from '../modifier-employe/modifier-employe.component'
import { AjouterEmployeComponent } from 'app/ajouter-employe/ajouter-employe.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';
import { UpdateEmpComponent } from 'app/update-emp/update-emp.component';
import { ViewEmpComponent } from 'app/view-emp/view-emp.component';
import { ViewEmpchoicesComponent } from 'app/view-empchoices/view-empchoices.component';
@Pipe({
  name: 'filter'

})


export class NamePipe implements PipeTransform {
  transform(items: any[], filter: string): any {
    if (!items || !filter) {
      return items;
    }
    return items.filter(item => JSON.stringify(item).toLowerCase().indexOf(filter.toLowerCase()) !== -1);
  }
}

export class Employee {

  constructor(
    public id: number,
    public nom: string,
    public prenom: string,
    public cin: string,
    public email: string,
    public password: string,
    public phoneNumber: String,
    public emailConfirmed: boolean,
    public dateNaissance: Timestamp<any>,
    public adresse: string,
    public gender: string,
    public emploiDto: Timestamp<any>,
    public matricule: string,
    public etatCompte: boolean,
    public dateEmploi: Timestamp<any>,
    public role: string,
    public specialite: string,
  ) { }
}
@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})


export class TableListComponent implements OnInit {



  editForm!: FormGroup;
  constructor(public http: HttpClient,
    private apiService: UserServiceService,
    private router: Router, private dialog: MatDialog,
    private fb: FormBuilder) { }

  public searchText: string;
  public dataSource: any = [];
  public value = 'Clear me';
  public myValue: string = "";
  public DefaultdataSource: any[] = [];



  getEmp() {
    return this.http.get("http://localhost:8091/api/emploi/");

  }
  getItem() {
    return this.http.get("http://localhost:8085/api/users/all");

  }
  Search() {
    if (this.myValue && this.myValue !== "") {
      this.dataSource = [this.DefaultdataSource.find(i => i.nom == this.myValue)];
      console.log(this.dataSource);

    } else
      this.dataSource = this.DefaultdataSource;
  }
  
 

  getClient() { }
  public edts: any;
  public items: any;
  ngOnInit() {
    this.getItem().subscribe(data => {
      this.items = data;
      console.log(this.items);
      console.log(data);
    }),
      this.getEmp().subscribe(data => {
        this.edts = data;
        console.log(this.edts);
        console.log(data);
      });
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
        });
         
        this.apiService.deleteConge(idCateogrie).subscribe(() => {
          console.log(`Congé of user ${idCateogrie} deleted successfully`);
        });

        Swal.fire(
          'Supprimé !',
          'Employé supprimé !',
          'success'
        );

     

      } else if (result.isDismissed) {
        Swal.fire(
          'Annuler',
          'Employé restauré',
          'error');
      }
    });
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
  modifierEmploye(id: any) {
    let dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    dialogConfig.data = id;
    this.dialog.open(UpdateEmpComponent, dialogConfig)
      .afterClosed()
      .subscribe(() => this.ngOnInit());
  }
  test(id: any) {
    let dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "30%";
    dialogConfig.data = id;
    this.dialog.open(ViewEmpComponent, dialogConfig)
      .afterClosed()
      .subscribe(() => this.ngOnInit());

  }
  viewEmploye(item: any) {
    let dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "30%";
    dialogConfig.data = item;
    this.dialog.open(ModifierEmployeComponent, dialogConfig);
  }

  viewEmp(item: any) {
    let dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "65%";
    dialogConfig.data = item;
    this.dialog.open(ViewEmpchoicesComponent, dialogConfig);
  }
  //************************* Sorting data *******************/
  orderHeader: string = '';
  isDescOrder: boolean = true;
  sort(headerName: string) {
    this.orderHeader = headerName;
    this.isDescOrder = !this.isDescOrder;
  }

}