import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AddPatientBlocComponent } from 'app/add-patient-bloc/add-patient-bloc.component';
import { ViewDiagnostiqueComponent } from 'app/view-diagnostique/view-diagnostique.component';
import { ViewPatientComponent } from 'app/view-patient/view-patient.component';
import { ViewordonnanceComponent } from 'app/viewordonnance/viewordonnance.component';
import { PatientService } from 'app/_services/patient/patient.service';
import { UserAuthService } from 'app/_services/user-auth.service';
import { UserServiceService } from 'app/_services/user-service.service';
import  swal from 'sweetalert';

@Component({
  selector: 'app-view-dossier',
  templateUrl: './view-dossier.component.html',
  styleUrls: ['./view-dossier.component.scss']
})
export class ViewDossierComponent implements OnInit {

  constructor( private authService: UserAuthService,public http: HttpClient,
    private userService: UserServiceService,
    private router: Router, private dialog: MatDialog, private _Activatedroute:ActivatedRoute,
 private patientService: PatientService){}

  public consultation : any;
  public patients: any;
  idDoctor:any;
  irm:any;
  rdv:any;
  id_patient:any;
  rooms: any;
  getItem(id : any) {
    return this.http.get("http://localhost:8090/api/dossier/imagerie/"+id);

  }
  getRdv(id : any) {
    return this.http.get("http://localhost:8090/api/dossier/rdv/"+id);

  }
  getRoom(id : any) {
    return this.http.get("http://localhost:8070/api/blocs/findroom/"+id);

  }

  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe(params => { 
      this.id_patient = params.get('id_patient'); 
  });
    console.log(this.authService.getId());
    this.idDoctor = Number(this.authService.getId());
      this.patientService.getConsultation(this.id_patient).subscribe(data => {
      console.log("consultation : ")
      this.consultation = data;
      console.log(this.consultation);
      console.log(data);
    }),
    this.patientService.getPatientfromDossier(this.id_patient).subscribe(data => {
      this.patients = data;
      console.log(this.patients);
    });
    this.getItem(this.id_patient).subscribe(data => {
      this.irm = data;
      console.log(this.irm);
      console.log(data);
    }),
    this.getRoom(this.id_patient).subscribe(rooms => { 
      this.rooms = rooms;
      console.log(this.rooms);
    }),
    this.getRdv(this.id_patient).subscribe(rendezvous => {
      this.rdv = rendezvous;
      console.log(this.rdv);
    });
   }


    afficherDiagnostique(id: any) {
      let dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = false;
      dialogConfig.autoFocus = true;
      dialogConfig.width = "40%";
      dialogConfig.height="40%";
      dialogConfig.data = id;
      this.dialog.open(ViewDiagnostiqueComponent, dialogConfig)
        .afterClosed()
        .subscribe(() => this.ngOnInit());
    }
    
    
    viewOrdonnace(id :string ,idpatient:string){
    this.patientService.getOrdonnance(id).subscribe(data => {
      console.log("Ordonnace :", data);
    });
    let dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = false;
      dialogConfig.autoFocus = true;
      dialogConfig.width = "80%";
      dialogConfig.height= "60%";
      dialogConfig.data = [id , idpatient ,this.idDoctor];
      this.dialog.open(ViewordonnanceComponent, dialogConfig)
        .afterClosed()
        .subscribe(() => this.ngOnInit());
    
    }
    
    viewPatient(item: any) {
      let dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = "60%";
      dialogConfig.height = "50%";
      dialogConfig.data = item;
      this.dialog.open(ViewPatientComponent, dialogConfig);
    }
  
    assignPatient() {
      let dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = false;
      dialogConfig.autoFocus = true;
      dialogConfig.width = "50%";
      this.dialog.open(AddPatientBlocComponent, dialogConfig)
        .afterClosed()
        .subscribe(() => this.ngOnInit());
    }
  
    
    test(idConsultation: any) {
      console.log("Inserting ordonnance");
      this.patientService.postOrdonnance(idConsultation)
        .subscribe((result1) => {
          console.log("result", result1);
          swal({
            title: "Ajout avec succès !",
            icon: "success",
            timer: 4000
          });
        })
    
    
    }
    
    

  }
  







  


