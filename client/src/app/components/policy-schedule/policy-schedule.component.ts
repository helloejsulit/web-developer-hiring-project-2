import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from "@angular/core";

@Component({
  selector: "app-policy-schedule",
  templateUrl: "./policy-schedule.component.html",
  styleUrls: ["./policy-schedule.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PolicyScheduleComponent implements OnInit {
  @Input() schedule;

  constructor() {}

  ngOnInit() {}
}
