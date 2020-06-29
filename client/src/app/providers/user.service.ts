import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { User } from "../interfaces/user.interface";

@Injectable({
  providedIn: "root",
})
export class UserService {
  serverURL = environment.serverURL + "/user";

  constructor(private storage: Storage, private http: HttpClient) {}

  getUserData = async () => {
    return await this.storage.get("userData");
  };

  saveUserData = (userData) => {
    this.storage.set("userData", userData);
  };

  getUserById = (userId) => {
    return this.http.post(`${this.serverURL}/getUserById`, { id: userId });
  };

  removeUserData = () => {
    this.storage.remove("userData");
  };
}
