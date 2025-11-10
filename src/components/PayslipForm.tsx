import { useState } from 'react';
import { PayslipData, PayslipItem } from '../types/payslip';

interface PayslipFormProps {
  onSubmit: (data: PayslipData) => void;
  initialData?: PayslipData;
}

export function PayslipForm({ onSubmit, initialData }: PayslipFormProps) {
  const [formData, setFormData] = useState<PayslipData>(initialData || {
    period: '',
    companyName: '',
    companyAddress: '',
    companyCnpj: '',
    employeeName: '',
    employeeCode: '',
    employeeCbo: '',
    employeeFunction: '',
    items: [],
    baseSalary: 0,
    inssBase: 0,
    fgtsBase: 0,
    fgtsMonth: 0,
    irrfBase: 0,
    bank: '',
    agency: '',
    account: '',
  });

  const handleInputChange = (field: keyof PayslipData, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleItemChange = (index: number, field: keyof PayslipItem, value: string | number) => {
    const newItems = [...formData.items];
    newItems[index] = { ...newItems[index], [field]: value };
    setFormData(prev => ({ ...prev, items: newItems }));
  };

  const handleAddItem = () => {
    setFormData(prev => ({ ...prev, items: [...prev.items, { code: '', description: '', reference: '', earnings: 0, deductions: 0 }] }));
  };

  const handleRemoveItem = (index: number) => {
    const newItems = [...formData.items];
    newItems.splice(index, 1);
    setFormData(prev => ({ ...prev, items: newItems }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <input type="text" placeholder="Período (Ex: Outubro/2025)" value={formData.period} onChange={e => handleInputChange('period', e.target.value)} className="p-2 border rounded" />
        <input type="text" placeholder="Nome da Empresa" value={formData.companyName} onChange={e => handleInputChange('companyName', e.target.value)} className="p-2 border rounded" />
        <input type="text" placeholder="Endereço da Empresa" value={formData.companyAddress} onChange={e => handleInputChange('companyAddress', e.target.value)} className="p-2 border rounded" />
        <input type="text" placeholder="CNPJ da Empresa" value={formData.companyCnpj} onChange={e => handleInputChange('companyCnpj', e.target.value)} className="p-2 border rounded" />
        <input type="text" placeholder="Nome do Funcionário" value={formData.employeeName} onChange={e => handleInputChange('employeeName', e.target.value)} className="p-2 border rounded" />
        <input type="text" placeholder="Código do Funcionário" value={formData.employeeCode} onChange={e => handleInputChange('employeeCode', e.target.value)} className="p-2 border rounded" />
        <input type="text" placeholder="CBO do Funcionário" value={formData.employeeCbo} onChange={e => handleInputChange('employeeCbo', e.target.value)} className="p-2 border rounded" />
        <input type="text" placeholder="Função do Funcionário" value={formData.employeeFunction} onChange={e => handleInputChange('employeeFunction', e.target.value)} className="p-2 border rounded" />
        <input type="number" placeholder="Salário Base" value={formData.baseSalary} onChange={e => handleInputChange('baseSalary', e.target.valueAsNumber)} className="p-2 border rounded" />
        <input type="number" placeholder="Base INSS" value={formData.inssBase} onChange={e => handleInputChange('inssBase', e.target.valueAsNumber)} className="p-2 border rounded" />
        <input type="number" placeholder="Base FGTS" value={formData.fgtsBase} onChange={e => handleInputChange('fgtsBase', e.target.valueAsNumber)} className="p-2 border rounded" />
        <input type="number" placeholder="FGTS do Mês" value={formData.fgtsMonth} onChange={e => handleInputChange('fgtsMonth', e.target.valueAsNumber)} className="p-2 border rounded" />
        <input type="number" placeholder="Base IRRF" value={formData.irrfBase} onChange={e => handleInputChange('irrfBase', e.target.valueAsNumber)} className="p-2 border rounded" />
        <input type="text" placeholder="Banco" value={formData.bank} onChange={e => handleInputChange('bank', e.target.value)} className="p-2 border rounded" />
        <input type="text" placeholder="Agência" value={formData.agency} onChange={e => handleInputChange('agency', e.target.value)} className="p-2 border rounded" />
        <input type="text" placeholder="Conta" value={formData.account} onChange={e => handleInputChange('account', e.target.value)} className="p-2 border rounded" />
      </div>

      <h3 className="text-lg font-bold">Itens do Holerite</h3>
      {formData.items.map((item, index) => (
        <div key={index} className="grid grid-cols-5 gap-2 items-center">
          <input type="text" placeholder="Código" value={item.code} onChange={e => handleItemChange(index, 'code', e.target.value)} className="p-2 border rounded" />
          <input type="text" placeholder="Descrição" value={item.description} onChange={e => handleItemChange(index, 'description', e.target.value)} className="p-2 border rounded" />
          <input type="text" placeholder="Referência" value={item.reference} onChange={e => handleItemChange(index, 'reference', e.target.value)} className="p-2 border rounded" />
          <input type="number" placeholder="Recebimentos" value={item.earnings} onChange={e => handleItemChange(index, 'earnings', e.target.valueAsNumber)} className="p-2 border rounded" />
          <input type="number" placeholder="Descontos" value={item.deductions} onChange={e => handleItemChange(index, 'deductions', e.target.valueAsNumber)} className="p-2 border rounded" />
          <button type="button" onClick={() => handleRemoveItem(index)} className="text-red-500">Remover</button>
        </div>
      ))}
      <button type="button" onClick={handleAddItem} className="text-blue-500">Adicionar Item</button>

      <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">Salvar</button>
    </form>
  );
}

export default PayslipForm;
