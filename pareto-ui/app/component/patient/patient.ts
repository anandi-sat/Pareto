import {Component, Input} from '@angular/core';
import {PatientService} from '../../service/patientdetails/patient.service';
import {SharedService} from '../../service/shared.service';
import {Router} from '@angular/router'


@Component({
    selector: 'patienthtml',
    templateUrl: 'app/component/patient/patient.html',
    providers: [PatientService]
})

export class PatientComponent{
    

	constructor( private patientService: PatientService, private router: Router, public sharedService: SharedService ) {
        
    }
    
   //simple call init function on controller
   
    i: number = 0;
    patientId = ''
    patientData: any;
    noofpatient: number = 0;
    alphabets : any = [];
    public ngOnInit(): any
    {
        this.getPatient();
        this.getAlphabets();      
        
    }

    store(patient){
        console.log(patient);
        this.sharedService.saveData(patient);
        console.log(this.sharedService.getData());
        this.router.navigate(['/intervention'])
    }


    getPatient(){
        this.patientService.getPatientData().subscribe(
        resp => {    
            if(resp!=null){
                
                this.patientData= resp.response;
                this.noofpatient= resp.response.length;
            }
            console.log(typeof this.patientData);
            console.log(this.patientData);
        },
        error => {
            console.log(error);
        }
        );   
    }
    getAlphabets(){
         while(this.i <=25) {    
             this.alphabets[this.i] =String.fromCharCode(this.i + 65);      
             this.i = this.i + 1;
         }
        console.log(this.alphabets);
    }

    
    

   
   
}