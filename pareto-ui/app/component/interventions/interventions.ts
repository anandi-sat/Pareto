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

	
    interventionData : any;
    patientData : any;
    patientId = '';

    public ngOnInit(): any
    {
        this.patientId = '';
        this.getinterventionData();

    }
    
    
    getinterventionData(){
        
        var jsonBody = JSON.stringify(this.patientId);
        this.InterventionService.getinterventionData(jsonBody).subscribe(
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



}




