// Datos que captura el formulario
export interface SavingsFormData {
  initialDeposit: number;
  annualRate: number;
  termYears: number;
}

// Una fila de la proyeccion mensual
export interface MonthlyProjection {
  month: number;
  balance: number;
  monthlyInterest: number;
}

// Una fila de la proyeccion anual
export interface AnnualProjection {
  year: number;
  balance: number;
  annualInterest: number;
}

// Resultado completo de los calculos
export interface CalculationResult {
  monthlyProjections: MonthlyProjection[];
  annualProjections: AnnualProjection[];
  totalInterest: number;
  finalBalance: number;
}
