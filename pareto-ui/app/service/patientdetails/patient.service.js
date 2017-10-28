"use strict";
patient.service('PatientService', function (HttpService) { });
var PatientService = (function () {
    function PatientService() {
    }
    PatientService.prototype.getPatientData = function () {
        var _this = this;
        this.httpService.getPatients("PatientData").subscribe(function (resp) {
            if (resp != null) {
                _this.patientData = resp.response;
                _this.noofpatient = resp.response.length;
                console.log(_this.noofpatient);
            }
            console.log(typeof _this.patientData);
            console.log(_this.patientData);
        }, function (error) {
            console.log(error);
        });
    };
    return PatientService;
}());
exports.PatientService = PatientService;
//# sourceMappingURL=patient.service.js.map