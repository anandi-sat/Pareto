import { Injectable } from '@angular/core';
import {HttpService} from '../../service/http.service';

@Injectable()
export class InterventionService {

    constructor( private httpService: HttpService ) { }

    
    interventionData: any;
  

    getinterventionData(reqJsonBody: any){
        
        this.interventionData = this.httpService.getintervention("interventionData", reqJsonBody);
        console.log(this.interventionData);
        return this.interventionData;

    }
}