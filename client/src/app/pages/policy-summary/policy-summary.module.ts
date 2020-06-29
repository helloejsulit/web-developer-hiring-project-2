import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PolicySummaryPageRoutingModule } from './policy-summary-routing.module';

import { PolicySummaryPage } from './policy-summary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PolicySummaryPageRoutingModule
  ],
  declarations: [PolicySummaryPage]
})
export class PolicySummaryPageModule {}
