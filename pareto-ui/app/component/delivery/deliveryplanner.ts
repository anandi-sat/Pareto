import {Component} from '@angular/core';
import {HttpService} from '../../service/http.service';
import {PatientComponent} from '../patient/patient';
import {PatientService} from '../../service/patientdetails/patient.service';


@Component({
    selector: 'deliveryhtml',
    templateUrl: 'app/component/delivery/deliveryplanner.html',
    providers: [HttpService, PatientComponent]
})

export class DeliveryComponent{

	constructor( private httpService: HttpService ) {
        
    }
    
   //simple call init function on controller
    
    patient= new PatientComponent(this.httpService);
    
    i=65;
	step = 0;
	
    deliveryData : any;

    patientData = this.patient.getPatientData();
    
    public ngOnInit(): any
    {
        console.log("reached here");
        this.getdeliveryData();
        console.log("patiens in delivery " + this.patientData);
    }
    
    getdeliveryData(){
        
        this.httpService.getdelivery("deliveryData").subscribe(
        resp => {    
            if(resp!=null){
                
                this.deliveryData= resp.response;
            }
            console.log(typeof this.deliveryData);
            console.log(this.deliveryData);
        },
        error => {
            console.log(error);
        }
        );   

    }


    getCurrentStep() {
        return this.step;
    }

    goback(){
        this.step = this.step - 1;    }

    toReport(){
        this.step = this.step + 1;    }
}




