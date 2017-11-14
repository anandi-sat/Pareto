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
    patientData : any;
    patient = new Patient();
    noofcampaign: number = 0;
    public ngOnInit(): any
    {
        this.getinterventionData();
        this.getcampaign();
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




