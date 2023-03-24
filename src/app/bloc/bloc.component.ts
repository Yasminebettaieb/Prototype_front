import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from 'app/_services/patient/patient.service';

@Component({
  selector: 'app-bloc',
  templateUrl: './bloc.component.html',
  styleUrls: ['./bloc.component.scss']
})
export class BlocComponent implements OnInit {
  A='A';
  B='B';
  C='C';
 
  constructor() { }

  ngOnInit(): void {
  }
  

}
