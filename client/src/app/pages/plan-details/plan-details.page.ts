import { Component, OnInit } from "@angular/core";
import { PlanService } from "src/app/providers/plan.service";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { Plan } from "src/app/interfaces/plan.interface";

@Component({
  selector: "app-plan-details",
  templateUrl: "./plan-details.page.html",
  styleUrls: ["./plan-details.page.scss"],
})
export class PlanDetailsPage implements OnInit {
  plan: Plan;
  image: string = "https://picsum.photos/150";

  constructor(
    private planService: PlanService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const planId = this.route.snapshot.paramMap.get("id");

    this.planService.getPlanById(planId).subscribe((plan: Plan) => {
      this.plan = plan;
    });
  }
}
