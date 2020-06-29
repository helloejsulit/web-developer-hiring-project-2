import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { UserService } from "./user.service";
import { Subject, BehaviorSubject } from "rxjs";
import { User } from "../interfaces/user.interface";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  serverURL = environment.serverURL + "/auth";
  currentUser$: Subject<User> = new Subject<User>();
  isLoggedIn$: BehaviorSubject<Boolean> = new BehaviorSubject<Boolean>(false);

  constructor(private http: HttpClient, private userService: UserService) {
    this.userService.getUserData().then((u) => {
      if (u) {
        this.isLoggedIn$.next(true);
        this.currentUser$.next(u);
      }
    });
  }

  login = (userData) => {
    return this.http
      .post<User>(`${this.serverURL}/authenticateUser`, userData)
      .pipe(
        map((u) => {
          this.currentUser$.next(u);
          this.isLoggedIn$.next(true);
          this.userService.saveUserData(u);
          return u;
        })
      );
  };

  logout = () => {
    this.currentUser$.next();
    this.isLoggedIn$.next(false);
    this.userService.removeUserData();
  };

  getCurrentUser$ = () => {
    return this.currentUser$.asObservable();
  };

  getAuthState$ = () => {
    return this.isLoggedIn$.asObservable();
  };
}
