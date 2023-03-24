
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PatientService } from 'app/_services/patient/patient.service';
import {MatListModule} from '@angular/material/list';
import Swal from 'sweetalert2';
import swal from 'sweetalert';

import { OrdonnanceComponent } from 'app/ordonnance/ordonnance.component';
import pdfMake from "pdfmake/build/pdfmake";  
import pdfFonts from "pdfmake/build/vfs_fonts";  
import { UpdateMedicamentComponent } from 'app/update-medicament/update-medicament.component';
import { cloudkms } from 'googleapis/build/src/apis/cloudkms';
import { formatDate } from '@angular/common';
import { UserServiceService } from 'app/_services/user-service.service';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

export class Medicament {
constructor(
  public nom: string,
  public medicamentType: string,
  public instructions: string,

) { }
}
@Component({
  selector: 'app-viewordonnance',
  templateUrl: './viewordonnance.component.html',
  styleUrls: ['./viewordonnance.component.scss']
})

export class ViewordonnanceComponent implements OnInit {
  description: any;
  Medcin:any;
  Ordonnance: any;
  patient : any;
   table_meds: Medicament[];
   data: any;
   myDate = new Date();
   date: any;


  constructor(public dialogRef: MatDialogRef<ViewordonnanceComponent>,
    @Inject(MAT_DIALOG_DATA) data , private patientService: PatientService ,private router: Router, private dialog: MatDialog,private EmpService : UserServiceService,
) {
    this.description = data;

  }
  ngOnInit(): void {
    this.GetOrdonnance();
    this.GetPatient();
    this.GetEmploye();
    console.log(this.description[0] + " et " + this.description[1]);
    this.patientService.getOrdonnance(`${this.description[0]}`).subscribe(data => {
      this.Ordonnance = data;
      this.table_meds= this.Ordonnance.medicamentList;
      console.log(this.table_meds);
      console.log("here");
      console.log(data);
    }

    );

  }
 

GetPatient() {
    this.patientService.getPatient(`${this.description[1]}`).subscribe(data => {
      this.patient = data;
      console.log(this.patient);
      console.log("patient");
      console.log(data);
    }
    );
  }
  GetEmploye() {
    this.EmpService.getUser(`${this.description[2]}`).subscribe(data => {
      this.Medcin = data;
      console.log(this.Medcin);
      console.log("Medcin");
      console.log(data);
    }
    );
  }

  generatePDF() { 
    this.date = formatDate(this.myDate, 'yyyy-MM-dd', 'en-US').toString(); 


    var docDefinition = {
      content: [],
      styles: {
          f18: {
              fontSize: 18
          },
          strong: {
              bold: true
          },
          header: {
            fontSize: 22,
            bold: true
          },      
          test :{
            color :'#181b70',
          }

      },
  };
  docDefinition.content.push({ columns:[{text: 'Docteur :  ' + this.Medcin.nom +" " + this.Medcin.prenom, style : 'test'},{text:''},{text: "16 rue de marseille" ,style :'test'}]});
  docDefinition.content.push({ columns:[{text: 'Specialité : ' + this.Medcin.spécialité, style :'test'},{text:''} ,{text: "Avenue Habib Borguiba" ,style :'test'}]});
  docDefinition.content.push({ columns:[{text: 'Matricule :  ' + this.Medcin.matricule, style :'test'},{text :' ' },{text: "Téléphone : 72548484", style :'test'}]});
  docDefinition.content.push({ columns:[{canvas:  [{ type: 'line', x1: 0, y1: 5, x2: 595-2*40, y2: 5, lineWidth:1 ,style :'test' }]},{text:""}]});
  docDefinition.content.push(' ');




  docDefinition.content.push({ columns:[{text: 'Clinque', bold:true},{text :''},{text: "SmartClinic"}]});
  docDefinition.content.push({ columns:[{text: 'Date :', bold:true },{text :''} ,{text:"Tunis , " +this.date}]});
  docDefinition.content.push(' ');
  docDefinition.content.push(' ');
    docDefinition.content.push(' ');

  docDefinition.content.push({ columns:[{text: 'Ordonnace détails :', bold:true  }]});
  docDefinition.content.push(' ');
  docDefinition.content.push({ columns:[{text: 'Madame ou Monsieur :'+' '+ this.patient.nom + " "+ this.patient.prenom ,bold : true}]});

    docDefinition.content.push(' ');
    docDefinition.content.push(' ');
    docDefinition.content.push(' ');


  for(var i=0;i<this.table_meds.length;i++) {
    docDefinition.content.push({ columns:[{text:" - " + this.table_meds[i].nom} , {text: this.table_meds[i].medicamentType} ,{text: this.table_meds[i].instructions} ]});

    
    docDefinition.content.push(' ');
}

   
    pdfMake.createPdf(docDefinition).open();
    pdfMake.createPdf(docDefinition).download('Oronnance-'+this.patient.nom +'_'+this.patient.prenom+'.pdf');
  
  }  
  GetOrdonnance() {
    this.patientService.getOrdonnance(`${this.description[0]}`).subscribe(data => {
      this.Ordonnance = data;
      console.log(this.Ordonnance);
      console.log("here");
      console.log(data);
    }
    );
  }
insertMed(id : any){
  let dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = false;
  dialogConfig.autoFocus = true;
  dialogConfig.width = "50%";
  dialogConfig.data = id;
  this.dialog.open(OrdonnanceComponent, dialogConfig)
    .afterClosed()
    .subscribe(() => this.ngOnInit());
    
}

modifierMedicament(id: any) {
  let dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.width = "50%";
  dialogConfig.height="40%";
  dialogConfig.data = id;
  this.dialog.open(UpdateMedicamentComponent, dialogConfig)
    .afterClosed()
    .subscribe(() => this.ngOnInit());
}
  deleteMedicament(id:any,idOrd: any){
    Swal.fire({
      title: 'Êtes-vous sûr de vouloir effacer cet medicament ?',
      icon: 'error',
      showCancelButton: true,
      confirmButtonText: 'Oui',
      cancelButtonText: 'Non',

    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.patientService.deleteMed(id,idOrd).subscribe((result1) => {
          console.log("result", result1);
          swal({
            text: "Le medicament est supprimé !",
            icon: "success",
            timer: 2000,
          });
  
          this.dialogRef.close();
        });
        this.dialogRef.close();

      }
     
  })};

  onNoClick(): void {
    this.dialogRef.close();
  }}
function Ind(Ind: any, any: any) {
  throw new Error('Function not implemented.');
}
