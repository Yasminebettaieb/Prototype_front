import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private httpclient: HttpClient) { }
  //******************************** PATIENT *********************************** */
  public getAllPatient(): Observable<any> {
    return this.httpclient.get("http://localhost:8080/patient-ms/api/patients");
  }
  public postPatient(body: any): Observable<any> {
    return this.httpclient.post("http://localhost:8080/patient-ms/api/patients", body);
  }

  public deleteMed(id: any, idOrd: any): Observable<any> {
    return this.httpclient.delete("http://localhost:8080/patient-ms/api/ordonnance/medicament/" + id + "/" + idOrd);
  }
  public postMedicament(id: any, body: any): Observable<any> {
    return this.httpclient.post("http://localhost:8080/patient-ms/api/ordonnance/addmedicament/" + id, body);
  }

  public postOrdonnance(id: any): Observable<any> {
    return this.httpclient.get("http://localhost:8080/patient-ms/api/ordonnance/addordonnance/" + id);
  }
  public deletePaitnet(id: any): Observable<any> {
    console.log("worked");
    return this.httpclient.delete("http://localhost:8080/patient-ms/api/patients" + "/" + id);
  }

  public deleteFacure(id: any): Observable<any> {
    console.log("worked");
    return this.httpclient.delete("http://localhost:8090/api/facture/"  + id);
  }
  public getConsultation(id : any){
    return this.httpclient.get("http://localhost:8090/api/dossier/consultationPatient/"+id);

  }
  public getPatient(id: any): Observable<any> {
    return this.httpclient.get("http://localhost:8080/patient-ms/api/patients/" + id);
  }
  public getPatientfromDossier(id: any): Observable<any> {
    return this.httpclient.get("http://localhost:8090/api/dossier/patient/" + id);
  }

  

  public getMedicament(id: string): Observable<any> {
    return this.httpclient.get("http://localhost:8080/patient-ms/api/ordonnance/medicament/" + id);
  }
  public getOrdonnance(id: string): Observable<any> {
    return this.httpclient.get("http://localhost:8080/patient-ms/api/ordonnance/getordonnance/" + id);
  }
  public apiPutPatient(id: any, body: any): Observable<any> {
    return this.httpclient.put("http://localhost:8080/patient-ms/api/patients/" + id, body);
  }
  public apiPutMedicament(id: any, body: any): Observable<any> {
    return this.httpclient.put("http://localhost:8080/patient-ms/api/ordonnance/updateMedicament/" + id, body);
  }


  //**************************** RDV ********************************** */
  public getRdv(): Observable<any> {
    return this.httpclient.get("http://localhost:8080/patient-ms/api/rdv");
  }
  public uploadImg(body: any): Observable<any> {
    return this.httpclient.post("http://localhost:8090/api/cloud/add", body);
  }
  public getRdvToday(date: any): Observable<any> {
    return this.httpclient.get("http://localhost:8080/patient-ms/api/rdv/getByDate/" + date);
  }
  public postRoom(body: any): Observable<any> {
    return this.httpclient.post("http://localhost:8070/api/blocs/addPatientinTheBloc", body);
  }


  public postRdv(body: any): Observable<any> {
    return this.httpclient.post("http://localhost:8080/patient-ms/api/rdv", body);

  }

  public deleteRdv(id: string): Observable<any> {
    return this.httpclient.delete("http://localhost:8080/patient-ms/api/rdv/" + id);
  }
  public deleteConsultation(id: any): Observable<any> {
    return this.httpclient.delete("http://localhost:8080/patient-ms/api/consultation/" + id);
  }
  public modifierRdv(id: string, body: any): Observable<any> {
    return this.httpclient.put("http://localhost:8080/patient-ms/api/rdv/" + id, body);
  }
  public getOneRdv(id: any): Observable<any> {
    return this.httpclient.get("http://localhost:8080/patient-ms/api/rdv/" + id);
  }
  public getAllDoctor(): Observable<any> {
    return this.httpclient.get("http://localhost:8080/user-ms/api/users/role/ROLE_MEDECIN");
  }
  public getAllRadiologue(): Observable<any> {
    return this.httpclient.get("http://localhost:8080/user-ms/api/users/role/ROLE_TECHNICIAN");
  }

  //********************************imagerie ********************************* */


  public getAllIrm(): Observable<any> {
    return this.httpclient.get("http://localhost:8090/api/cloud/getAll");
  }

  public getAllBlocs(): Observable<any> {
    return this.httpclient.get("http://localhost:8070/api/blocs/all");
  }

  public upload(image: File, rapport: File, idPatient: any, type: any, date: any): Observable<any> {
    const formData = new FormData();
    formData.append('file', image);
    formData.append('rapport', rapport);
    formData.append('patientId', idPatient);
    formData.append('type', type);
    formData.append('date', date);
    return this.httpclient.post("http://localhost:8090/api/cloud/add", formData);
  }

  public deleteImage(id: any): Observable<any> {
    return this.httpclient.delete("http://localhost:8090/api/cloud/delete/" + id);
  }
  public getImageById(id: any): Observable<any> {
    return this.httpclient.get("http://localhost:8090/api/cloud/getById/" + id);
  }


}
