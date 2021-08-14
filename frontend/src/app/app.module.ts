import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {AddfarmersComponent} from './components/addfarmers/addfarmers.component';

import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {ReactiveFormsModule} from "@angular/forms";
import { FarmerslistComponent } from './components/farmerslist/farmerslist.component';
import { AddfertilizersComponent } from './components/addfertilizers/addfertilizers.component';
import { FertilizerslistComponent } from './components/fertilizerslist/fertilizerslist.component';
import { AddofficersComponent } from './components/addofficers/addofficers.component';
import { OfficerslistComponent } from './components/officerslist/officerslist.component';
import { AddsellingcompanyComponent } from './components/addsellingcompany/addsellingcompany.component';
import { SellingcompanieslistComponent } from './components/sellingcompanieslist/sellingcompanieslist.component';


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
    SellingcompanieslistComponent
  ],
    imports: [
        BrowserModule,
        InputTextModule,
        ButtonModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
