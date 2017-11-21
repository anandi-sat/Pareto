import {Component, Input} from '@angular/core';
import {Router} from '@angular/router'
import {HttpService} from '../../service/http.service';

@Component({
    selector: 'loginhtml',
    templateUrl: 'app/component/login/login.html',
    providers: [HttpService]
})

export class LoginComponent{

}