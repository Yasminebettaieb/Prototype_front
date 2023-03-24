import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ViewEmpComponent } from 'app/view-emp/view-emp.component';
import { UserServiceService } from 'app/_services/user-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-empchoices',
  templateUrl: './view-empchoices.component.html',
  styleUrls: ['./view-empchoices.component.scss']
})
export class ViewEmpchoicesComponent implements OnInit {
  description: any
  public searchText: string;
  public dataSource: any = [];
  public value = 'Clear me';
  public myValue: string = "";
  public DefaultdataSource: any[] = [];
  constructor(public dialogRef: MatDialogRef<ViewEmpComponent>,
    @Inject(MAT_DIALOG_DATA) data, private apiService: UserServiceService, public http: HttpClient,) {
    this.description = data;
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  getItem() {
    return this.http.get("http://localhost:8091/api/emploi/");
  }



  public items: any;
  ngOnInit() {
    this.getItem().subscribe(data => {
      this.items = data;
      console.log(this.items);
      console.log(data);
    });
  }
  addEmp(idEmp: any, iduser: any) {
    console.log(iduser + " " + idEmp)
    this.apiService.add(iduser, idEmp).subscribe((result1) => {
      console.log("result", result1);
    });
    Swal.fire(
      'Emploi du temps Ajouté  !',
      ' ',
      'success'
    );
    window.location.reload();
  }



  getEmp() {
  }
}

