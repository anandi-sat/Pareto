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
var CampignComponent = (function () {
    function CampignComponent(httpService) {
        this.httpService = httpService;
        this.step = 0;
        this.campign = new campign();
        this.campignData = '';
    }
    CampignComponent.prototype.getcampignData = function () {
        var _this = this;
        this.step += 1;
        this.campignData = '';
        this.httpService.getcampigns("campignData").subscribe(function (resp) {
            if (resp != null) {
                _this.campignData = resp.response;
            }
            console.log(_this.campignData);
        }, function (error) {
            console.log(error);
        });
    };
    CampignComponent.prototype.getCurrentStep = function () {
        return this.step;
    };
    CampignComponent.prototype.goback = function () {
        this.step = this.step - 1;
    };
    CampignComponent.prototype.toReport = function () {
        this.step = this.step + 1;
    };
    CampignComponent = __decorate([
        core_1.Component({
            selector: 'campignhtml',
            templateUrl: 'app/component/campign/campign.html',
            providers: [http_service_1.HttpService]
        }), 
        __metadata('design:paramtypes', [http_service_1.HttpService])
    ], CampignComponent);
    return CampignComponent;
}());
exports.CampignComponent = CampignComponent;
var campign = (function () {
    function campign() {
    }
    return campign;
}());
//# sourceMappingURL=campign.js.map