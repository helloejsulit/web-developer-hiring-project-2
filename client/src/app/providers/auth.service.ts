import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  serverURL = environment.serverURL + "/auth";

  constructor(private storage: Storage, private http: HttpClient) {}

  login = (userData) => {
    return this.http.post(`${this.serverURL}/authenticateUser`, userData);
  };

  logout = () => {
    this.storage.remove("userData");
  };
}
