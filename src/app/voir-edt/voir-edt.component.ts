import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserAuthService } from 'app/_services/user-auth.service';
import { UserServiceService } from 'app/_services/user-service.service';

@Component({
  selector: 'app-voir-edt',
  templateUrl: './voir-edt.component.html',
  styleUrls: ['./voir-edt.component.scss']
})
export class VoirEdtComponent implements OnInit {

  constructor(public http: HttpClient,
    private apiService: UserServiceService, private authService: UserAuthService, private router: Router, private dialog: MatDialog, private fb: FormBuilder) { }

  public searchText: string;
  public dataSource: any = [];
  public value = 'Clear me';
  public myValue: string = "";
  public DefaultdataSource: any[] = [];



  getEmpOne(id: any) {
    return this.http.get("http://localhost:8091/api/emploi/" + id);

  }
  getItem() {
    return this.http.get("http://localhost:8085/api/users/all");

  }

  public edts: any;
  public user: any;
  public items: any;
  ngOnInit() {

    console.log(this.authService.getId());
    const id = Number(this.authService.getId());
    this.apiService.getUser(this.authService.getId()).subscribe(data1 => {
      this.user = data1;
      console.log(this.user);


      this.getEmpOne(this.user.idEmploi).subscribe(data => {
        this.edts = data;
        console.log(this.edts);
        console.log(data);
      });
    });


  }
}
