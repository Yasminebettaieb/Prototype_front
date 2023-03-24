import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SiteTimerService } from 'app/site-timer.service';
import * as Chartist from 'chartist';
import * as $ from 'jquery';
import 'owl.carousel';
@Component({
  selector: 'app-receptionniste',
  templateUrl: './receptionniste.component.html',
  styleUrls: ['./receptionniste.component.scss']
})
export class ReceptionnisteComponent implements OnInit {
  appointments: any[];
  data: any[];
  currentTime: string;
  timeSinceOpened: number;
  startTime: Date;
  private siteOpened: Date;
  today: string;
  constructor(private http: HttpClient,private siteTimer: SiteTimerService) {     this.siteOpened = new Date();
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
}
