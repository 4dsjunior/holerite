export interface PayslipEntry {
  code: string;
  description: string;
  reference: string;
  vencimento: string;
  desconto: string;
}

export interface PayslipData {
  companyName: string;
  companyCnpj: string;
  companyAddress: string;
  employeeName: string;
  employeeCpf: string;
  employeePosition: string;
  employeeCode: string;
  admissionDate: string;
  referenceMonth: string;
  referenceYear: string;
  entries: PayslipEntry[];
  bankName: string;
  bankAgency: string;
  bankAccount: string;
  salarioBase: string;
  salContrInss: string;
  baseCalcFgts: string;
  fgtsMes: string;
  baseCalcIrrf: string;
  faixaIrrf: string;
  paymentDate: string;
}
