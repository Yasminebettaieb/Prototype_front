import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PatientService } from 'app/_services/patient/patient.service';
import swal from 'sweetalert';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-ajout-dcom',
  templateUrl: './ajout-dcom.component.html',
  styleUrls: ['./ajout-dcom.component.scss']
})
export class AjoutDcomComponent implements OnInit {
  listePatient: any;
  types: string[] = ['Hystéroscopie', 'Echographie', 'Urographie intraveineuse', 'Scintigraphie', 'Scanner', 'Ostéodensitométrie'];


  constructor(private patientService: PatientService,
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<AjoutDcomComponent>,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.patientService.getAllPatient().subscribe(data => {
      this.listePatient = data;
      console.log("patients :", this.listePatient);
    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  file: File;
  fileMin: File;
  rapport: File;
  rapportMin: File;
  insertImagerie(data: any): void {
    this.spinner.show();
    this.patientService.upload(this.file, this.rapport, data.id_patient, data.type, data.dateCreation).subscribe((result1) => {
      this.spinner.hide();
      swal({
        title: "Ajout avec succès !",
        text: "l'imagerie et le rapport du patient  avec l 'id :" + data.id_patient + "est ajouté !",
        icon: "success",
        timer: 4000
      });
      window.location.reload();
      this.dialogRef.close();
    });
  }
  onFileChange(event) {
    this.file = event.target.files[0];
    const fr = new FileReader();
    fr.onload = (evento: any) => {
      this.fileMin = evento.target.result;
    };
    fr.readAsDataURL(this.file);
  }
  onFileChange2(event) {
    this.rapport = event.target.files[0];
    const fr = new FileReader();
    fr.onload = (evento: any) => {
      this.rapportMin = evento.target.result;
    };
    fr.readAsDataURL(this.rapport);
  }

}
