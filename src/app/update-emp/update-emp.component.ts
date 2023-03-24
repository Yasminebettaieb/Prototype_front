import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, RouterLink } from '@angular/router';
import { UserServiceService } from 'app/_services/user-service.service';
import swal from 'sweetalert';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update-emp',
  templateUrl: './update-emp.component.html',
  styleUrls: ['./update-emp.component.css']
})
export class UpdateEmpComponent implements OnInit {
  Employee: any;
  id: any;
  constructor(private apiService: UserServiceService, private router: Router, public dialogRef: MatDialogRef<UpdateEmpComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
    this.id = data;
  }

  ngOnInit(): void {
    this.loadProduits(this.id);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  loadProduits(id: any) {
    this.apiService.getItem(`${id}`).subscribe(
      Employee => {
        Employee
        this.Employee = Employee;
        console.log(this.Employee);

      },
      error => {
        console.log(error);
      }
    );
  }
  Onupdate(id: string, data: any) {
    this.apiService.apiPutCat(id, data)
      .subscribe((result1) => {
        console.log("result", result1);
        swal({
          title: "Modification avec succès!",
          text: "L 'employe avec l 'id :" + id + "est modifié !",
          icon: "success",
          timer: 4000
        });
        this.dialogRef.close();
        this.router.navigate(['/table-list']);
      })
    console.warn(data);
  }

}

