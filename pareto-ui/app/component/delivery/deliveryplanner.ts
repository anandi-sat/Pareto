import {Component} from '@angular/core';
import {HttpService} from '../../service/http.service';

@Component({
    selector: 'deliveryhtml',
    templateUrl: 'app/component/delivery/deliveryplanner.html',
    providers: [HttpService]
})

export class DeliveryComponent{

	constructor( private httpService: HttpService ) {
        
    }
    
   //simple call init function on controller

	
    deliveryData : any;
        
    public ngOnInit(): any
    {
        console.log("reached here");
        this.getdeliveryData();
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




