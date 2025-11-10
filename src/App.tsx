// src/App.tsx
// hospedados no cloudflare pages

import { useState } from 'react';
import PayslipForm from './components/PayslipForm';
import { PayslipPreview } from './components/PayslipPreview';
import { PayslipData } from './types/payslip';

function App() {
  const [payslipData, setPayslipData] = useState<PayslipData | null>(null);

  // Dados de exemplo para preencher o formulário e o preview
  const exampleData: PayslipData = {
    period: "",
    companyName: "",
    companyAddress: "",
    companyCnpj: "",
    employeeName: "",
    employeeCode: "",
    employeeCbo: "",
    employeeFunction: "",
    items: [
      { code: "", description: "", reference: "", earnings: null, deductions: null},
    ],
    baseSalary: null,
    inssBase: null,
    fgtsBase: null,
    fgtsMonth: null,
    irrfBase: null,
    bank: "",
    agency: "",
    account: ""
  };

  const handleFormSubmit = (data: PayslipData) => {
    setPayslipData(data);
  };
  
  // Para preencher com dados de exemplo ao carregar
  // useState(() => {
  //   setPayslipData(exampleData);
  // }, []);


  return (
    <div className="container mx-auto p-8 bg-gray-50 min-h-screen">
      
      {/* Container do Formulário e Botão - ID para impressão */}
      <div id="payslip-form" className="mb-8 p-6 bg-white rounded-lg shadow-md max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Gerador de Holerite
        </h1>
        {/* Passe os dados de exemplo para o formulário se quiser */}
        <PayslipForm onSubmit={handleFormSubmit} initialData={exampleData} />
        <button
          onClick={() => window.print()}
          className="mt-6 w-full px-6 py-3 bg-blue-600 text-white font-bold rounded-lg shadow hover:bg-blue-700 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!payslipData}
        >
          🖨️ Imprimir PDF
        </button>
      </div>

      {/* Container do Preview - ID para impressão */}
      {/* O `flex` e `justify-center` são para centralizar o A4 na tela */}
      <div id="payslip-preview" className="flex justify-center">
        {payslipData ? (
          <PayslipPreview payslip={payslipData} />
        ) : (
          <div className="text-center text-gray-500">
            Preencha o formulário para visualizar o holerite.
          </div>
        )}
      </div>
    </div>
  );
}

export default App;