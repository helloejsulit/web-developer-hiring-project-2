import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../providers/auth.service";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    let url = state.url;

    return this.authService.getAuthState$().pipe(
      map((auth: boolean) => {
        if (auth) {
          return true;
        } else {
          this.router.navigate(["/login"]);
        }
      })
    );
  }

  checkLogin = (url: string) => {
    console.log(url);
  };
}
