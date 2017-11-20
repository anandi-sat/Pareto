"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var ng2_bootstrap_1 = require('ng2-bootstrap');
var router_1 = require('@angular/router');
var ng2_pagination_1 = require('ng2-pagination');
var app_component_1 = require('./app.component');
var patient_1 = require('./component/patient/patient');
var campaign_1 = require('./component/campaign/campaign');
var createcampaign_1 = require('./component/campaign/createcampaign');
var deliveryplanner_1 = require('./component/delivery/deliveryplanner');
var interventions_1 = require('./component/interventions/interventions');
var http_service_1 = require('./service/http.service');
var shared_service_1 = require('./service/shared.service');
var ng2_search_filter_1 = require('ng2-search-filter');
var ng2_drag_drop_1 = require('ng2-drag-drop');
var appRoutes = [
    { path: 'patient', component: patient_1.PatientComponent },
    { path: 'campaign', component: campaign_1.CampaignComponent },
    { path: 'delivery', component: deliveryplanner_1.DeliveryComponent },
    { path: 'intervention', component: interventions_1.InterventionComponent },
    { path: 'createcampaign', component: createcampaign_1.CreateCampaignComponent },
    {
        path: '',
        redirectTo: '/patient',
        pathMatch: 'full'
    },
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, ng2_search_filter_1.Ng2SearchPipeModule, ng2_drag_drop_1.Ng2DragDropModule.forRoot(), forms_1.ReactiveFormsModule, ng2_pagination_1.Ng2PaginationModule, http_1.HttpModule, ng2_bootstrap_1.AlertModule.forRoot(), ng2_bootstrap_1.TooltipModule.forRoot(), ng2_bootstrap_1.ModalModule.forRoot(), router_1.RouterModule.forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                )], exports: [
                router_1.RouterModule
            ],
            declarations: [app_component_1.AppComponent, patient_1.PatientComponent, campaign_1.CampaignComponent, deliveryplanner_1.DeliveryComponent, interventions_1.InterventionComponent, createcampaign_1.CreateCampaignComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [http_service_1.HttpService, shared_service_1.SharedService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=module.js.map