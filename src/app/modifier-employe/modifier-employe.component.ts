import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Employee } from 'app/table-list/table-list.component';

@Component({
  selector: 'app-modifier-employe',
  templateUrl: './modifier-employe.component.html',
  styleUrls: ['./modifier-employe.component.css']
})
export class ModifierEmployeComponent implements OnInit {
  description: any;

  constructor(public dialogRef: MatDialogRef<ModifierEmployeComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
    this.description = data;
    this.description.sp = this.description.spécialité;
  }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
