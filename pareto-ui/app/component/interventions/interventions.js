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
var shared_service_1 = require('../../service/shared.service');
var InterventionComponent = (function () {
    function InterventionComponent(InterventionService, campaignService, sharedService) {
        this.InterventionService = InterventionService;
        this.campaignService = campaignService;
        this.sharedService = sharedService;
        this.patient = new Patient();
        this.noofcampaign = 0;
    }
    InterventionComponent.prototype.ngOnInit = function () {
        this.getinterventionData();
        this.getcampaign();
        this.getpatientvisitsData();
        this.getpatientcampaignsData();
        this.getdiagnosisData();
        this.getdetailsData();
    };
    InterventionComponent.prototype.getinterventionData = function () {
        var _this = this;
        this.patient.patientId = this.sharedService.getData();
        var reqJsonBody = JSON.stringify(this.patient);
        this.InterventionService.getinterventionData(reqJsonBody).subscribe(function (resp) {
            if (resp != null) {
                _this.interventionData = resp.response;
            }
            console.log(typeof _this.interventionData);
            console.log(_this.interventionData);
        }, function (error) {
            console.log(error);
        });
    };
    InterventionComponent.prototype.getpatientvisitsData = function () {
        var _this = this;
        this.patient.patientId = this.sharedService.getData();
        var reqJsonBody = JSON.stringify(this.patient);
        this.InterventionService.getpatientvisitsData(reqJsonBody).subscribe(function (resp) {
            if (resp != null) {
                _this.patientvisitsData = resp.response;
            }
            console.log(typeof _this.patientvisitsData);
            console.log(_this.patientvisitsData);
        }, function (error) {
            console.log(error);
        });
    };
    InterventionComponent.prototype.getpatientcampaignsData = function () {
        var _this = this;
        this.patient.patientId = this.sharedService.getData();
        var reqJsonBody = JSON.stringify(this.patient);
        this.InterventionService.getpatientcampaignsData(reqJsonBody).subscribe(function (resp) {
            if (resp != null) {
                _this.patientcampaignsData = resp.response;
            }
            console.log(typeof _this.patientcampaignsData);
            console.log(_this.patientcampaignsData);
        }, function (error) {
            console.log(error);
        });
    };
    InterventionComponent.prototype.getdiagnosisData = function () {
        var _this = this;
        this.patient.patientId = this.sharedService.getData();
        var reqJsonBody = JSON.stringify(this.patient);
        this.InterventionService.getdiagnosisData(reqJsonBody).subscribe(function (resp) {
            if (resp != null) {
                _this.diagnosisData = resp.response;
            }
            console.log(typeof _this.diagnosisData);
            console.log(_this.diagnosisData);
        }, function (error) {
            console.log(error);
        });
    };
    InterventionComponent.prototype.getdetailsData = function () {
        var _this = this;
        this.patient.patientId = this.sharedService.getData();
        var reqJsonBody = JSON.stringify(this.patient);
        this.InterventionService.getdetailsData(reqJsonBody).subscribe(function (resp) {
            if (resp != null) {
                _this.detailsData = resp.response;
            }
            console.log(typeof _this.detailsData);
            console.log(_this.detailsData);
        }, function (error) {
            console.log(error);
        });
    };
    InterventionComponent.prototype.getcampaign = function () {
        var _this = this;
        this.campaignService.getcampaignData().subscribe(function (resp) {
            if (resp != null) {
                _this.campaignData = resp.response;
                _this.noofcampaign = resp.response.length;
            }
            console.log(typeof _this.campaignData);
            console.log(_this.campaignData);
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
        __metadata('design:paramtypes', [intervention_service_1.InterventionService, campaign_service_1.CampaignService, shared_service_1.SharedService])
    ], InterventionComponent);
    return InterventionComponent;
}());
exports.InterventionComponent = InterventionComponent;
var Patient = (function () {
    function Patient() {
    }
    return Patient;
}());
//# sourceMappingURL=interventions.js.map