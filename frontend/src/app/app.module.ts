import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddfarmersComponent } from './components/addfarmers/addfarmers.component';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FarmerslistComponent } from './components/farmerslist/farmerslist.component';
import { AddfertilizersComponent } from './components/addfertilizers/addfertilizers.component';
import { FertilizerslistComponent } from './components/fertilizerslist/fertilizerslist.component';
import { AddofficersComponent } from './components/addofficers/addofficers.component';
import { OfficerslistComponent } from './components/officerslist/officerslist.component';
import { AddsellingcompanyComponent } from './components/addsellingcompany/addsellingcompany.component';
import { SellingcompanieslistComponent } from './components/sellingcompanieslist/sellingcompanieslist.component';
import { AccordionModule } from 'primeng/accordion';
import { SidebarModule } from 'primeng/sidebar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ChartModule } from 'primeng/chart';
import { ScrollTopModule } from 'primeng/scrolltop';

import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Chart01Component } from './components/chart01/chart01.component';
import { Chart02Component } from './components/chart02/chart02.component';
import { Chart03Component } from './components/chart03/chart03.component';
import { Chart04Component } from './components/chart04/chart04.component';
import { FarmerService } from './services/farmer.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { UpdatefarmerComponent } from './components/updatefarmer/updatefarmer.component';
import { UpdateofficerComponent } from './components/updateofficer/updateofficer.component';
import { UpdatefertilizerComponent } from './components/updatefertilizer/updatefertilizer.component';
import { UpdatecompanyComponent } from './components/updatecompany/updatecompany.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { Chart05Component } from './components/chart05/chart05.component';
import { DefaultdisplayComponent } from './components/defaultdisplay/defaultdisplay.component';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { FieldsetModule } from 'primeng/fieldset';
import { CarouselModule } from 'primeng/carousel';
import { CombochartComponent } from './components/combochart/combochart.component';
import { IssueFertilizerComponent } from './components/issue-fertilizer/issue-fertilizer.component';
import { IssueFertilizerListComponent } from './components/issue-fertilizer-list/issue-fertilizer-list.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputNumberModule } from 'primeng/inputnumber';
import { AddfertilizerstockComponent } from './components/addfertilizerstock/addfertilizerstock.component';
import { UpdatefertilizerstockComponent } from './components/updatefertilizerstock/updatefertilizerstock.component';
import { FertilizerstocklistComponent } from './components/fertilizerstocklist/fertilizerstocklist.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { CaptchaModule } from 'primeng/captcha';
import { DialogModule } from 'primeng/dialog';
import { CalendarModule } from 'primeng/calendar';

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
    Chart01Component,
    Chart02Component,
    Chart03Component,
    Chart04Component,
    UpdatefarmerComponent,
    UpdateofficerComponent,
    UpdatefertilizerComponent,
    UpdatecompanyComponent,
    LoginpageComponent,
    Chart05Component,
    DefaultdisplayComponent,
    CombochartComponent,
    IssueFertilizerComponent,
    IssueFertilizerListComponent,
    AddfertilizerstockComponent,
    UpdatefertilizerstockComponent,
    FertilizerstocklistComponent,
  ],
  imports: [
    CalendarModule,
    CaptchaModule,
    DialogModule,
    ConfirmDialogModule,
    MessagesModule,
    BrowserModule,
    InputTextModule,
    ButtonModule,
    ReactiveFormsModule,
    AccordionModule,
    SidebarModule,
    MessageModule,
    BrowserAnimationsModule,
    PanelMenuModule,
    ChartModule,
    ScrollTopModule,
    MenubarModule,
    CardModule,
    ToolbarModule,
    HttpClientModule,
    DropdownModule,
    TableModule,
    OrganizationChartModule,
    FieldsetModule,
    CarouselModule,
    AutoCompleteModule,
    MultiSelectModule,
    InputNumberModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    FarmerService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
