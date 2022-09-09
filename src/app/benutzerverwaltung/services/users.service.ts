import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICompany } from '../models/ICompany';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private allCompaniesUrl = 'http://localhost:5028/api/Companys';

  constructor(private http: HttpClient) { }

  getCompanies(): Observable<ICompany[]>{
    return this.http.get<ICompany[]>(this.allCompaniesUrl);
  }
}
