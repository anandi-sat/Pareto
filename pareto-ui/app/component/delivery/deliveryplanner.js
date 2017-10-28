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
var patient_1 = require('../patient/patient');
var DeliveryComponent = (function () {
    function DeliveryComponent(httpService) {
        this.httpService = httpService;
        //simple call init function on controller
        this.patient = new patient_1.PatientComponent(this.httpService);
        this.i = 65;
        this.step = 0;
        this.patientData = this.patient.getPatientData();
    }
    DeliveryComponent.prototype.ngOnInit = function () {
        console.log("reached here");
        this.getdeliveryData();
        console.log("patiens in delivery " + this.patientData);
    };
    DeliveryComponent.prototype.getdeliveryData = function () {
        var _this = this;
        this.httpService.getdelivery("deliveryData").subscribe(function (resp) {
            if (resp != null) {
                _this.deliveryData = resp.response;
            }
            console.log(typeof _this.deliveryData);
            console.log(_this.deliveryData);
        }, function (error) {
            console.log(error);
        });
    };
    DeliveryComponent.prototype.getCurrentStep = function () {
        return this.step;
    };
    DeliveryComponent.prototype.goback = function () {
        this.step = this.step - 1;
    };
    DeliveryComponent.prototype.toReport = function () {
        this.step = this.step + 1;
    };
    DeliveryComponent = __decorate([
        core_1.Component({
            selector: 'deliveryhtml',
            templateUrl: 'app/component/delivery/deliveryplanner.html',
            providers: [http_service_1.HttpService, patient_1.PatientComponent]
        }), 
        __metadata('design:paramtypes', [http_service_1.HttpService])
    ], DeliveryComponent);
    return DeliveryComponent;
}());
exports.DeliveryComponent = DeliveryComponent;
//# sourceMappingURL=deliveryplanner.js.map