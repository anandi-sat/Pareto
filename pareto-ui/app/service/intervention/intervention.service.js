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
var http_service_1 = require('../../service/http.service');
var InterventionService = (function () {
    function InterventionService(httpService) {
        this.httpService = httpService;
    }
    InterventionService.prototype.getinterventionData = function (reqJsonBody) {
        this.interventionData = this.httpService.posts("interventionData", reqJsonBody);
        console.log(this.interventionData);
        return this.interventionData;
    };
    InterventionService.prototype.getpatientvisitsData = function (reqJsonBody) {
        this.patientvisitsData = this.httpService.posts("patientvisitsData", reqJsonBody);
        console.log(this.patientvisitsData);
        return this.patientvisitsData;
    };
    InterventionService.prototype.getpatientcampaignsData = function (reqJsonBody) {
        this.patientcampaignsData = this.httpService.posts("patientcampaignsData", reqJsonBody);
        console.log(this.patientcampaignsData);
        return this.patientcampaignsData;
    };
    InterventionService.prototype.getdiagnosisData = function (reqJsonBody) {
        this.diagnosisData = this.httpService.posts("diagnosisData", reqJsonBody);
        console.log(this.diagnosisData);
        return this.diagnosisData;
    };
    InterventionService.prototype.getdetailsData = function (reqJsonBody) {
        this.detailsData = this.httpService.posts("detailsData", reqJsonBody);
        console.log(this.detailsData);
        return this.detailsData;
    };
    InterventionService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_service_1.HttpService])
    ], InterventionService);
    return InterventionService;
}());
exports.InterventionService = InterventionService;
//# sourceMappingURL=intervention.service.js.map