import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule, TooltipModule, ModalModule } from 'ng2-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import {Ng2PaginationModule} from 'ng2-pagination'
import { AppComponent } from './app.component';
import { PatientComponent } from './component/patient/patient';
import { CampaignComponent } from './component/campaign/campaign';


const appRoutes: Routes = [
  { path: 'patient', component: PatientComponent },
  { path: 'campaign', component: CampaignComponent },
  {
    path: '',
    redirectTo: '/patient',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, Ng2PaginationModule, HttpModule, AlertModule.forRoot(), TooltipModule.forRoot(), ModalModule.forRoot()RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )],exports: [
    RouterModule
  ],
  declarations: [AppComponent, PatientComponent, CampaignComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }