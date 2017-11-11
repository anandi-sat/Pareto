import { Injectable } from '@angular/core';
import {HttpService} from '../../service/http.service';

@Injectable()
export class PatientService {

    constructor( private httpService: HttpService ) { }

    getPatientData(){
        
        return this.httpService.getPatients("PatientData");
    }
}