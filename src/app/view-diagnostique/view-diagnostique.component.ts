import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import html2canvas from 'html2canvas';
import jsPDF, { Html2CanvasOptions } from 'jspdf'; 
@Component({
  selector: 'app-view-diagnostique',
  templateUrl: './view-diagnostique.component.html',
  styleUrls: ['./view-diagnostique.component.scss']
})
export class ViewDiagnostiqueComponent implements OnInit {

  description: any;
  Emploi: any;

  constructor(public dialogRef: MatDialogRef<ViewDiagnostiqueComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
    this.description = data;
  }
  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  
  public openPDF():void {
    let DATA = document.getElementById('htmlData') as HTMLBodyElement;
      
    html2canvas(DATA).then(canvas => {
        
        let fileWidth =300;
        let fileHeight = canvas.height * fileWidth / canvas.width;
        
        const FILEURI = canvas.toDataURL('image/png')
        let PDF = new jsPDF('portrait', 'mm', 'a4');
        let position = 0;
        PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)
        
        PDF.save('angular-demo.pdf');
    });     
  }
}



