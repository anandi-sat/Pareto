import {Component} from '@angular/core';
import {HttpService} from '../../service/http.service';
import {InterventionService} from '../../service/intervention/intervention.service';
import {PatientService} from '../../service/patientdetails/patient.service';
import {CampaignService} from '../../service/campaigndetails/campaign.service';
import {SharedService} from '../../service/shared.service';

@Component({
    selector: 'interventionhtml',
    templateUrl: 'app/component/interventions/intervention.html',
    providers: [InterventionService, CampaignService]
})

export class InterventionComponent{
    

	constructor(private InterventionService: InterventionService , private campaignService: CampaignService, public sharedService: SharedService ) {
       
    }
    
   //simple call init function on controller

    campaignData: any;
    interventionData : any;
    patientvisitsData : any;
    patientcampaignsData : any;
    diagnosisData :any;
    patientData : any;
    detailsData : any;
    patient = new Patient();
    noofcampaign: number = 0;
    
    public ngOnInit(): any
    {
        this.getinterventionData();
        this.getcampaign();
        this.getpatientvisitsData();
        this.getpatientcampaignsData();
        this.getdiagnosisData();
        this.getdetailsData();
    }
    
    
    getinterventionData(){
        this.patient.patientId = this.sharedService.getData();
        var reqJsonBody = JSON.stringify(this.patient);
        this.InterventionService.getinterventionData(reqJsonBody).subscribe(
        resp => {    
            if(resp!=null){
                
                this.interventionData= resp.response;
            }
            console.log(typeof this.interventionData);
            console.log(this.interventionData);
        },
        error => {
            console.log(error);
        }
        );   

    }

    getpatientvisitsData(){
        this.patient.patientId = this.sharedService.getData();
        var reqJsonBody = JSON.stringify(this.patient);
        this.InterventionService.getpatientvisitsData(reqJsonBody).subscribe(
        resp => {    
            if(resp!=null){
                
                this.patientvisitsData= resp.response;
            }
            console.log(typeof this.patientvisitsData);
            console.log(this.patientvisitsData);
        },
        error => {
            console.log(error);
        }
        );   

    }

    getpatientcampaignsData(){
        this.patient.patientId = this.sharedService.getData();
        var reqJsonBody = JSON.stringify(this.patient);
        this.InterventionService.getpatientcampaignsData(reqJsonBody).subscribe(
        resp => {    
            if(resp!=null){
                
                this.patientcampaignsData= resp.response;
            }
            console.log(typeof this.patientcampaignsData);
            console.log(this.patientcampaignsData);
        },
        error => {
            console.log(error);
        }
        );   

    }

    getdiagnosisData(){
        this.patient.patientId = this.sharedService.getData();
        var reqJsonBody = JSON.stringify(this.patient);
        this.InterventionService.getdiagnosisData(reqJsonBody).subscribe(
        resp => {    
            if(resp!=null){
                
                this.diagnosisData= resp.response;
            }
            console.log(typeof this.diagnosisData);
            console.log(this.diagnosisData);
        },
        error => {
            console.log(error);
        }
        );   

    }

    getdetailsData(){
        this.patient.patientId = this.sharedService.getData();
        var reqJsonBody = JSON.stringify(this.patient);
        this.InterventionService.getdetailsData(reqJsonBody).subscribe(
        resp => {    
            if(resp!=null){
                
                this.detailsData= resp.response;
            }
            console.log(typeof this.detailsData);
            console.log(this.detailsData);
        },
        error => {
            console.log(error);
        }
        );   

    }

    getcampaign(){
        this.campaignService.getcampaignData().subscribe(
        resp => {    
            if(resp!=null){
                
                this.campaignData= resp.response;
                this.noofcampaign= resp.response.length;
            }
            console.log(typeof this.campaignData);
            console.log(this.campaignData);
        },
        error => {
            console.log(error);
        }
        );   
    }



}

class Patient{
    patientId : String;
}




