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
    programoverviewData : any;
        
    public ngOnInit(): any
    {
        console.log("reached here");
        this.getdeliveryData();
        this.getprogramoverviewData();
    }
    
    getdeliveryData(){
        
        this.httpService.gets("deliveryData").subscribe(
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
    getprogramoverviewData(){
        
        this.httpService.gets("programoverviewData").subscribe(
        resp => {    
            if(resp!=null){
                
                this.programoverviewData= resp.response;
            }
            console.log(typeof this.programoverviewData);
            console.log(this.programoverviewData);
        },
        error => {
            console.log(error);
        }
        );   

    }



}




