import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Consultation_medcin } from 'app/ajout-consultation/ajout-consultation.component';
import { Employee } from 'app/table-list/table-list.component';
import { Emp } from 'app/user-profile/user-profile.component';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  PATH_API = "http://localhost:8085/api/auth/"
  requestHeader = new HttpHeaders({
    "No-Auth": "True"
  });
  constructor(private httpclient: HttpClient,
    private userAuthService: UserAuthService) { }
  public login(loginData) {
    return this.httpclient.post(this.PATH_API + "signin", loginData, { headers: this.requestHeader });
  }
  public roleMatch(allowedRoles): boolean {
    let isMatch = false;
    const userRoles: any = this.userAuthService.getRoles();
    if (userRoles != null && userRoles) {
      for (let j = 0; j < allowedRoles.length; j++) {
        if (userRoles[0] === allowedRoles[j]) {
          isMatch = true;
          return isMatch;
        } else {
          isMatch = false;
        }
      }
      return isMatch;
    }
  }
  public get() {
    return this.httpclient.get("http://localhost:8085/api/users/all/");
  }

  public getItem(id: any) {
    return this.httpclient.get("http://localhost:8085/api/users/" + id);
  }
  
  public getUser(id: any) {
    return this.httpclient.get("http://localhost:8085/api/users/oneuser/" + id);
  }
  public getCong(id: string) {
    return this.httpclient.get("http://localhost:8091/api/conge/" + id);
  }
  public add(id: string, idEmp: string) {
    return this.httpclient.get("http://localhost:8085/api/users/addEmp/" + id + "/" + idEmp);
  }
  public getItemEdt(id: string) {
    return this.httpclient.get("http://localhost:8091/api/emploi/findOne/" + id);
  }
  public deleteCategories(id: any) {
    console.log("worked");
    return this.httpclient.delete("http://localhost:8085/api/users" + "/" + id);
  }

  public deleteConge(id: any) {
    console.log("worked");
    return this.httpclient.delete("http://localhost:8091/api/conge/byuser" + "/" + id);
  }
  public changepassword(id: any, body: any) {
    return this.httpclient.put("http://localhost:8085/api/users/changepassword/" + id, body);
  }

  public deleteEmp(id: any) {
    console.log("worked");
    return this.httpclient.delete("http://localhost:8091/api/emploi" + "/" + id);
  }
  public apiPutCat(id: any, body: any) {
    return this.httpclient.put("http://localhost:8085/api/users/" + id, body);
  }

  public apiPutEmp(id: any, body: any) {
    return this.httpclient.put("http://localhost:8091/api/emploi/" + id, body);
  }

  public postEmployee(body: Employee) {
    return this.httpclient.post("http://localhost:8085/api/users/", body);
  }
  public postFact(body: any) {
    return this.httpclient.post("http://localhost:8090/api/facture/", body);
  }

  public postConsultation(body: Consultation_medcin) {
    return this.httpclient.post("http://localhost:8080/patient-ms/api/consultation/", body);
  }
  public postEmp(body: Emp) {
    return this.httpclient.post("http://localhost:8091/api/emploi/", body);
  }
}
