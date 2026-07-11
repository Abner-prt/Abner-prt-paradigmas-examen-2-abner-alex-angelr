import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputField } from "../components/InputField";
import { calculateProjections } from "../utils/calculations";
import { CalculationResult, SavingsFormData } from "../types";

interface FormPageProps {
  onCalculate: (data: SavingsFormData, result: CalculationResult) => void;
}

export const FormPage: React.FC<FormPageProps> = ({ onCalculate }) => {
  const navigate = useNavigate();

  // Estados para capturar campos del formulario
  const [initialDeposit, setInitialDeposit] = useState<string>("");
  const [annualRate, setAnnualRate] = useState<string>("");
  const [termYears, setTermYears] = useState<string>("");

  // Estado para mensajes de error
  const [error, setError] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Conversion a numeros
    const depositNum = parseFloat(initialDeposit);
    const rateNum = parseFloat(annualRate);
    const termNum = parseInt(termYears, 10);

    // Validaciones
    if (!initialDeposit || !annualRate || !termYears) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    if (isNaN(depositNum) || depositNum <= 0) {
      setError("El deposito inicial debe ser un numero mayor a 0.");
      return;
    }

    if (isNaN(rateNum) || rateNum < 0.01 || rateNum > 100) {
      setError("La tasa de interes anual debe estar entre 0.01% y 100%.");
      return;
    }

    if (isNaN(termNum) || termNum < 1 || termNum > 50) {
      setError("El plazo debe ser un numero entero entre 1 y 50 años.");
      return;
    }

    // Datos validos
    const formData: SavingsFormData = {
      initialDeposit: depositNum,
      annualRate: rateNum,
      termYears: termNum,
    };

    // Calculo e invocacion
    const result = calculateProjections(formData);
    onCalculate(formData, result);

    // Navegar a la sección de proyeccion mensual
    navigate("/mensual");
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4 bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 text-white">
      <div className="w-full max-w-lg p-8 rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:shadow-blue-500/5 hover:border-slate-700">

        {/* Header del Formulario */}
        <div className="flex flex-col items-center mb-8 text-center">
          <div className="p-3 bg-blue-600/10 rounded-2xl border border-blue-500/20 text-blue-400 mb-4 shadow-lg shadow-blue-500/5">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Simulador de Ahorros
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Calcula el crecimiento de tu capital con interes compuesto mensual.
          </p>
        </div>

        {/* Mensaje de Error */}
        {error && (
          <div className="mb-6 p-4 rounded-xl border border-red-500/20 bg-red-950/30 text-red-400 flex items-start gap-3 text-sm animate-shake">
            <svg
              className="w-5 h-5 shrink-0 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <span>{error}</span>
          </div>
        )}

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <InputField
            label="Deposito Inicial (L)"
            id="initialDeposit"
            value={initialDeposit}
            onChange={setInitialDeposit}
            placeholder="Ej. 10000"
            min={0}
            step={0.01}
          />

          <InputField
            label="Tasa de Interes Anual (%)"
            id="annualRate"
            value={annualRate}
            onChange={setAnnualRate}
            placeholder="Ej. 5"
            min={0}
            max={100}
            step={0.01}
          />

          <InputField
            label="Plazo (Años)"
            id="termYears"
            value={termYears}
            onChange={setTermYears}
            placeholder="Ej. 3"
            min={1}
            max={50}
            step={1}
          />

          <button
            type="submit"
            className="w-full mt-4 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold rounded-xl transition-all duration-300 transform active:scale-[0.98] shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 cursor-pointer text-center text-lg"
          >
            Calcular Proyección
          </button>
        </form>
      </div>
    </div>
  );
};
