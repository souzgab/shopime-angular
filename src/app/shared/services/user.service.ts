import { TokenService } from './../security/token.service';
import { Credentials } from './../interfaces/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUserSignup, User } from '../interfaces/user';
import jwtDecode from 'jwt-decode';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = environment.url
  private userSubject = new BehaviorSubject<User>(null);
  private user: User;

  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
  ) {

    this.tokenService.hasToken() && 
            this.decodeAndNotify();
  }

  setToken(token: string) {
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }

  getUser() {
      return this.userSubject.asObservable();
  }

  private decodeAndNotify() {
      const token = this.tokenService.getToken();
      const user = jwtDecode(token) as any;
      this.user = user.user as User;
      this.userSubject.next(user.user as User);
  }

  logout() {
      this.tokenService.removeToken();
      this.userSubject.next(null);
  }

  isLogged() {
      return this.tokenService.hasToken();
  }

  getUserObject() {
      return this.user;
  }

  signUp(body: IUserSignup): Observable<User> {
    return this.http.post<User>(this.url, body)
  }

  signIn(body: Credentials): Observable<User> {
    return this.http
    .post<User>(this.url.concat("/auth"), body)
    .pipe(tap(response => {
      this.setToken(response.token);
    }))
  }
}
