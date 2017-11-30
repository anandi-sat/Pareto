import {Component, Input} from '@angular/core';
import {PatientService} from '../../service/patientdetails/patient.service';
import {CampaignService} from '../../service/campaigndetails/campaign.service';
import {SharedService} from '../../service/shared.service';
import {Router} from '@angular/router'


@Component({
    selector: 'patienthtml',
    templateUrl: 'app/component/patient/patient.html',
    providers: [PatientService ,CampaignService]
})

export class PatientComponent{
    

	constructor( private patientService: PatientService, private campaignService: CampaignService, private router: Router, public sharedService: SharedService ) {
        
    }
    
   //simple call init function on controller
   
    i: number = 0;
    patientId = '';
    patientData: any;
    noofpatient: number = 0;
    selectedPatientArray = [];
    noofcampaign: number = 0;
    campaignData: any;

    public ngOnInit(): any
    {
        this.getPatient();
        this.getcampaign();
        
    }

    store(patient){
        console.log(patient);
        this.sharedService.saveData(patient);
        console.log(this.sharedService.getData());
        this.router.navigate(['/intervention'])
    }

    filterPatientData(alphabet){
        console.log(alphabet);
        // for (var i = 0; i < this.patientData.length; i++) {
        //     if(this.patientData[i].fname.startswith;
        //     console.log(patient);
        // }
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

    addPatientToArray(person: any, event) {
        this.toggleItemInArr(this.selectedPatientArray, person);
    }

    isPatientSelected(patient: any){
        return this.selectedPatientArray.indexOf(patient) != -1;
    }

    toggleItemInArr(arr, item) {
        const index = arr.indexOf(item);
        index === - 1 ? arr.push(item) : arr.splice(index, 1);
    }

    addPatienttoCampaign(selectedPatients) {
        console.log(selectedPatients);
    }
    getcampaign(){
        this.campaignService.getcampaignData().subscribe(
        resp => {    
            if(resp!=null){
                
                this.campaignData= resp.response;
                this.noofcampaign= resp.response.length;
            }
            console.log(typeof this.campaignData);
            console.log(this.campaignData);
        },
        error => {
            console.log(error);
        }
        
        );   
    }
    clearSelection(){
        this.selectedPatientArray = [];
        }
}