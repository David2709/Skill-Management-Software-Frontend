import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICompany } from '../models/ICompany';
import { IEMail } from '../models/IEMail';
import { IEmployee} from '../models/IEmployee';
import { IUser } from '../models/IUser';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private allCompaniesUrl = 'http://localhost:5028/api/Companys';
  private getEmployeesUrl = 'http://localhost:5028/api/User/';
  private postAccessUrl = 'http://localhost:5028/api/Access';
  private postUserUrl = 'http://localhost:5028/api/User';

  constructor(private http: HttpClient) { }

  getCompanies(): Observable<ICompany[]>{
    return this.http.get<ICompany[]>(this.allCompaniesUrl);
  }

  getEmployees(userId: number): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(`${this.getEmployeesUrl}${userId}`);
  }

  postAccess(mail: string): Observable<IEMail>{

      const data: IEMail = {
        to: mail,
        subject: 'Test',
        body: 'Test'
      }

    return this.http.post<IEMail>(this.postAccessUrl, data);
  }

  postUser(data: IEmployee): Observable<IEmployee>{
      return this.http.post<IEmployee>(this.postUserUrl,data);
  }
  
}
