import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


import { User, AuthResponseData } from '../models/user.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authLocalStorageToken = `${environment.appVersion}-${environment.USERDATA_KEY}`;

  user = new BehaviorSubject<User>(null);
  loggedIn = false;

  public token: String;

  constructor(private http: HttpClient) { }

  public SignUp(userInfos: User) {
    return this.http.post<AuthResponseData>(environment.apiUrl + 'register', userInfos)
      .pipe(
        tap((res) => {
          this.handleAuth(res.user);
        })
      );
  }
  
  public Login(userCredentials: { email: string; password: string }) {
    return this.http
      .post<AuthResponseData>(environment.apiUrl + 'login', userCredentials)
      .pipe(
        tap((res) => {
          this.handleAuth(res.user);
        })
      );
  }

  private handleAuth(userData:User) {
    const user = new User(userData.email, userData.fname, userData.lname, userData._id, userData.accessToken, userData.role, userData.img, userData.associationName, userData.address, userData.zip, userData.city, userData.country);
    this.token = userData.accessToken;

    this.loggedIn = true;
    this.user.next(user);

    // Save logged user info in local storage for auto-login
    localStorage.setItem(this.authLocalStorageToken, JSON.stringify(user));
  }

  public logout() {
    this.http.post(environment.apiUrl + 'logout', {}).subscribe();

    this.loggedIn = false;
    this.user.next(null);
    localStorage.removeItem(this.authLocalStorageToken);
  }


  getLocalStorageToken(){
    return this.authLocalStorageToken;
  }

  getLocalStorageUser(){
    return JSON.parse(localStorage.getItem(this.authLocalStorageToken));
  }
  
  autoLogin() {
    const userData: User = JSON.parse(localStorage.getItem(this.authLocalStorageToken));

    if (!userData) {
      return;
    }

    const loadedUser = new User(
      userData.email,
      userData.fname,
      userData.lname,
      userData._id,
      userData.accessToken,
      userData.role,
      userData.img,
      userData.associationName,
      userData.address,
      userData.zip,
      userData.city,
      userData.country
    );
    this.token = loadedUser.accessToken;

    this.loggedIn = true;
    this.user.next(loadedUser);
  }

  public getUserDetails() {
    const userDetails = {
      fname: this.user.value.fname,
      lname: this.user.value.lname,
      email: this.user.value.email
    };

    return userDetails;
  }

  public isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
