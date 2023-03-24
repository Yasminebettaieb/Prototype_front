import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CalendarOptions } from '@fullcalendar/angular';
import frLocale from '@fullcalendar/core/locales/fr';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { RdvtodayComponent } from '../rdvtoday/rdvtoday.component';
import { Router } from '@angular/router';
import { UserAuthService } from 'app/_services/user-auth.service';

@Component({
  selector: 'app-rdvmedecin',
  templateUrl: './rdvmedecin.component.html',
  styleUrls: ['./rdvmedecin.component.scss']
})
export class RdvmedecinComponent implements OnInit {

  Events: any[] = [];
  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this),
    navLinks: true,
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    locale: frLocale,
    eventColor: '#00bcd4',
  };
  locales = [frLocale];
  handleDateClick(arg: any) {
    alert('date click! ' + arg.dateStr)
  }
  eventRender(event: any, element: any, view: any) {
    element.find('span.fc-title').attr('data-toggle', 'tooltip');
    element.find('span.fc-title').attr('title', event.title);
  }
  constructor(private httpClient: HttpClient, private dialog: MatDialog, private router: Router, private authService: UserAuthService) { }
  onDateClick(res: any) {
    console.log(res);
    /*this.router.navigate(['rdvtoday'], { state: { date: res.dateStr } });*/
    let dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "75%";
    dialogConfig.data = res.dateStr;
    this.dialog.open(RdvtodayComponent, dialogConfig)
      .afterClosed()
      .subscribe(() => this.ngOnInit());
  }
  id = Number(this.authService.getId());
  rdv: any[] = [];
  ngOnInit() {
    setTimeout(() => {
      return this.httpClient
        .get("http://localhost:8080/patient-ms/api/rdv/getByIdMedecin/" + this.id)//bch nzidha fil back
        .subscribe((res: any) => {
          console.log(res);
          for (const resultat of res) {
            let title1 = "Patient : " + resultat.patient.nom + " " + resultat.patient.prenom + "  Heure : " + resultat.heure;
            let date1 = resultat.date;
            console.log(title1);
            console.log(date1);
            this.Events.push({ color: "#00bcd4", title: title1 + '\n\n', date: date1 });
          }
          console.log(this.rdv);
          console.log(this.rdv);
          console.log(this.id);
        })
    }, 2200);
    setTimeout(() => {
      this.calendarOptions = {
        initialView: 'dayGridMonth',
        dateClick: this.onDateClick.bind(this),
        events: this.Events,
      };
    }, 2500);
  }

}
