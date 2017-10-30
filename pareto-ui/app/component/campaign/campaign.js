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
var campaign_service_1 = require('../../service/campaigndetails/campaign.service');
var CampaignComponent = (function () {
    function CampaignComponent(CampaignService) {
        this.CampaignService = CampaignService;
        //simple call init function on controller
        this.i = 0;
        this.noofcampaign = 0;
        this.alphabets = [];
    }
    CampaignComponent.prototype.ngOnInit = function () {
        this.getcampaign();
        // this.noofcampaign = this.campaignData.length;
        this.getAlphabets();
    };
    CampaignComponent.prototype.getcampaign = function () {
        var _this = this;
        this.CampaignService.getcampaignData().subscribe(function (resp) {
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
    CampaignComponent.prototype.getAlphabets = function () {
        while (this.i <= 25) {
            this.alphabets[this.i] = String.fromCharCode(this.i + 65);
            this.i = this.i + 1;
        }
        console.log(this.alphabets);
    };
    CampaignComponent = __decorate([
        core_1.Component({
            selector: 'campaignhtml',
            templateUrl: 'app/component/campaign/campaign.html',
            providers: [campaign_service_1.CampaignService]
        }), 
        __metadata('design:paramtypes', [campaign_service_1.CampaignService])
    ], CampaignComponent);
    return CampaignComponent;
}());
exports.CampaignComponent = CampaignComponent;
//# sourceMappingURL=campaign.js.map