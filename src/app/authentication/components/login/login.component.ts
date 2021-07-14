import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  universityName: any;
  organisationIdentityCode : any;
  constructor(private authenticationService:AuthenticationService) { }

  ngOnInit(): void {
  this.authenticationService.getHomePageDetails('BATU').subscribe(
    data=>{
    this.universityName=  data.response.data.organisation_name;
     this.organisationIdentityCode= data.response.data.organisation_short_code
    }
  )

  }

}
