import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Emp } from 'app/user-profile/user-profile.component';
import { UserServiceService } from 'app/_services/user-service.service';

@Component({
  selector: 'app-view-emp',
  templateUrl: './view-emp.component.html',
  styleUrls: ['./view-emp.component.scss']
})
export class ViewEmpComponent implements OnInit {
  description: any;
  Emploi: any;

  constructor(public dialogRef: MatDialogRef<ViewEmpComponent>,
    @Inject(MAT_DIALOG_DATA) data, private apiService: UserServiceService) {
    this.description = data;
  }
  ngOnInit(): void {
    this.loadProduits();
  }
  loadProduits() {
    this.apiService.getItemEdt(`${this.description}`).subscribe(data => {
      this.Emploi = data;
      console.log(this.Emploi);
      console.log("here");
      console.log(data);
    }
    );
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
