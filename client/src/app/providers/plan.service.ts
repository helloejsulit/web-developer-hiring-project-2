import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PlanService {
  serverURL = environment.serverURL + "/plans";

  constructor(private http: HttpClient) {}

  getAllPlans = (): Observable<Object> => {
    return this.http.get(`${this.serverURL}/list`);
  };

  getPlanById = (planId) => {
    return this.http.post(`${this.serverURL}/plan`, { id: planId });
  };
}
