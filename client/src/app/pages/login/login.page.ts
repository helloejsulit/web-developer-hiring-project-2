import { Component, OnInit } from "@angular/core";
import { MenuController } from "@ionic/angular";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "src/app/providers/auth.service";
import { take } from "rxjs/operators";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;

  constructor(
    private menu: MenuController,
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.buildLoginForm();
  }

  login = () => {
    const email = this.loginForm.get("email").value;
    const password = this.loginForm.get("password").value;
    const userData = { email, password };

    this.auth
      .login(userData)
      .pipe(take(1))
      .subscribe((u) => {
        if (u) this.router.navigate(["/app/account"]);
      });
  };

  buildLoginForm = () => {
    this.loginForm = this.fb.group({
      email: [
        "wilecoyote@acme.com",
        Validators.compose([Validators.required, Validators.email]),
      ],
      password: ["beepbeep", Validators.required],
    });
  };

  ionViewWillEnter() {
    this.menu.enable(false);
  }

  ionViewDidLeave() {
    this.menu.enable(true);
  }
}
