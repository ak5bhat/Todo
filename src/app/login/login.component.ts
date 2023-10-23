import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = "akhil"
  password = ""
  errorMessage = "Invalid Credentials"
  invalidLogin = false;

  //Router
  //Angular.giveMeRouter
  //Dependency Injection - login comp wants to use another comp Router - router is dependency
  constructor(private router :Router,
              private hardcodedAuthenticationService : HardcodedAuthenticationService){}

  handleLogin(){
    // console.log(this.username);
    //hardcoded authentication for username and password
    
    //if (this.username==="akhil" && this.password==="dummy"){
    if(this.hardcodedAuthenticationService.authenticate(this.username,this.password)){ //step 14
      //redirect to welcome page - 5
      this.router.navigate(['welcome', this.username]); //added username as parameter -6
      this.invalidLogin = false;
    } else{
      //using *ngIf="invalidLogin" in login.component.html -5
      this.invalidLogin = true;
    }
  }

}
