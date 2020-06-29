import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-login-button",
  templateUrl: "./login-button.component.html",
  styleUrls: ["./login-button.component.scss"],
})
export class LoginButtonComponent implements OnInit {
  @Output() onLogin = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  login = () => {
    this.onLogin.emit("/login");
  };
}
