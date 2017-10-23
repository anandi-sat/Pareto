import {Component} from '@angular/core';
import {HttpService} from '../../service/http.service';


@Component({
    selector: 'campignhtml',
    templateUrl: 'app/component/campign/campign.html',
    providers: [HttpService]
})

export class CampignComponent{

	constructor( private httpService: HttpService ) {
        
    }


	step = 0;
	campign = new campign();
    campignData = '';

    
    getcampignData(){
        this.step += 1;
        this.campignData = '';
        
        this.httpService.getcampigns("campignData").subscribe(
        resp => {    
            if(resp!=null){
                this.campignData=resp.response;
            }
            console.log(this.campignData);
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

class campign{
    campign: string;
    enrolledpatients: number;

}


