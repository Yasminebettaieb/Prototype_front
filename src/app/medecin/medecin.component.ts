import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SiteTimerService } from 'app/site-timer.service';
import { UserAuthService } from 'app/_services/user-auth.service';
import * as Chartist from 'chartist';

@Component({
  selector: 'app-medecin',
  templateUrl: './medecin.component.html',
  styleUrls: ['./medecin.component.scss']
})
export class MedecinComponent implements OnInit {
    item : any;
    item1 : any;
    private siteOpened: Date;
    appointments: any[];


    currentTime: string;
    timeSinceOpened: number;
    startTime: Date;
    today: string;
    id: any;

    constructor(private http: HttpClient,private siteTimer: SiteTimerService , private userid : UserAuthService) {     this.siteOpened = new Date();
    }
 

  ngOnInit() {

    this.id = this.userid.getId();
    console.error(" welcome to your space ");
    this.today = new Date().toISOString().slice(0, 10);

    /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */
    this.http.get("http://localhost:8085/api/users/countUsers").subscribe(data => {
      this.item = data;
      console.log(this.item);
    })
    this.http.get("http://localhost:8090/api/patients/countPatients").subscribe(data => {
      this.item1 = data;
      console.log(this.item1);
    })
   
    setInterval(() => {
      this.updateTime();
    }, 1000);


    this.startTime = this.siteTimer.getStartTime();
    setInterval(() => {
      const now = new Date();
      this.timeSinceOpened = now.getTime() - (this.startTime.getTime() + 3600000);
        }, 1000);
  this.getAppointments(this.id);
      }

      updateTime() {
        // Get the current time and format it
        const now = new Date();
        this.currentTime = now.toLocaleTimeString();
    
      }
      

  getAppointments(id : any) {
    this.http.get<any[]>('http://localhost:8090/api/rdv/getByIdMedecinToday/' +this.id + '/'+ this.today).subscribe(
      data => {
        this.appointments = data;
      },
      error => {
        console.log(error);
      }
    );
    }
}
