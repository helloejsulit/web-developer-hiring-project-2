import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { PolicyPaymentsPageRoutingModule } from "./policy-payments-routing.module";

import { PolicyPaymentsPage } from "./policy-payments.page";
import { SharedModule } from "src/app/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    PolicyPaymentsPageRoutingModule,
  ],
  declarations: [PolicyPaymentsPage],
})
export class PolicyPaymentsPageModule {}
