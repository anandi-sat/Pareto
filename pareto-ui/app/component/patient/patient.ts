import {Component} from '@angular/core';
import {HttpService} from '../../service/http.service';


@Component({
    selector: 'patienthtml',
    templateUrl: 'app/component/patient/patient.html',
    providers: [HttpService]
})

export class PatientComponent{

	constructor( private httpService: HttpService ) {
        
    }
    
   //simple call init function on controller
   
    
    
    i=65;
	step = 0;
	
    patientData : any;
    alphabets: any = [];
    
    public ngOnInit(): any
    {
        this.getPatientData();
    }
    
    getPatientData(){
        
        this.httpService.getPatients("PatientData").subscribe(
        resp => {    
            if(resp!=null){
                
                this.patientData= resp.response;
            }
            console.log(typeof this.patientData);
            console.log(this.patientData);
        },
        error => {
            console.log(error);
        }
        );   

    }

    listIndex(){
        
        console.log('ReachedHere');
        let alphabets = [];
        for (let i = 65; i <= 90;i++) {
            alphabets.push(String.fromCharCode(i));
        }
        console.log(alphabets);
    
    }

    getCurrentStep() {
        return this.step;
    }

    goback(){
        this.step = this.step - 1;    }

    toReport(){
        this.step = this.step + 1;    }

        
}




