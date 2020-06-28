import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TabsPage } from "./tabs.page";

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
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../../pages/account/account.module").then(
                (m) => m.AccountPageModule
              ),
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
