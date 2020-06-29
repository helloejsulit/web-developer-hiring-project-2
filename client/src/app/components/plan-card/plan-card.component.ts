import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from "@angular/core";
import { Plan } from "src/app/interfaces/plan.interface";

@Component({
  selector: "app-plan-card",
  templateUrl: "./plan-card.component.html",
  styleUrls: ["./plan-card.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlanCardComponent implements OnInit {
  @Input() plan: Plan;
  @Input() detail: boolean = true;

  image: string = "https://picsum.photos/150";

  constructor() {}

  ngOnInit() {}
}
