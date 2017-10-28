import {Component} from '@angular/core';
import {HttpService} from '../../service/http.service';
import {PatientService} from '../../service/patientdetails/patient.service';


@Component({
    selector: 'deliveryhtml',
    templateUrl: 'app/component/delivery/deliveryplanner.html',
    providers: [HttpService, PatientService]
})

export class DeliveryComponent{

	constructor( private httpService: HttpService,  private patientService: PatientService ) {
        
    }
    
   //simple call init function on controller

	
    deliveryData : any;
    patientData : any;

    
    public ngOnInit(): any
    {
        console.log("reached here");
        this.getdeliveryData();
        this.patientService.getPatientData();
        this.patientData = this.patientService.patientData;
        console.log(this.patientData);
        
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



}




