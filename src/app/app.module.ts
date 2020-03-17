import { PageCompanyListComponent } from './page-company-list/page-company-list.component';

import { MainPipe } from './main-pipe.module';
import { HttpClientModule } from "@angular/common/http";
import { RadarChartComponent } from "./radar-chart/radar-chart.component";
import { LineChartComponent } from "./line-chart/line-chart.component";
import { DoughnutChartComponent } from "./doughnut-chart/doughnut-chart.component";
import { PieChartComponent } from "./pie-chart/pie-chart.component";
import { BarChartComponent } from "./bar-chart/bar-chart.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { SidebarModule } from "ng-sidebar";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { ChartsModule } from "ng2-charts";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { MenuUserComponent } from './menu-user/menu-user.component';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ChartPanelComponent } from "./chart-panel/chart-panel.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ContactPanelComponent } from "./contact-panel/contact-panel.component";
import { MessagePanelComponent } from "./message-panel/message-panel.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { ListSimulatorsComponent } from "./list-simulators/list-simulators.component";
import { ListContactsComponent } from "./list-contacts/list-contacts.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { ContactSearchComponent } from "./contact-search/contact-search.component";
import { LoginComponent } from "./login/login.component";
import { UserFormComponent } from "./user-form/user-form.component";
import { SimulatorFormComponent } from "./simulator-form/simulator-form.component";
import { ProgressPanelComponent } from "./progress-panel/progress-panel.component";
import { FormsModule } from "@angular/forms";
import { FormAddComponent } from "./form-add/form-add.component";
import { CheckChartComponent } from './check-chart/check-chart.component';
import { SummaryChartComponent } from './summary-chart/summary-chart.component';
import { GlobalContactSearchComponent } from './global-contact-search/global-contact-search.component';
import { GlobalListContactsComponent } from './global-list-contacts/global-list-contacts.component';
import { DatePipe } from '@angular/common';
import { CompanyFormComponent } from './company-form/company-form.component';
import { EditFormComponent } from './edit-form/edit-form.component';



@NgModule({
  declarations: [
    RadarChartComponent,
    DoughnutChartComponent,
    BarChartComponent,
    PieChartComponent,
    LineChartComponent,
    AppComponent,
    ChartPanelComponent,
    DashboardComponent,
    ContactPanelComponent,
    MessagePanelComponent,
    NavbarComponent,
    ListSimulatorsComponent,
    ListContactsComponent,
    LineChartComponent,
    SidebarComponent,
    ContactSearchComponent,
    LoginComponent,
    UserFormComponent,
    SimulatorFormComponent,
    ProgressPanelComponent,
    FormAddComponent,
    CheckChartComponent,
    SummaryChartComponent,
    MenuUserComponent,
    GlobalContactSearchComponent,
    GlobalListContactsComponent,
    PageCompanyListComponent,
    CompanyFormComponent,
    EditFormComponent
  ],
  imports: [
    MainPipe,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ChartsModule,
    NgbModule,
    AngularFontAwesomeModule,
    SidebarModule.forRoot(),
    FontAwesomeModule,
    FormsModule,
    Ng2SearchPipeModule,
    HttpClientModule, 
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
