import { Injectable } from '@angular/core';
import {HttpService} from '../../service/http.service';

@Injectable()
export class InterventionService {

    constructor( private httpService: HttpService ) { }

    
    interventionData: any;
  

    getinterventionData(jsonBody: any){
        
        this.interventionData = this.httpService.getintervention(jsonBody, "interventionData");
        console.log(this.interventionData);
        return this.interventionData;

    }
}