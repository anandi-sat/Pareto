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
var intervention_service_1 = require('../../service/intervention/intervention.service');
var campaign_service_1 = require('../../service/campaigndetails/campaign.service');
var InterventionComponent = (function () {
    function InterventionComponent(InterventionService, campaignService) {
        this.InterventionService = InterventionService;
        this.campaignService = campaignService;
        this.patientId = '';
    }
    InterventionComponent.prototype.ngOnInit = function () {
        this.patientId = '';
        this.getinterventionData();
    };
    InterventionComponent.prototype.getinterventionData = function () {
        var _this = this;
        var jsonBody = JSON.stringify(this.patientId);
        this.InterventionService.getinterventionData(jsonBody).subscribe(function (resp) {
            if (resp != null) {
                _this.interventionData = resp.response;
            }
            console.log(typeof _this.interventionData);
            console.log(_this.interventionData);
        }, function (error) {
            console.log(error);
        });
    };
    InterventionComponent = __decorate([
        core_1.Component({
            selector: 'interventionhtml',
            templateUrl: 'app/component/interventions/intervention.html',
            providers: [intervention_service_1.InterventionService, campaign_service_1.CampaignService]
        }), 
        __metadata('design:paramtypes', [intervention_service_1.InterventionService, campaign_service_1.CampaignService])
    ], InterventionComponent);
    return InterventionComponent;
}());
exports.InterventionComponent = InterventionComponent;
//# sourceMappingURL=interventions.js.map