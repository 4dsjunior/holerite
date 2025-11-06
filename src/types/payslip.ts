export interface PayslipItem {
  code: string;
  description: string;
  reference: string;
  earnings: number;
  deductions: number;
}

export interface PayslipData {
  period: string;
  companyName: string;
  companyAddress: string;
  companyCnpj: string;
  employeeName: string;
  employeeCode: string;
  employeeCbo: string;
  employeeFunction: string;
  items: PayslipItem[];
  baseSalary: number;
  inssBase: number;
  fgtsBase: number;
  fgtsMonth: number;
  irrfBase: number;
  bank: string;
  agency: string;
  account: string;
}