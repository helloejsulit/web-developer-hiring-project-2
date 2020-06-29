import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";

import { PlanCardComponent } from "./components/plan-card/plan-card.component";
import { PlanCardDetailsComponent } from "./components/plan-card-details/plan-card-details.component";
import { LoginButtonComponent } from "./components/login-button/login-button.component";
import { PolicyPaymentsComponent } from "./components/policy-payments/policy-payments.component";
import { PolicySummaryComponent } from "./components/policy-summary/policy-summary.component";
import { PolicyScheduleComponent } from "./components/policy-schedule/policy-schedule.component";
import { UserCardComponent } from "./components/user-card/user-card.component";

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [
    PlanCardComponent,
    PlanCardDetailsComponent,
    LoginButtonComponent,
    PolicyPaymentsComponent,
    PolicySummaryComponent,
    PolicyScheduleComponent,
    UserCardComponent,
  ],
  exports: [
    CommonModule,
    PlanCardComponent,
    PlanCardDetailsComponent,
    LoginButtonComponent,
    PolicyPaymentsComponent,
    PolicySummaryComponent,
    PolicyScheduleComponent,
    UserCardComponent,
  ],
})
export class SharedModule {}
