import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username: string,password: string){
    console.log('before login '+this.isUserLoggedIn());
    if(username==="akhil" && password==="dummy"){
      //values set into this storage persists across browser restarts. hence, less secure.
      sessionStorage.setItem('authenticatedUser', username);
      console.log('after login '+this.isUserLoggedIn());
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user===null); //true if user not null
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser');
  }
}
