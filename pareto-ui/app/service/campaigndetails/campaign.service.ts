import { Injectable } from '@angular/core';
import {HttpService} from '../../service/http.service';

@Injectable()
export class CampaignService {

    constructor( private httpService: HttpService ) { }

    campaignData: any;
    noofCampaign: number = 0;

    getcampaignData(){
        
        this.campaignData = this.httpService.getcampaigns("campaignData");
        console.log(this.campaignData);
        return this.campaignData;

    }
}