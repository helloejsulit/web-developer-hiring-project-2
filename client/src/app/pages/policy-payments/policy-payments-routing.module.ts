import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PolicyPaymentsPage } from './policy-payments.page';

const routes: Routes = [
  {
    path: '',
    component: PolicyPaymentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PolicyPaymentsPageRoutingModule {}
