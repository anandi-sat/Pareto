import { Injectable } from '@angular/core';
import {HttpService} from '../../service/http.service';

@Injectable()
export class PatientService {

    constructor( private httpService: HttpService ) { }

    getPatientData(){
        
        return this.httpService.gets("PatientData");
    }

    enrollSelected(reqJsonBody: any){
        console.log(reqJsonBody);
        var response = this.httpService.posts("enrollselectedData", reqJsonBody);
        return response;
    }
}