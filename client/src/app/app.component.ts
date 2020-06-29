import { Component } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { AuthService } from "./providers/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  appPages = [
    {
      title: "Policy Summary",
      url: "/app/account/policy-summary",
      icon: "briefcase",
    },
    {
      title: "Payments History",
      url: "/app/account/policy-payments",
      icon: "cash",
    },
  ];

  appTitle = "Widgets Inc.";
  headerImg = "assets/svg/shapes.svg";
  headerName = "Menu";
  isLoggedIn: boolean;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.authService.getAuthState$().subscribe((authState: boolean) => {
        this.isLoggedIn = authState;
      });
    });
  }

  logOut = () => {
    this.authService.logout();
  };
}
