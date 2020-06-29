import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from "@angular/core";

@Component({
  selector: "app-plan-card-details",
  templateUrl: "./plan-card-details.component.html",
  styleUrls: ["./plan-card-details.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlanCardDetailsComponent implements OnInit {
  @Input() detail;

  constructor() {}

  ngOnInit() {}
}
