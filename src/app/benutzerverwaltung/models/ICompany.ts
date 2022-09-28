export interface ICompany{
    questionnaireId: number,
    companyName: string,
    industry: string,
    employeeAmount: number

}

export class CompanyDto implements ICompany{
    questionnaireId!: number;
    companyName!: string;
    industry!: string;
    employeeAmount!: number;
}