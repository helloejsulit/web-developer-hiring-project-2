import { Injectable } from "@angular/core";
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from "@angular/router";

import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { UserPolicy } from "../interfaces/user.interface";
import { map, take } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class PolicyResolverService implements Resolve<any> {
  constructor(private auth: AuthService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.auth.getCurrentUser$().pipe(
      take(1),
      map((u) => {
        return u.policy;
      })
    );
  }
}
