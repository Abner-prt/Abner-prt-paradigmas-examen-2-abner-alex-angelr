import type { CalculationResult, SavingsFormData, MonthlyProjection, AnnualProjection } from "../types";

export const calculateProjections = (formData: SavingsFormData): CalculationResult => {
  const P = formData.initialDeposit;
  const r = formData.annualRate / 100;
  const i = r / 12;
  const n_total = formData.termYears * 12;
  
  const monthlyProjections: MonthlyProjection[] = [];
  const annualProjections: AnnualProjection[] = [];
  
  // proyeccion mensual
  for (let n = 1; n <= n_total; n++) {
    const saldo_n = P * Math.pow(1 + i, n);
    const saldo_n_minus_1 = P * Math.pow(1 + i, n - 1);
    const interes_mes = saldo_n - saldo_n_minus_1;
    
    monthlyProjections.push({
      month: n,
      balance: parseFloat(saldo_n.toFixed(2)),
      monthlyInterest: parseFloat(interes_mes.toFixed(2))
    });
  }

  // proyeccion anual
  for (let k = 1; k <= formData.termYears; k++) {
    const saldo_anual_k = P * Math.pow(1 + i, k * 12);
    const saldo_anual_k_minus_1 = P * Math.pow(1 + i, (k - 1) * 12);
    const interes_anual = saldo_anual_k - saldo_anual_k_minus_1;
    
    annualProjections.push({
      year: k,
      balance: parseFloat(saldo_anual_k.toFixed(2)),
      annualInterest: parseFloat(interes_anual.toFixed(2))
    });
  }
  
  // totales
  const finalBalance = parseFloat((P * Math.pow(1 + i, n_total)).toFixed(2));
  const totalInterest = parseFloat((finalBalance - P).toFixed(2));

  return {
    monthlyProjections,
    annualProjections,
    totalInterest,
    finalBalance,
  };
};
