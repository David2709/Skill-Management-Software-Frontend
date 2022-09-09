import { Component, OnInit } from '@angular/core';
import { ICompany } from '../models/ICompany';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './user-overview.component.html',
  styleUrls: ['./user-overview.component.scss']
})
export class UserOverviewComponent{
  dataSource : ICompany[] = [];

  constructor(private usersService: UsersService) {
    this.usersService.getCompanies().subscribe((data: ICompany[]) =>{
      this.dataSource = data;
    });
   }


}
