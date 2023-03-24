import { Component, OnInit } from '@angular/core';
import { SiteTimerService } from 'app/site-timer.service';
import * as Chartist from 'chartist';
@Component({
  selector: 'app-chef-service',
  templateUrl: './chef-service.component.html',
  styleUrls: ['./chef-service.component.scss']
})
export class ChefServiceComponent implements OnInit {

  currentTime: string;
  timeSinceOpened: number;
  startTime: Date;
  constructor(private siteTimer: SiteTimerService) { }
  
  ngOnInit() {
    setInterval(() => {
      this.updateTime();
    }, 1000);


    this.startTime = this.siteTimer.getStartTime();
    setInterval(() => {
      const now = new Date();
      this.timeSinceOpened = now.getTime() - (this.startTime.getTime() + 3600000);
        }, 1000);

    

}

updateTime() {
  // Get the current time and format it
  const now = new Date();
  this.currentTime = now.toLocaleTimeString();

}
}