import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TabsPage } from "./tabs.page";

const routes: Routes = [
  {
    path: "",
    component: TabsPage,
    children: [
      {
        path: "policies",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../../pages/policies/policies.module").then(
                (m) => m.PoliciesPageModule
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
