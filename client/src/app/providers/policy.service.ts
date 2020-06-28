import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class PolicyService {
  serverURL = environment.serverURL;

  constructor(private http: HttpClient) {}

  getAllPolicies = (): Observable<Object> => {
    return this.http.get(`${this.serverURL}/policies/list`);
  };
}
