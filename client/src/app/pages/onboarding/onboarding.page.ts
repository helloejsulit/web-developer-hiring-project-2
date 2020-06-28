import { Component, OnInit } from "@angular/core";
import { MenuController } from "@ionic/angular";
import { Router } from "@angular/router";

@Component({
  selector: "app-onboarding",
  templateUrl: "./onboarding.page.html",
  styleUrls: ["./onboarding.page.scss"],
})
export class OnboardingPage implements OnInit {
  sliders = [
    {
      image: "welcome.svg",
      title: "Welcome to Widgets Inc!",
      desc:
        "We offer you top-rated strength and stability with your investments!",
    },
    {
      image: "planning.svg",
      title: "Financial Planning Made Easy!",
      desc:
        "Now you can view the status of your policy, monitor your policy's account values, keep tabs on your payments and benefits history, and receive updates and other offerings quickly and easily!",
    },
    {
      image: "select.svg",
      title: "Why Choose Us?",
      desc:
        "With our strong financial foundation, we’re here to support you through life’s ups and downs.",
    },
  ];

  showSkip = true;

  constructor(
    private menu: MenuController,
    public router: Router // public storage: Storage --- add storage service here (pouchDb)
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.menu.enable(false);
  }

  ionViewDidLeave() {
    this.menu.enable(true);
  }

  startApp() {
    this.router
      .navigateByUrl("/app/plans", { replaceUrl: true })
      .then(() => console.log("save onboarding data to storage"));
  }

  onSlideChangeStart(event) {
    event.target.isEnd().then((isEnd) => {
      this.showSkip = !isEnd;
    });
  }
}
