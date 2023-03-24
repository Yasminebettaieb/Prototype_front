import { Component, OnInit } from '@angular/core';
import { PatientService } from 'app/_services/patient/patient.service';

@Component({
  selector: 'app-dossier-medicale',
  templateUrl: './dossier-medicale.component.html',
  styleUrls: ['./dossier-medicale.component.scss']
})
export class DossierMedicaleComponent implements OnInit {
  listePatient: any;
  selectedOption :any;
  constructor(private patientService : PatientService) { }

  ngOnInit(): void {
    this.patientService.getAllPatient().subscribe(data => {
      this.listePatient = data;
      console.log("patients :", this.listePatient);
    });
  }

}
