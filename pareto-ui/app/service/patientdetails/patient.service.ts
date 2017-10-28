patient.service('PatientService',function(HttpService){});

export class PatientService {

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