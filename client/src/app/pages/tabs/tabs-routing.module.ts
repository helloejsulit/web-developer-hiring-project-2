import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TabsPage } from "./tabs.page";
import { AuthGuard } from "src/app/guard/auth.guard";
import { PolicyResolverService } from "src/app/providers/policy.resolver";

const routes: Routes = [
  {
    path: "",
    component: TabsPage,
    children: [
      {
        path: "plans",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../../pages/plans/plans.module").then(
                (m) => m.PlansPageModule
              ),
          },
          {
            path: ":id",
            loadChildren: () =>
              import("../../pages/plan-details/plan-details.module").then(
                (m) => m.PlanDetailsPageModule
              ),
          },
        ],
      },
      {
        path: "account",
        canActivate: [AuthGuard],
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../../pages/account/account.module").then(
                (m) => m.AccountPageModule
              ),
          },
          {
            path: "policy-summary",
            loadChildren: () =>
              import("../../pages/policy-summary/policy-summary.module").then(
                (m) => m.PolicySummaryPageModule
              ),
            resolve: {
              policy: PolicyResolverService,
            },
          },
          {
            path: "policy-payments",
            loadChildren: () =>
              import("../../pages/policy-payments/policy-payments.module").then(
                (m) => m.PolicyPaymentsPageModule
              ),
            resolve: {
              policy: PolicyResolverService,
            },
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
