import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICompany } from '../models/ICompany';
import { IEmployee} from '../models/IEmployee';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private allCompaniesUrl = 'http://localhost:5028/api/Companys';
  private getEmployeesUrl = 'http://localhost:5028/api/User/';

  constructor(private http: HttpClient) { }

  getCompanies(): Observable<ICompany[]>{
    return this.http.get<ICompany[]>(this.allCompaniesUrl);
  }

  getEmployees(userId: number): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(`${this.getEmployeesUrl}${userId}`);
  }
}
