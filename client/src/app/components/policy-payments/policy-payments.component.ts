import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-policy-payments",
  templateUrl: "./policy-payments.component.html",
  styleUrls: ["./policy-payments.component.scss"],
})
export class PolicyPaymentsComponent implements OnInit {
  @Input() payments;

  constructor() {}

  ngOnInit() {}
}
