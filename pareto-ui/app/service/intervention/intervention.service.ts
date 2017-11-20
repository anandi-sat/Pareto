import { Injectable } from '@angular/core';
import {HttpService} from '../../service/http.service';

@Injectable()
export class InterventionService {

    constructor( private httpService: HttpService ) { }

    
    interventionData: any;
    patientvisitsData: any;
    patientcampaignsData :any;
    diagnosisData :any;

    getinterventionData(reqJsonBody: any){
        
        this.interventionData = this.httpService.getintervention("interventionData", reqJsonBody);
        console.log(this.interventionData);
        return this.interventionData;

    }
    getpatientvisitsData(reqJsonBody: any){
        
        this.patientvisitsData = this.httpService.getpatientvisits("patientvisitsData", reqJsonBody);
        console.log(this.patientvisitsData);
        return this.patientvisitsData;

    }
    getpatientcampaignsData(reqJsonBody: any){
        
        this.patientcampaignsData = this.httpService.getpatientcampaigns("patientcampaignsData", reqJsonBody);
        console.log(this.patientcampaignsData);
        return this.patientcampaignsData;

    }
    getdiagnosisData(reqJsonBody: any){
        
        this.diagnosisData = this.httpService.getdiagnosis("diagnosisData", reqJsonBody);
        console.log(this.diagnosisData);
        return this.diagnosisData;

    }
}