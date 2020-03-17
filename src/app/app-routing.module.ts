// Login
import { LoginComponent } from './login/login.component';

// Dashboard
import { DashboardComponent } from "./dashboard/dashboard.component";

// Company Select
import { PageCompanyListComponent } from './page-company-list/page-company-list.component';

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: 'company',
    component: PageCompanyListComponent 
  },
  {
    path: "dash",
    component: DashboardComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
