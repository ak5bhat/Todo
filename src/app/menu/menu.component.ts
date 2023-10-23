import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  //isUserLoggedIn: boolean = false; flaw in 16

  constructor(public hardcodedAuthService : HardcodedAuthenticationService){ }


  ngOnInit(): void {
    //this.isUserLoggedIn = this.hardcodedAuthService.isUserLoggedIn(); flaw in 16
  }

}

