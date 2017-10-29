import { Injectable } from '@angular/core';
import {HttpService} from '../../service/http.service';

@Injectable()
export class PatientService {

    constructor( private httpService: HttpService ) { }

    patientData: any;
    noofpatient: number = 0;

    getPatientData(){
        
        this.patientData = this.httpService.getPatients("PatientData");
        console.log(this.patientData);
        return this.patientData;

    }
}