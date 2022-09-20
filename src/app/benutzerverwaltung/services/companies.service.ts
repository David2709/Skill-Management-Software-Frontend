import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICompany } from '../models/ICompany';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  urlPostCompany = 'http://localhost:5028/api/Companys';
  constructor(private http: HttpClient) { }

  postCompany(data: ICompany): any{
    this.http.post<ICompany>(this.urlPostCompany, { data });
  };
}
