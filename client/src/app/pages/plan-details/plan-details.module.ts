import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { PlanDetailsPageRoutingModule } from "./plan-details-routing.module";

import { PlanDetailsPage } from "./plan-details.page";
import { PlanCardComponent } from "src/app/components/plan-card/plan-card.component";
import { PlanCardDetailsComponent } from "src/app/components/plan-card-details/plan-card-details.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlanDetailsPageRoutingModule,
  ],
  declarations: [PlanDetailsPage, PlanCardComponent, PlanCardDetailsComponent],
})
export class PlanDetailsPageModule {}
