import React from "react";
import type { CalculationResult, SavingsFormData } from "../types";
import { ProjectionTable, formatCurrency } from "../components/ProjectionTable";

interface AnnualProjectionPageProps {
  result: CalculationResult | null;
  formData: SavingsFormData | null;
}

export const AnnualProjectionPage: React.FC<AnnualProjectionPageProps> = ({ result, formData }) => {
  const columns = [
    { header: "Año", accessor: "year" },
    { header: "Saldo acumulado", accessor: "balance" },
    { header: "Interés del año", accessor: "annualInterest" },
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto animate-fade-in-up">
      {formData && result && (
        <div className="bg-[#201d2a] border border-white/10 rounded-2xl p-6 mb-8 flex flex-wrap gap-6 justify-between items-center shadow-lg">
          <div className="flex flex-wrap gap-6">
            <div>
              <p className="text-slate-400 text-sm">Capital inicial</p>
              <p className="text-xl font-semibold text-white">{formatCurrency(formData.initialDeposit)}</p>
            </div>
            <div>
              <p className="text-slate-400 text-sm">Tasa anual</p>
              <p className="text-xl font-semibold text-white">{formData.annualRate}%</p>
            </div>
            <div>
              <p className="text-slate-400 text-sm">Plazo</p>
              <p className="text-xl font-semibold text-white">{formData.termYears} años</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-6 text-right">
            <div>
              <p className="text-slate-400 text-sm">Interés total proyectado</p>
              <p className="text-2xl font-bold text-amber-400">{formatCurrency(result.totalInterest)}</p>
            </div>
            <div>
              <p className="text-slate-400 text-sm">Saldo final</p>
              <p className="text-2xl font-bold text-amber-400">{formatCurrency(result.finalBalance)}</p>
            </div>
          </div>
        </div>
      )}

      <ProjectionTable
        title="Proyección Anual"
        columns={columns}
        data={(result?.annualProjections as unknown as Record<string, number>[]) || []}
        emptyMessage="No hay datos para mostrar. Llena el formulario primero."
      />
    </div>
  );
};
