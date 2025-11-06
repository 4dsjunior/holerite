import { useState } from 'react';
import PayslipForm from './components/PayslipForm';
import PayslipPreview from './components/PayslipPreview';
import { PayslipData, PayslipEntry } from './types/payslip';
import html2pdf from 'html2pdf.js';

function App() {
  const [formData, setFormData] = useState<PayslipData>({
    companyName: '',
    companyCnpj: '',
    companyAddress: '',
    employeeName: '',
    employeeCpf: '',
    employeePosition: '',
    employeeCode: '',
    admissionDate: '',
    referenceMonth: '',
    referenceYear: '',
    entries: [],
    bankName: '',
    bankAgency: '',
    bankAccount: '',
    salarioBase: '',
    salContrInss: '',
    baseCalcFgts: '',
    fgtsMes: '',
    baseCalcIrrf: '',
    faixaIrrf: '',
    paymentDate: ''
  });

  const handleInputChange = (field: keyof PayslipData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleEntryChange = (index: number, field: keyof PayslipEntry, value: string) => {
    const updatedEntries = [...formData.entries];
    updatedEntries[index] = { ...updatedEntries[index], [field]: value };
    setFormData(prev => ({ ...prev, entries: updatedEntries }));
  };

  const addEntry = () => {
    setFormData(prev => ({
      ...prev,
      entries: [...prev.entries, { code: '', description: '', reference: '', vencimento: '', desconto: '' }]
    }));
  };

  const removeEntry = (index: number) => {
    setFormData(prev => ({
      ...prev,
      entries: prev.entries.filter((_, i) => i !== index)
    }));
  };

  const generatePDF = () => {
    const element = document.getElementById('preview-container');
    if (!element) return;

    const opt = {
      margin: 0,
      filename: 'holerite.pdf',
      image: { type: 'jpeg' as const, quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm' as const, format: 'a4' as const, orientation: 'portrait' as const }
    };

    html2pdf().from(element).set(opt).save();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Gerador de Holerite
        </h1>

        <div className="flex flex-col gap-8">
          <PayslipForm
            formData={formData}
            onInputChange={handleInputChange}
            onEntryChange={handleEntryChange}
            onAddEntry={addEntry}
            onRemoveEntry={removeEntry}
            onGeneratePDF={generatePDF}
          />

                                        <div 

                                          id="preview-container"

                                          className="mx-auto overflow-hidden shadow-lg"

                                          style={{
                                            width: '190mm',
                                            minHeight: 'auto',
                                            height: 'auto',
                                            padding: '10mm',
                                            margin: '20px auto',
                                            boxShadow: '0 0 10px rgba(0,0,0,0.15)',
                                            backgroundColor: '#E4FCE4',
                                            overflowX: 'hidden'
                                          }}

                                        >

                                <PayslipPreview data={formData} />

                              </div>

                            </div>

                          </div>

                        </div>

                      );

                    }

                    

                    export default App;

                    
