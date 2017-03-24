import { Router } from '@angular/router';

import { AuthenticationService } from '../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User';

@Component({
  selector: 'an-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthenticationService,
  private router:Router) { }

  ngOnInit() {
    //console.log('sanchez');
    if(this.authService.isUserAuthenticated())
    {
      this.router.navigate(['/recipes']); 
    }
  }

ngOnWillEnter(){
  console.log('will enter');
}


public onSignin(user:User):void{
  this.authService.login(user);
  
}
}
