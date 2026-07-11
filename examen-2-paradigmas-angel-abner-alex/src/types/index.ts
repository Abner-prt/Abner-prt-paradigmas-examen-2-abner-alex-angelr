// Datos que captura el formulario
export interface SavingsFormData {
  initialDeposit: number;   // P - Capital inicial
  annualRate: number;        // r - Tasa de interés anual (porcentaje, ej: 5)
  termYears: number;         // t - Plazo en años
}

// Una fila de la proyección mensual
export interface MonthlyProjection {
  month: number;             // Número de mes (1, 2, 3...)
  balance: number;           // Saldo acumulado al mes n
  monthlyInterest: number;   // Interés generado ese mes
}

// Una fila de la proyección anual
export interface AnnualProjection {
  year: number;              // Número de año (1, 2, 3...)
  balance: number;           // Saldo acumulado al cierre del año
  annualInterest: number;    // Interés generado ese año
}

// Resultado completo de los cálculos
export interface CalculationResult {
  monthlyProjections: MonthlyProjection[];
  annualProjections: AnnualProjection[];
  totalInterest: number;     // Interés total ganado
  finalBalance: number;      // Saldo final
}
