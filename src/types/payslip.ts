export interface PayslipItem {
  code: string;
  description: string;
  reference: string;
  earnings: number | null;
  deductions: number| null;
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
  baseSalary: number| null;
  inssBase: number| null;
  fgtsBase: number|null;
  fgtsMonth: number| null;
  irrfBase: number| null;
  bank: string;
  agency: string;
  account: string;
}