import { Plus, Trash2, FileDown } from 'lucide-react';
import { PayslipData, PayslipEntry } from '../types/payslip';

interface PayslipFormProps {
  formData: PayslipData;
  onInputChange: (field: keyof PayslipData, value: string) => void;
  onEntryChange: (index: number, field: keyof PayslipEntry, value: string) => void;
  onAddEntry: () => void;
  onRemoveEntry: (index: number) => void;
  onGeneratePDF: () => void;
}

function PayslipForm({
  formData,
  onInputChange,
  onEntryChange,
  onAddEntry,
  onRemoveEntry,
  onGeneratePDF
}: PayslipFormProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 space-y-8">
      {/* Linha 1: 4 Colunas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Coluna 1: Dados da Empresa */}
        <div className="space-y-3">
          <h3 className="text-lg font-medium text-gray-800">Dados do Holerite</h3>
          <input
            type="text"
            placeholder="Nome da empresa"
            value={formData.companyName}
            onChange={(e) => onInputChange('companyName', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input
            type="text"
            placeholder="CNPJ"
            value={formData.companyCnpj}
            onChange={(e) => onInputChange('companyCnpj', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input
            type="text"
            placeholder="Endereço"
            value={formData.companyAddress}
            onChange={(e) => onInputChange('companyAddress', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Coluna 2: Dados do Funcionário */}
        <div className="space-y-3">
          <h3 className="text-lg font-medium text-gray-800">Dados do Funcionário</h3>
          <input
            type="text"
            placeholder="Código"
            value={formData.employeeCode}
            onChange={(e) => onInputChange('employeeCode', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input
            type="text"
            placeholder="Nome completo"
            value={formData.employeeName}
            onChange={(e) => onInputChange('employeeName', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input
            type="text"
            placeholder="CPF"
            value={formData.employeeCpf}
            onChange={(e) => onInputChange('employeeCpf', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input
            type="text"
            placeholder="Cargo"
            value={formData.employeePosition}
            onChange={(e) => onInputChange('employeePosition', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input
            type="text"
            placeholder="Data de admissão (dd/mm/aaaa)"
            value={formData.admissionDate}
            onChange={(e) => onInputChange('admissionDate', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Coluna 3: Período de Referência */}
        <div className="space-y-3">
          <h3 className="text-lg font-medium text-gray-800">Período de Referência</h3>
          <input
            type="text"
            placeholder="Mês"
            value={formData.referenceMonth}
            onChange={(e) => onInputChange('referenceMonth', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input
            type="text"
            placeholder="Ano"
            value={formData.referenceYear}
            onChange={(e) => onInputChange('referenceYear', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Coluna 4: Dados Bancários */}
        <div className="space-y-3">
          <h3 className="text-lg font-medium text-gray-800">Dados Bancários</h3>
          <input
            type="text"
            placeholder="Banco"
            value={formData.bankName}
            onChange={(e) => onInputChange('bankName', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input
            type="text"
            placeholder="Agência"
            value={formData.bankAgency}
            onChange={(e) => onInputChange('bankAgency', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input
            type="text"
            placeholder="Conta"
            value={formData.bankAccount}
            onChange={(e) => onInputChange('bankAccount', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Linha 2: Bases de Cálculo */}
      <div>
        <h3 className="text-lg font-medium text-gray-800 mb-3">Bases de Cálculo</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Salário Base"
              value={formData.salarioBase}
              onChange={(e) => onInputChange('salarioBase', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
              type="text"
              placeholder="Base Cálc. FGTS"
              value={formData.baseCalcFgts}
              onChange={(e) => onInputChange('baseCalcFgts', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
              type="text"
              placeholder="Base Cálc. IRRF"
              value={formData.baseCalcIrrf}
              onChange={(e) => onInputChange('baseCalcIrrf', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
              type="text"
              placeholder="Data para pagamento (dd/mm/aaaa)"
              value={formData.paymentDate}
              onChange={(e) => onInputChange('paymentDate', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Sal. Contr. INSS"
              value={formData.salContrInss}
              onChange={(e) => onInputChange('salContrInss', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
              type="text"
              placeholder="FGTS do Mês"
              value={formData.fgtsMes}
              onChange={(e) => onInputChange('fgtsMes', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
              type="text"
              placeholder="Faixa IRRF"
              value={formData.faixaIrrf}
              onChange={(e) => onInputChange('faixaIrrf', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Linha 3: Verbas */}
      <div>
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-medium text-gray-800">Verbas</h3>
          <button
            onClick={onAddEntry}
            className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            <Plus size={16} />
            Adicionar
          </button>
        </div>
        <div className="space-y-3">
          {formData.entries.map((entry, index) => (
            <div key={index} className="border border-gray-200 rounded-md p-3 space-y-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <input
                  type="text"
                  placeholder="Código"
                  value={entry.code}
                  onChange={(e) => onEntryChange(index, 'code', e.target.value)}
                  className="px-2 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="text"
                  placeholder="Descrição"
                  value={entry.description}
                  onChange={(e) => onEntryChange(index, 'description', e.target.value)}
                  className="px-2 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <input
                  type="text"
                  placeholder="Referência"
                  value={entry.reference}
                  onChange={(e) => onEntryChange(index, 'reference', e.target.value)}
                  className="px-2 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="text"
                  placeholder="Vencimento"
                  value={entry.vencimento}
                  onChange={(e) => onEntryChange(index, 'vencimento', e.target.value)}
                  className="px-2 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="text"
                  placeholder="Desconto"
                  value={entry.desconto}
                  onChange={(e) => onEntryChange(index, 'desconto', e.target.value)}
                  className="px-2 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button
                onClick={() => onRemoveEntry(index)}
                className="flex items-center gap-1 text-red-600 hover:text-red-700 text-sm"
              >
                <Trash2 size={14} />
                Remover
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Linha 4: Botão Salvar */}
      <div className="text-center">
        <button
          onClick={onGeneratePDF}
          className="w-full md:w-1/2 lg:w-1/3 flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors font-semibold"
        >
          <FileDown size={20} />
          Salvar PDF
        </button>
      </div>
    </div>
  );
}

export default PayslipForm;
