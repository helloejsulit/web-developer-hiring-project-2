import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-policy-payments",
  templateUrl: "./policy-payments.page.html",
  styleUrls: ["./policy-payments.page.scss"],
})
export class PolicyPaymentsPage implements OnInit {
  policyPayments;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.policyPayments = data.policy.policyHistory;
    });
  }
}
