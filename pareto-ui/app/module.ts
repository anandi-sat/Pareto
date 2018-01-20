import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule, TooltipModule, ModalModule } from 'ng2-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import {Ng2PaginationModule} from 'ng2-pagination';
import { AppComponent } from './app.component';
import { LoadingImage } from './loader';
import { PatientComponent } from './component/patient/patient';
import { CampaignComponent } from './component/campaign/campaign';
import { CreateCampaignComponent } from './component/campaign/createcampaign';
import { DeliveryComponent } from './component/delivery/deliveryplanner';
import { InterventionComponent } from './component/interventions/interventions';
import { LoginComponent } from './component/login/login';
import {HttpService} from './service/http.service';
import {SharedService} from './service/shared.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {DndModule} from 'ng2-dnd';

const appRoutes: Routes = [
  { path: 'patient', component: PatientComponent },
  { path: 'campaign', component: CampaignComponent },
  { path: 'delivery', component: DeliveryComponent },
  { path: 'intervention', component: InterventionComponent },
  { path: 'createcampaign', component: CreateCampaignComponent },
  { path: 'login', component: LoginComponent },

  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [BrowserModule, FormsModule, Ng2SearchPipeModule, DndModule.forRoot(), ReactiveFormsModule, Ng2PaginationModule, HttpModule, AlertModule.forRoot(), TooltipModule.forRoot(), ModalModule.forRoot(),RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )],exports: [
    RouterModule, DndModule
  ],
  declarations: [AppComponent, LoadingImage, LoginComponent, PatientComponent, CampaignComponent, DeliveryComponent, InterventionComponent, CreateCampaignComponent],
  bootstrap: [AppComponent],
  providers: [HttpService, SharedService]
})
export class AppModule { }