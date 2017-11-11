import {Component, Injectable,Input,Output,EventEmitter} from '@angular/core'

// Name Service
export interface myData {
   name:string;
}



@Injectable()
export class SharedService {
  sharingData: myData={name:"patientId"};
  saveData(str){
    console.log('save data function called' + str + this.sharingData.name);
    this.sharingData.name=str; 
  }
  getData():string
  {
    console.log('get data function called');
    return this.sharingData.name;
  }
} 