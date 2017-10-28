import {Component} from '@angular/core';
import {HttpService} from '../../service/http.service';
import {PatientService} from '../../service/patientdetails/patient.service';

@Component({
    selector: 'patienthtml',
    templateUrl: 'app/component/patient/patient.html',
    providers: [HttpService ]
})

export class PatientComponent{

	constructor( private httpService: HttpService ) {
        
    }
    
   //simple call init function on controller
   
    i = 0;
    
    patientdata = '';
    patientData: any;
    noofpatient: number = 0;
    alphabets : any = [];
    public ngOnInit(): any
    {
        this.getPatientData();
        // this.getIndex();      
        
    }

    getIndex(){
        console.log("reached here");
        while( this.i <=26) {    
            var j = this.i + 65;         
            this.alphabets[this.i] =String.fromCharCode(j);      
        }
        console.log(this.alphabets);
    }

    
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