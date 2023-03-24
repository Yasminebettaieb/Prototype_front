import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UpdateEmpComponent } from 'app/update-emp/update-emp.component';
import { UserServiceService } from 'app/_services/user-service.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-update-edt',
  templateUrl: './update-edt.component.html',
  styleUrls: ['./update-edt.component.scss']
})
export class UpdateEdtComponent implements OnInit {

  edt: any;
  id: any;
  constructor(private apiService: UserServiceService, private router: Router, public dialogRef: MatDialogRef<UpdateEmpComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
    this.id = data;
  }

  ngOnInit(): void {
    this.loadEMP(this.id);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  loadEMP(id: any) {
    this.apiService.getItemEdt(`${id}`).subscribe(
      edt => {
        edt
        this.edt = edt;
        console.log(this.edt);

      },
      error => {
        console.log(error);
      }
    );
  }
  OnupdateEDT(id: string, data: any) {
    this.apiService.apiPutEmp(id, data).subscribe((result1) => {
      console.log("result", result1);
      this.dialogRef.close();
      this.router.navigate(['/user-profile']);
    })
    swal({
      title: "Modification avec succès!",
      text: "L 'EDT  avec l 'id : " + " " + id + "  est modifié !",
      icon: "success",
      timer: 4000
    });

    console.warn(data);
  }

}
