import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/providers/user.service";
import { User } from "src/app/interfaces/user.interface";
import { AuthService } from "src/app/providers/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-account",
  templateUrl: "./account.page.html",
  styleUrls: ["./account.page.scss"],
})
export class AccountPage implements OnInit {
  currentUser: User;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) {}

  async ngOnInit() {
    this.currentUser = await this.userService.getUserData();
    console.log(this.currentUser);
  }

  logout = () => {
    this.authService.logout();
    this.router.navigate(["/app/plans"]);
  };
}
