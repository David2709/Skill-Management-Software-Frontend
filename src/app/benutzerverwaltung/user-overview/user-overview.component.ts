

import { Component, Inject, Input, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ɵInjectableAnimationEngine } from '@angular/platform-browser/animations';
import { CompanyDto, ICompany } from '../models/ICompany';
import { IEMail } from '../models/IEMail';
import { IEmployee } from '../models/IEmployee';
import { IUser } from '../models/IUser';
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

  isCompanyClicked = false;
  companySelected: ICompany = {
    questionnaireId: 0,
    companyName: '',
    industry: '',
    employeeAmount: 0
  };
  compIndex!: number;

  eMailToSend: string = '';
  

  constructor(private usersService: UsersService, private dialog: MatDialog) {
    this.usersService.getCompanies().subscribe((data: ICompany[]) => {
      this.dataSource = data;
    });
  }
  checkBoxChanged(mail: string): void{
    this.eMailToSend = mail;
  }

  showEmployees(company: ICompany,id: number): void {
    console.log(id);
    this.usersService.getEmployees(id).subscribe((data: IEmployee[]) => {
      console.log(data);
      this.dataSourceEmployees = data;
    });

    this.companySelected = company;
    this.compIndex = id;
    this.isCompanyClicked = true;
  };

  addCompany(): void {
    this.dialog.open(DialogCompanyForm);
  }

  backToCompanyOverview(): void{
    this.isCompanyClicked = false;
  }

  sendAccess(): void{
    this.usersService.postAccess(this.eMailToSend).subscribe((data: IEMail) => {
      console.log(data);
    });


  }
  addUser(): void {
    this.dialog.open(DialogUserForm, {
      width: '500px',
      data:  `${this.compIndex}`
    });
  }

  openDeleteConfirmation(id: number): void{
    this.dialog.open(DialogDeleteConfirm);
  }
  }



@Component({
  selector: 'dialog-company-form',
  templateUrl: './dialog-company-forms.html',
})
export class DialogCompanyForm  {
  questionnaireId!: number;
  companyName!: string;
  industry!: string;
  employeeAmount!: number;
  

  constructor(private companyService: CompaniesService,) {

  }

  onCompanyCreate() {
    console.log("Submited");

    const data: ICompany = {
      questionnaireId: this.questionnaireId,
      companyName: this.companyName,
      industry: this.industry,
      employeeAmount: this.employeeAmount
    }

    console.log(JSON.stringify(data));


    this.companyService.postCompany(data).subscribe((res: CompanyDto) => {
      console.log(res);
    });

    
  };
}

@Component({
  selector: 'dialog-user-form',
  templateUrl: './dialog-user-forms.html',
})
export class DialogUserForm  {

  recievedData!: number;
  





  public constructor(
    private usersService: UsersService,public dialogRef: MatDialogRef<UserOverviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number) {
      console.log(data);
    this.recievedData = data;
  }

  addUser(firstName: string,lastName: string,gender: string,role: string,eMail: string){
    this.usersService.postUser({
      "companyId": this.recievedData,
      "eMail": eMail,
      "firstName": firstName,
      "lastName": lastName,
      "gender": gender,
      "role": role
    }).subscribe((res: IEmployee) => {
      console.log(res);
    });
    console.log(this.recievedData);
  }

}

@Component({
  selector: 'dialog-delete-confirm',
  templateUrl: './dialog-delete-confirm.html',
})
export class DialogDeleteConfirm  {

  

  deleteCompany(): void{
    
  }

}


