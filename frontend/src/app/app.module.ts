import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {AddfarmersComponent} from './components/addfarmers/addfarmers.component';

import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {ReactiveFormsModule} from "@angular/forms";
import {FarmerslistComponent} from './components/farmerslist/farmerslist.component';
import {AddfertilizersComponent} from './components/addfertilizers/addfertilizers.component';
import {FertilizerslistComponent} from './components/fertilizerslist/fertilizerslist.component';
import {AddofficersComponent} from './components/addofficers/addofficers.component';
import {OfficerslistComponent} from './components/officerslist/officerslist.component';
import {AddsellingcompanyComponent} from './components/addsellingcompany/addsellingcompany.component';
import {SellingcompanieslistComponent} from './components/sellingcompanieslist/sellingcompanieslist.component';
import {AccordionModule} from 'primeng/accordion';
import {SidebarModule} from 'primeng/sidebar';
import {PanelMenuModule} from 'primeng/panelmenu';
import {ChartModule} from 'primeng/chart';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavbarComponent} from './components/navbar/navbar.component';
import { Chart01Component } from './components/chart01/chart01.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddfarmersComponent,
    FarmerslistComponent,
    AddfertilizersComponent,
    FertilizerslistComponent,
    AddofficersComponent,
    OfficerslistComponent,
    AddsellingcompanyComponent,
    SellingcompanieslistComponent,
    NavbarComponent,
    Chart01Component
  ],
  imports: [
    BrowserModule,
    InputTextModule,
    ButtonModule,
    ReactiveFormsModule,
    AccordionModule,
    SidebarModule,
    BrowserAnimationsModule,
    PanelMenuModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
