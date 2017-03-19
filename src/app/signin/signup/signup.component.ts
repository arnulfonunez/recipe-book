
import { AuthenticationService } from '../../services/authentication.service';
import { User } from '../../models/User';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'an-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService:AuthenticationService
  ) { }

  ngOnInit() {
  }

public onSignup(user:User):void{
  this.authService.signup(user);
  
}

}
