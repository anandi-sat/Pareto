import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, ResponseContentType, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/share';

@Injectable()
export class HttpService {

    constructor( private http: Http ) { }


   getPatients( action: string ) {
        let headers = new Headers( { 'Content-Type': 'application/json' });
        let options = new RequestOptions( { headers: headers });
        return this.http.get( "http://127.0.0.1:5000/" + action,  options ).map( res => res.json() );
    }
    getcampaigns( action: string ) {
        let headers = new Headers( { 'Content-Type': 'application/json' });
        let options = new RequestOptions( { headers: headers });
        return this.http.get( "http://127.0.0.1:5000/" + action,  options ).map( res => res.json() );
    }
    getdelivery( action: string ) {
        let headers = new Headers( { 'Content-Type': 'application/json' });
        let options = new RequestOptions( { headers: headers });
        return this.http.get( "http://127.0.0.1:5000/" + action,  options ).map( res => res.json() );
    }
    getintervention( params: any, action: string ) {
        let headers = new Headers( { 'Content-Type': 'application/json' });
        let options = new RequestOptions( { headers: headers });
        console.log(params);
        return this.http.post( "http://127.0.0.1:5000/" + action, params, options ).map( res => res.json() );
    }

}