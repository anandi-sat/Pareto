import {Component} from '@angular/core';
import {HttpService} from '../../service/http.service';
import {InterventionService} from '../../service/intervention/intervention.service';
import {PatientService} from '../../service/patientdetails/patient.service';
import {CampaignService} from '../../service/campaigndetails/campaign.service';

@Component({
    selector: 'interventionhtml',
    templateUrl: 'app/component/interventions/intervention.html',
    providers: [InterventionService, CampaignService]
})

export class InterventionComponent{
    

	constructor(private InterventionService: InterventionService , private campaignService: CampaignService) {
       
    }
    
   //simple call init function on controller

    campaignData: any;
    interventionData : any;
    patientData : any;
    patientId = '';
    noofcampaign: number = 0;
    public ngOnInit(): any
    {
        this.patientId = '';
        this.getinterventionData();
        this.getcampaign();
    }
    
    
    getinterventionData(){
        
       // var jsonBody = JSON.stringify(this.patientId);
        this.InterventionService.getinterventionData().subscribe(
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




