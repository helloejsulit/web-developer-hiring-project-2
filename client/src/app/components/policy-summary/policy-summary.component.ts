import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from "@angular/core";

@Component({
  selector: "app-policy-summary",
  templateUrl: "./policy-summary.component.html",
  styleUrls: ["./policy-summary.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PolicySummaryComponent implements OnInit {
  @Input() summary;

  constructor() {}

  ngOnInit() {}
}
