import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SiteTimerService {
  private startTime: Date = new Date();
  
  getStartTime(): Date {
    return this.startTime;
  }
}


