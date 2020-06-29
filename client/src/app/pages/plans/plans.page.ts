import { Component, OnInit } from "@angular/core";
import { PlanService } from "src/app/providers/plan.service";

import { take } from "rxjs/operators";
import { Plan } from "src/app/interfaces/plan.interface";
import { Router } from "@angular/router";

@Component({
  selector: "app-plans",
  templateUrl: "./plans.page.html",
  styleUrls: ["./plans.page.scss"],
})
export class PlansPage implements OnInit {
  plans: Plan[];

  constructor(private planService: PlanService, private router: Router) {}

  ngOnInit() {
    this.planService
      .getAllPlans()
      .pipe(take(1))
      .subscribe((plans: any) => {
        this.plans = plans.data;
      });
  }

  learnMore = ($event) => {
    this.router.navigate(["app/plans/", $event]);
  };
}
