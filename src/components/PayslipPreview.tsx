import { PayslipData } from '../types/payslip';

interface PayslipPreviewProps {
  data: PayslipData;
}

function PayslipPreview({ data }: PayslipPreviewProps) {
  const totalVencimentos = data.entries.reduce((sum, entry) => {
    const value = parseFloat(entry.vencimento.replace(',', '.')) || 0;
    return sum + value;
  }, 0);

  const totalDescontos = data.entries.reduce((sum, entry) => {
    const value = parseFloat(entry.desconto.replace(',', '.')) || 0;
    return sum + value;
  }, 0);

  const valorLiquido = totalVencimentos - totalDescontos;

  return (
    <div className="flex flex-col h-full p-4 font-sans text-xs text-black" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
      {/* Header */}
      <header className="border-b-2 border-white pb-2">
        <div className="flex justify-between items-start">
          <div>
            <p className="font-bold">{data.companyName || 'Nome da Empresa'}</p>
            <p>{data.companyAddress || 'Endereço da empresa'}</p>
            <p>CNPJ: {data.companyCnpj || '00.000.000/0000-00'}</p>
          </div>
          <div className="text-right">
            <p className="text-lg font-bold">Recibo de contracheque</p>
            <p>Referência: {data.referenceMonth || 'Mês'} / {data.referenceYear || 'Ano'}</p>
          </div>
        </div>
        <div className="flex justify-between items-start mt-2 pt-2 border-t-2 border-white">
          <p>Cód: {data.employeeCode || '-'}</p>
          <p className="font-bold">{data.employeeName || 'Nome do Funcionário'}</p>
          <p>CPF: {data.employeeCpf || '000.000.000-00'}</p>
          <p>Cargo: {data.employeePosition || '-'}</p>
          <p>Admissão: {data.admissionDate || 'dd/mm/aaaa'}</p>
        </div>
      </header>

      {/* Main Content - Tabela de Verbas */}
      <main className="flex-grow my-4">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b-2 border-white font-bold">
              <th className="p-1 text-left w-16">Cód.</th>
              <th className="p-1 text-left">Descrição</th>
              <th className="p-1 text-right w-24">Referência</th>
              <th className="p-1 text-right w-32">Vencimentos</th>
              <th className="p-1 text-right w-32">Descontos</th>
            </tr>
          </thead>
          <tbody>
            {data.entries.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center p-8 text-gray-500">
                  Nenhuma verba adicionada
                </td>
              </tr>
            ) : (
              data.entries.map((entry, index) => (
                <tr key={index} className="border-b border-white">
                  <td className="p-1 text-left">{entry.code}</td>
                  <td className="p-1 text-left">{entry.description}</td>
                  <td className="p-1 text-right">{entry.reference}</td>
                  <td className="p-1 text-right">{entry.vencimento}</td>
                  <td className="p-1 text-right">{entry.desconto}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </main>

      {/* Footer */}
      <footer className="mt-auto pt-2 border-t-2 border-white">
        <div className="flex flex-col gap-4">
          {/* Coluna 1: Bases de Cálculo - AGORA VERTICAL */}
          <div className="flex flex-col gap-1">
            <div className="font-bold">Salário Base: <span className="font-normal">{data.salarioBase}</span></div>
            <div className="font-bold">Sal. Contr. INSS: <span className="font-normal">{data.salContrInss}</span></div>
            <div className="font-bold">Base Cálc. FGTS: <span className="font-normal">{data.baseCalcFgts}</span></div>
            <div className="font-bold">FGTS do Mês: <span className="font-normal">{data.fgtsMes}</span></div>
            <div className="font-bold">Base Cálc. IRRF: <span className="font-normal">{data.baseCalcIrrf}</span></div>
            <div className="font-bold">Faixa IRRF: <span className="font-normal">{data.faixaIrrf}</span></div>
          </div>

          {/* Coluna 2: Totais */}
          <div className="flex justify-end gap-4 mt-4">
            <div className="text-right">
              <p className="font-bold">Total de Vencimentos:</p>
              <p className="font-bold">Total de Descontos:</p>
              <p className="font-bold text-lg mt-2">Valor Líquido:</p>
            </div>
            <div className="text-right">
              <p>{totalVencimentos.toFixed(2)}</p>
              <p>{totalDescontos.toFixed(2)}</p>
              <p className="font-bold text-lg mt-2">{valorLiquido.toFixed(2)}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-4 mt-8">
            <div>
                <p>Banco: {data.bankName} | Agência: {data.bankAgency} | Conta: {data.bankAccount}</p>
                <p>Data para pagamento: {data.paymentDate || 'dd/mm/aaaa'}</p>
            </div>
            <div className="text-center w-full mt-8">
                <div className="border-t border-black w-48 mx-auto"></div>
                <p>Assinatura do Funcionário</p>
            </div>
        </div>
      </footer>
    </div>
  );
}

export default PayslipPreview;
