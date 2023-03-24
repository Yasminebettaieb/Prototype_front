import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CalendarOptions } from '@fullcalendar/angular';
import frLocale from '@fullcalendar/core/locales/fr';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { RdvtodayComponent } from '../rdvtoday/rdvtoday.component';
import { Router } from '@angular/router';
import { AjouterRdvComponent } from '../ajouter-rdv/ajouter-rdv.component';

@Component({
  selector: 'app-rdv-receptionniste',
  templateUrl: './rdv-receptionniste.component.html',
  styleUrls: ['./rdv-receptionniste.component.css']
})
export class RdvReceptionnisteComponent implements OnInit {
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
  constructor(private httpClient: HttpClient, private dialog: MatDialog, private router: Router) { }
  onDateClick(res: any) {
    console.log(res);
    /*this.router.navigate(['rdvtoday'], { state: { date: res.dateStr } });*/
    let dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "65%";
    dialogConfig.height="70%";
    dialogConfig.data = res.dateStr;
    this.dialog.open(RdvtodayComponent, dialogConfig)
      .afterClosed()
      .subscribe(() => this.ngOnInit());
  }

  rdv: any[] = [];
  ngOnInit() {
    setTimeout(() => {
      return this.httpClient
        .get('http://localhost:8080/patient-ms/api/rdv')
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
          console.log("event", this.Events);
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
  ajouterRdv() {
    let dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "40%";
    //dialogConfig.data = date;
    this.dialog.open(AjouterRdvComponent, dialogConfig)
      .afterClosed()
      .subscribe(() => this.ngOnInit());
  }

}
