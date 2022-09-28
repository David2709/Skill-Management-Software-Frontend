import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CompanyDto, ICompany } from '../models/ICompany';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  urlPostCompany = 'http://localhost:5028/api/Companys';
  constructor(private http: HttpClient) { }

  postCompany(data: ICompany): Observable<CompanyDto>{
    console.log(JSON.stringify(data));
   return this.http.post<CompanyDto>(this.urlPostCompany, data);
  };
}
