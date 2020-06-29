import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PolicyPaymentsPageRoutingModule } from './policy-payments-routing.module';

import { PolicyPaymentsPage } from './policy-payments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PolicyPaymentsPageRoutingModule
  ],
  declarations: [PolicyPaymentsPage]
})
export class PolicyPaymentsPageModule {}
