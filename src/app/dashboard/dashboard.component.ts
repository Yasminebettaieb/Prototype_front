import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SiteTimerService } from 'app/site-timer.service';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CongeService } from 'app/_services/conge.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  appointments: any[];
  data: any[];
  currentTime: string;
  timeSinceOpened: number;
  startTime: Date;
  private siteOpened: Date;
  public searchText: string;

  public conge: any;
  today: string;
  constructor(private http: HttpClient,private siteTimer: SiteTimerService,private congeService: CongeService, private router: Router, private dialog: MatDialog, private fb: FormBuilder) {     this.siteOpened = new Date();
  }


  ngOnInit() {
    /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */
    this.today = new Date().toISOString().slice(0, 10);
    setInterval(() => {
      this.updateTime();
    }, 1000);


    this.startTime = this.siteTimer.getStartTime();
    setInterval(() => {
      const now = new Date();
      this.timeSinceOpened = now.getTime() - (this.startTime.getTime() + 3600000);
        }, 1000);
  

        this.congeService.getForAdmin().subscribe(data => {
          this.conge = data;
          console.log(this.conge);
          console.log(data);
        })
    this.getAppointments();
    
  }
  
  
  updateTime() {
    // Get the current time and format it
    const now = new Date();
    this.currentTime = now.toLocaleTimeString();

  }






  getAppointments() {
    this.http.get<any[]>('http://localhost:8090/api/rdv/getByDate/' + this.today).subscribe(
      data => {
        this.appointments = data;
      },
      error => {
        console.log(error);
      }
    );
    this.http.get<any[]>('http://localhost:8090/api/patients/getByDate/' + this.today).subscribe(
      data => {
        this.data = data; // assign received data to 'data' variable
        console.log(this.data);
      },
      error => {
        console.log(error);
      }
    );
    
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
