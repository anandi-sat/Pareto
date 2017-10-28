import { Injectable } from '@angular/core';
import {HttpService} from '../../service/http.service';

@Injectable()
export class PatientService {

    constructor( private httpService: HttpService ) { }

    patientData: any;
    noofpatient: number = 0;

    getPatientData(){
        
        this.httpService.getPatients("PatientData").subscribe(
        resp => {    
            if(resp!=null){
                
                this.patientData= resp.response;
                this.noofpatient = resp.response.length;
                console.log(this.noofpatient);
            }
            console.log(typeof this.patientData);
            console.log(this.patientData);
        },
        error => {
            console.log(error);
        }
        );   

    }
}