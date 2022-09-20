


import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ICompany } from '../models/ICompany';
import { IEmployee } from '../models/IEmployee';
import { CompaniesService } from '../services/companies.service';
import { UsersService } from '../services/users.service';




@Component({
  selector: 'app-dashboard',
  templateUrl: './user-overview.component.html',
  styleUrls: ['./user-overview.component.scss']
})
export class UserOverviewComponent {
  dataSource: ICompany[] = [];
  dataSourceEmployees: IEmployee[] = [];



  constructor(private usersService: UsersService, private dialog: MatDialog) {
    this.usersService.getCompanies().subscribe((data: ICompany[]) => {
      this.dataSource = data;
    });


  }

  showEmployees(id: number): void {
    console.log(id);
    this.usersService.getEmployees(id).subscribe((data: IEmployee[]) => {
      console.log(data);
      this.dataSourceEmployees = data;
    });
  };

  addCompany(): void {
    this.dialog.open(DialogCompanyForm);
  }

}

@Component({
  selector: 'dialog-company-form',
  templateUrl: './dialog-company-forms.html',
})
export class DialogCompanyForm {

  constructor(private companyService: CompaniesService) {
  }


  onCompanyCreate(company: ICompany) {
    console.log("Submited", company);
    this.companyService.postCompany(company).subscribe((res: any) => {
      console.log(res);
    });
  };
}

