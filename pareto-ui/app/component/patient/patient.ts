import {Component} from '@angular/core';
import {PatientService} from '../../service/patientdetails/patient.service';

@Component({
    selector: 'patienthtml',
    templateUrl: 'app/component/patient/patient.html',
    providers: [PatientService]
})

export class PatientComponent{

	constructor( private patientService: PatientService ) {
        
    }
    
   //simple call init function on controller
   
    i = 0;
    
    patientData: any;
    noofpatient: number = 0;
    alphabets : any = [];
    public ngOnInit(): any
    {
        this.patientService.getPatientData();
        this.patientData = this.patientService.patientData;
        this.noofpatient = this.patientService.noofpatient;
        // this.getIndex();      
        console.log(this.patientData);
    }

    getIndex(){
        console.log("reached here");
        while( this.i <=26) {    
            var j = this.i + 65;         
            this.alphabets[this.i] =String.fromCharCode(j);      
        }
        console.log(this.alphabets);
    }

    
    

   
   
}