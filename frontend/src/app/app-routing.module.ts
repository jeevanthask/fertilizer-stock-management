import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddfarmersComponent } from './components/addfarmers/addfarmers.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginpageComponent },
  {
    path: 'admin/dashboard',
    component: DashboardComponent,
    // canActivate: [AuthGuard],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
