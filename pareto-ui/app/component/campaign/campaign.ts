import {Component} from '@angular/core';
import {HttpService} from '../../service/http.service';


@Component({
    selector: 'campaignhtml',
    templateUrl: 'app/component/campaign/campaign.html',
    providers: [HttpService]
})

export class CampaignComponent{

	constructor( private httpService: HttpService ) {
        
    }
    
   //simple call init function on controller
   
    
    
    i=65;
	step = 0;
	
    campaignData : any;
 
    
    public ngOnInit(): any
    {
        console.log("reached here");
        this.getcampaignData();
    }
    
    getcampaignData(){
        
        this.httpService.getcampaigns("campaignData").subscribe(
        resp => {    
            if(resp!=null){
                
                this.campaignData= resp.response;
            }
            console.log(typeof this.campaignData);
            console.log(this.campaignData);
        },
        error => {
            console.log(error);
        }
        );   

    }

    getCurrentStep() {
        return this.step;
    }

    goback(){
        this.step = this.step - 1;    }

    toReport(){
        this.step = this.step + 1;    }
}




