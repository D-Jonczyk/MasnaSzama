import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/filter';



declare var Auth0Lock: any;
declare var Auth0: any;

@Injectable()
export class AuthService {
  // Set our Auth0 credentials
  lock = new Auth0Lock('41GLvXahNTywSbRUnFCW3Y6UBw4KjWiF', 'ako2013.auth0.com');
  auth0 = new Auth0({clientID: '41GLvXahNTywSbRUnFCW3Y6UBw4KjWiF', domain: 'ako2013.auth0.com'});
  public profile: any;

  constructor(private router: Router) {
    // Capture the user credentials when the user has succesfully logged in
    this.lock.on('authenticated', (authResult: any) => {
      localStorage.setItem('id_token', authResult.idToken);
      //console.log(authResult);

      this.lock.getProfile(authResult.idToken, (error: any, profile: any) => {
        if (error) {
          console.log(error);
        }

        localStorage.setItem('profile', JSON.stringify(profile));
        this.profile = profile;
        this.router.navigateByUrl('/home');
      });

      this.lock.hide();
    });
    
    this.handleRedirectWithHash();
  }

  private handleRedirectWithHash() {
    this.router.events.take(1).subscribe((event:any) => {
      if (/access_token/.test(event.url) || /error/.test(event.url)) {  
        

        let authResult = this.auth0.parseHash(window.location.hash);
        //console.log(authResult);

        if (authResult && authResult.idToken) {
          this.lock.emit('authenticated', authResult);
        }

        if (authResult && authResult.error) {
          this.lock.emit('authorization_error', authResult);
        }
      }
    });
  }

  // Display the lock login box
  login() {
    this.lock.show();
  }
  // Logout the user
  logout() {
    // To log out, just remove the token and profile
    // from local storage
    localStorage.removeItem('profile');
    localStorage.removeItem('id_token');

    // Send the user back to the dashboard after logout
    this.router.navigateByUrl('/login');
  }

  // Check whether the user is logged in or not
  loggedIn() {
    return tokenNotExpired();
  }

}
