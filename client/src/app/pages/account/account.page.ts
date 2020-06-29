import { Component, OnInit } from "@angular/core";
import { User } from "src/app/interfaces/user.interface";
import { AuthService } from "src/app/providers/auth.service";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Component({
  selector: "app-account",
  templateUrl: "./account.page.html",
  styleUrls: ["./account.page.scss"],
})
export class AccountPage implements OnInit {
  currentUser$: Observable<User>;
  isLoggedIn: boolean;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.getAuthState$().subscribe((authState: boolean) => {
      this.isLoggedIn = authState;
    });
    this.currentUser$ = this.authService.getCurrentUser$();
  }

  viewSummary = ($event) => {
    this.router.navigate([$event.url]);
  };

  login = ($event) => {
    this.router.navigate([$event]);
  };

  logout = () => {
    this.authService.logout();
    this.router.navigate(["/app/plans"]);
  };
}
