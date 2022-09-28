import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from "@auth0/angular-jwt";
import { IUser } from 'src/app/benutzerverwaltung/models/IUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authUrl = "http://localhost:5028/api/Auth/login";

  helper = new JwtHelperService();
  
  currentUser: IUser = {
    firstname: '',
    email: '',
    role: ''
  }

  constructor(private http: HttpClient) { }

  login(model: any){
    return this.http.post(this.authUrl, model).pipe(
      map((response: any) => {
        
        const decodedToken = this.helper.decodeToken(response.token);

        this.currentUser.firstname = decodedToken.given_name;
        this.currentUser.email = decodedToken.email;
        this.currentUser.role = decodedToken.role;
        


        if(response.isAuthenticated == true){
            localStorage.setItem('token',response.token);
            console.log('Role: ' + this.currentUser.role);
        }
      })
    )
  }
}
