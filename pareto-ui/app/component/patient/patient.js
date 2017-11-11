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
var patient_service_1 = require('../../service/patientdetails/patient.service');
var shared_service_1 = require('../../service/shared.service');
var router_1 = require('@angular/router');
var PatientComponent = (function () {
    function PatientComponent(patientService, router, sharedService) {
        this.patientService = patientService;
        this.router = router;
        this.sharedService = sharedService;
        //simple call init function on controller
        this.i = 0;
        this.patientId = '';
        this.noofpatient = 0;
        this.alphabets = [];
    }
    PatientComponent.prototype.ngOnInit = function () {
        this.getPatient();
        this.getAlphabets();
    };
    PatientComponent.prototype.store = function (patient) {
        console.log(patient);
        this.sharedService.saveData(patient);
        console.log(this.sharedService.getData());
        this.router.navigate(['/intervention']);
    };
    PatientComponent.prototype.getPatient = function () {
        var _this = this;
        this.patientService.getPatientData().subscribe(function (resp) {
            if (resp != null) {
                _this.patientData = resp.response;
                _this.noofpatient = resp.response.length;
            }
            console.log(typeof _this.patientData);
            console.log(_this.patientData);
        }, function (error) {
            console.log(error);
        });
    };
    PatientComponent.prototype.getAlphabets = function () {
        while (this.i <= 25) {
            this.alphabets[this.i] = String.fromCharCode(this.i + 65);
            this.i = this.i + 1;
        }
        console.log(this.alphabets);
    };
    PatientComponent = __decorate([
        core_1.Component({
            selector: 'patienthtml',
            templateUrl: 'app/component/patient/patient.html',
            providers: [patient_service_1.PatientService]
        }), 
        __metadata('design:paramtypes', [patient_service_1.PatientService, router_1.Router, shared_service_1.SharedService])
    ], PatientComponent);
    return PatientComponent;
}());
exports.PatientComponent = PatientComponent;
//# sourceMappingURL=patient.js.map