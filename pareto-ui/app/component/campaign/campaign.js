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
var CampaignComponent = (function () {
    function CampaignComponent(httpService) {
        this.httpService = httpService;
        //simple call init function on controller
        this.i = 65;
        this.step = 0;
    }
    CampaignComponent.prototype.ngOnInit = function () {
        console.log("reached here");
        this.getcampaignData();
    };
    CampaignComponent.prototype.getcampaignData = function () {
        var _this = this;
        this.httpService.getcampaigns("campaignData").subscribe(function (resp) {
            if (resp != null) {
                _this.campaignData = resp.response;
            }
            console.log(typeof _this.campaignData);
            console.log(_this.campaignData);
        }, function (error) {
            console.log(error);
        });
    };
    CampaignComponent.prototype.getCurrentStep = function () {
        return this.step;
    };
    CampaignComponent.prototype.goback = function () {
        this.step = this.step - 1;
    };
    CampaignComponent.prototype.toReport = function () {
        this.step = this.step + 1;
    };
    CampaignComponent = __decorate([
        core_1.Component({
            selector: 'campaignhtml',
            templateUrl: 'app/component/campaign/campaign.html',
            providers: [http_service_1.HttpService]
        }), 
        __metadata('design:paramtypes', [http_service_1.HttpService])
    ], CampaignComponent);
    return CampaignComponent;
}());
exports.CampaignComponent = CampaignComponent;
//# sourceMappingURL=campaign.js.map