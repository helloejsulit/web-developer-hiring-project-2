import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-policy-payments-card",
  templateUrl: "./policy-payments.component.html",
  styleUrls: ["./policy-payments.component.scss"],
})
export class PolicyPaymentsComponent implements OnInit {
  @Input() payments;
  @Output() onViewMore = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  viewMore = (paymentsData) => {
    this.onViewMore.emit({
      ...paymentsData,
      url: "/app/account/policy-payments",
    });
  };
}
