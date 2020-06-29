import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-policy-summary",
  templateUrl: "./policy-summary.page.html",
  styleUrls: ["./policy-summary.page.scss"],
})
export class PolicySummaryPage implements OnInit {
  policySummary;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.policySummary = data.policy.policySummary;
    });
  }
}
