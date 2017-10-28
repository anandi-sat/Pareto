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
var PatientComponent = (function () {
    function PatientComponent(patientService) {
        this.patientService = patientService;
        //simple call init function on controller
        this.i = 0;
        this.noofpatient = 0;
        this.alphabets = [];
    }
    PatientComponent.prototype.ngOnInit = function () {
        this.patientService.getPatientData();
        this.patientData = this.patientService.patientData;
        this.noofpatient = this.patientService.noofpatient;
        // this.getIndex();      
        console.log(this.patientData);
    };
    PatientComponent.prototype.getIndex = function () {
        console.log("reached here");
        while (this.i <= 26) {
            var j = this.i + 65;
            this.alphabets[this.i] = String.fromCharCode(j);
        }
        console.log(this.alphabets);
    };
    PatientComponent = __decorate([
        core_1.Component({
            selector: 'patienthtml',
            templateUrl: 'app/component/patient/patient.html',
            providers: [patient_service_1.PatientService]
        }), 
        __metadata('design:paramtypes', [patient_service_1.PatientService])
    ], PatientComponent);
    return PatientComponent;
}());
exports.PatientComponent = PatientComponent;
//# sourceMappingURL=patient.js.map