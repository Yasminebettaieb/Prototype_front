import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PatientService } from 'app/_services/patient/patient.service';

@Component({
  selector: 'app-view-patient',
  templateUrl: './view-patient.component.html',
  styleUrls: ['./view-patient.component.scss']
})
export class ViewPatientComponent implements OnInit {

  description: any;
  patient: any;
  Days :any;
  

  constructor(public dialogRef: MatDialogRef<ViewPatientComponent>,
    @Inject(MAT_DIALOG_DATA) data, private patientService: PatientService) {
    this.description = data;
  }
  ngOnInit(): void {
    var date1 = new Date(this.description.dateEntree); 
    var date2 = new Date(this.description.dateSortie); 
    
      var Time = date2.getTime() - date1.getTime(); 
     this.Days = Time / (1000 * 3600 * 24);
    this.loadPatient();
  }
  loadPatient() {
    this.patientService.getPatient(`${this.description.idpatient}`).subscribe(data => {
      this.patient = data;
      console.log(this.patient);
      console.log("here");
      console.log(data);
    }
    );
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
