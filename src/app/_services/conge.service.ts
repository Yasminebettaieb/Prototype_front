import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CongeService {

  constructor(private httpclient: HttpClient,) { }
  public getForChef() {
    return this.httpclient.get("http://localhost:8080/rh-ms/api/conge");
  }
  public getForAdmin() {
    return this.httpclient.get("http://localhost:8080/rh-ms/api/conge/findAllForAdmin");
  }
  public AccepterForChef(id: any) {
    return this.httpclient.get("http://localhost:8080/rh-ms/api/conge/acceptCongeChefService" + "/" + id);
  }
  public RefuserForChef(id: any) {
    return this.httpclient.get("http://localhost:8080/rh-ms/api/conge/refuseCongeChefService" + "/" + id);
  }
  public AccepterForAdmin(id: any) {
    return this.httpclient.get("http://localhost:8080/rh-ms/api/conge/acceptCongeAdmin" + "/" + id);
  }
  public RefuserForAdmin(id: any) {
    return this.httpclient.get("http://localhost:8080/rh-ms/api/conge/refuseCongeAdmin" + "/" + id);
  }
  public GetForEmploye(id: any) {
    return this.httpclient.get("http://localhost:8080/rh-ms/api/conge/getByIdUser" + "/" + id);
  }
  public PostConge(body: any) {
    return this.httpclient.post("http://localhost:8080/rh-ms/api/conge", body);
  }
  public DeleteConge(id: any) {
    return this.httpclient.delete("http://localhost:8080/rh-ms/api/conge" + "/" + id);
  }
  public ModifierConge(id: any, body: any) {
    return this.httpclient.put("http://localhost:8080/rh-ms/api/conge" + id, body);
  }
}
