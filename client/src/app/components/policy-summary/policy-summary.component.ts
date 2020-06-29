import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from "@angular/core";

@Component({
  selector: "app-policy-summary-card",
  templateUrl: "./policy-summary.component.html",
  styleUrls: ["./policy-summary.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PolicySummaryComponent implements OnInit {
  @Input() summary;
  @Output() onViewSummary = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  viewSummary = (summaryData) => {
    this.onViewSummary.emit({
      ...summaryData,
      url: "app/account/policy-summary",
    });
  };
}
