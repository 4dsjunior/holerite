// src/components/PayslipPreview.tsx

import { PayslipData } from '../types/payslip';

// Função auxiliar para formatar valores monetários
const formatCurrency = (value: number) => {
  if (!value) return '-';
  // Usa 2 dígitos fracionários, sem o "R$"
  return value.toLocaleString('pt-BR', {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export function PayslipPreview({ payslip }: { payslip: PayslipData }) {
  // Calcula os totais
  const totalVencimentos = payslip.items.reduce(
    (acc, item) => acc + item.earnings,
    0
  );
  const totalDescontos = payslip.items.reduce(
    (acc, item) => acc + item.deductions,
    0
  );
  const liquidoAReceber = totalVencimentos - totalDescontos;

  // Define uma altura fixa para cada linha para preencher o espaço
  const minRows = 18;
  const emptyRows = Math.max(0, minRows - payslip.items.length);

  return (
    // Container principal: 
    // Largura de ~A4 (190mm), fonte 'Courier' (font-mono),
    // texto pequeno (9pt) e bordas pretas
    <div className="w-[190mm] h-[277mm] p-2 bg-white text-gray-900 text-[9pt] font-mono shadow-lg border border-black">
      
      {/* Cabeçalho */}
      <div className="text-center mb-2">
        <h1 className="font-bold text-lg uppercase">
          Recibo de Pagamento de Salário
        </h1>
        <p className="font-bold">Mês/Ano: {payslip.period}</p>
      </div>

      {/* Seção 1: Empregador / Trabalhador */}
      <div className="grid grid-cols-2 border border-black">
        <div className="p-1 border-r border-black">
          <p className="font-bold text-[8pt] uppercase">Empregador</p>
          <p className="text-sm">{payslip.companyName}</p>
          <p className="text-sm">{payslip.companyAddress}</p>
          <p className="text-sm">CNPJ: {payslip.companyCnpj}</p>
        </div>
        <div className="p-1">
          <p className="font-bold text-[8pt] uppercase">Trabalhador</p>
          <p className="text-sm">Nome: {payslip.employeeName}</p>
          <div className="grid grid-cols-3 mt-1">
            <p className="text-sm">Código: {payslip.employeeCode}</p>
            <p className="text-sm">CBO: {payslip.employeeCbo}</p>
            <p className="text-sm">Função: {payslip.employeeFunction}</p>
          </div>
        </div>
      </div>

      {/* Seção 2: Tabela de Itens */}
      <table className="w-full border-collapse border-l border-r border-black">
        <thead>
          <tr className="bg-gray-100">
            <th className="border-b border-t border-black p-0.5 text-left font-bold uppercase text-[8pt]">Código</th>
            <th className="border-b border-t border-black p-0.5 text-left font-bold uppercase text-[8pt]">Descrição</th>
            <th className="border-b border-t border-black p-0.5 text-right font-bold uppercase text-[8pt]">Referência</th>
            <th className="border-b border-t border-black p-0.5 text-right font-bold uppercase text-[8pt]">Vencimentos</th>
            <th className="border-b border-t border-black p-0.5 text-right font-bold uppercase text-[8pt]">Descontos</th>
          </tr>
        </thead>
        <tbody>
          {payslip.items.map((item, index) => (
            <tr key={index} className="border-b border-black/30 h-5">
              <td className="px-1 py-0.5 text-center">{item.code}</td>
              <td className="px-1 py-0.5">{item.description}</td>
              <td className="px-1 py-0.5 text-right">{item.reference}</td>
              <td className="px-1 py-0.5 text-right">
                {item.earnings > 0 ? formatCurrency(item.earnings) : '-'}
              </td>
              <td className="px-1 py-0.5 text-right">
                {item.deductions > 0 ? formatCurrency(item.deductions) : '-'}
              </td>
            </tr>
          ))}
          {/* Linhas vazias para preencher o espaço (altura h-5) */}
          {Array.from({ length: emptyRows }).map((_, i) => (
            <tr key={`empty-${i}`} className="border-b border-black/30 h-5">
              <td className="px-1 py-0.5">&nbsp;</td>
              <td className="px-1 py-0.5"></td>
              <td className="px-1 py-0.5"></td>
              <td className="px-1 py-0.5"></td>
              <td className="px-1 py-0.5"></td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Seção 3: Totais */}
      <div className="grid grid-cols-3 border-t-2 border-b border-l border-r border-black">
        <div className="p-1 border-r border-black">
          <p className="font-bold text-[8pt] uppercase">Total Vencimentos</p>
          <p className="text-right font-bold text-sm">
            {formatCurrency(totalVencimentos)}
          </p>
        </div>
        <div className="p-1 border-r border-black">
          <p className="font-bold text-[8pt] uppercase">Total Descontos</p>
          <p className="text-right font-bold text-sm">
            {formatCurrency(totalDescontos)}
          </p>
        </div>
        <div className="p-1 bg-gray-100">
          <p className="font-bold text-[8pt] uppercase">Líquido a Receber</p>
          <p className="text-right font-bold text-base">
            {formatCurrency(liquidoAReceber)}
          </p>
        </div>
      </div>

      {/* Seção 4: Bases de Cálculo */}
      <div className="grid grid-cols-5 border-b border-l border-r border-black text-[8pt]">
        <div className="p-0.5 border-r border-black"><span className="font-bold">Salário Base:</span> {formatCurrency(payslip.baseSalary)}</div>
        <div className="p-0.5 border-r border-black"><span className="font-bold">Base Cálc. INSS:</span> {formatCurrency(payslip.inssBase)}</div>
        <div className="p-0.5 border-r border-black"><span className="font-bold">Base Cálc. FGTS:</span> {formatCurrency(payslip.fgtsBase)}</div>
        <div className="p-0.5 border-r border-black"><span className="font-bold">FGTS do Mês:</span> {formatCurrency(payslip.fgtsMonth)}</div>
        <div className="p-0.5"><span className="font-bold">Base Cálc. IRRF:</span> {formatCurrency(payslip.irrfBase)}</div>
      </div>

      {/* Seção 5: Dados Bancários */}
      <div className="grid grid-cols-3 border-b border-l border-r border-black text-[8pt]">
        <div className="p-0.5 border-r border-black"><span className="font-bold">Banco:</span> {payslip.bank}</div>
        <div className="p-0.5 border-r border-black"><span className="font-bold">Agência:</span> {payslip.agency}</div>
        <div className="p-0.5"><span className="font-bold">Conta Corrente:</span> {payslip.account}</div>
      </div>

      {/* Seção 6: Assinatura */}
      <div className="border-b border-l border-r border-black p-4 text-[8pt]">
        <p className="mb-6">
          Declaro ter recebido a importância líquida discriminada neste recibo,
          correspondente aos meus vencimentos do mês de referência.
        </p>
        <div className="grid grid-cols-2 items-end">
          <p>Data: ___/___/______</p>
          <div className="border-t border-black pt-1">
            <p className="text-center">Assinatura do Trabalhador</p>
          </div>
        </div>
      </div>
    </div>
  );
}