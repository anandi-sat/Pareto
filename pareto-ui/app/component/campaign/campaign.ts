import {Component} from '@angular/core';
import {CampaignService} from '../../service/campaigndetails/campaign.service';

@Component({
    selector: 'campaignhtml',
    templateUrl: 'app/component/campaign/campaign.html',
    providers: [CampaignService]
})

export class CampaignComponent{

	constructor( private CampaignService: CampaignService ) {
        
    }
    
   //simple call init function on controller
   
    i: number = 0;
    
    campaignData: any;
    noofcampaign: number = 0;
    alphabets : any = [];
    public ngOnInit(): any
    {
        this.getcampaign();
    }

    getcampaign(){
        this.CampaignService.getcampaignData().subscribe(
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