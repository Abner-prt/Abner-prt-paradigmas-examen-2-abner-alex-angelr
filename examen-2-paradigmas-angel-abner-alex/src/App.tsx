import { useState } from "react";
import { FormPage } from "./pages/FormPage";
import { CalculationResult, SavingsFormData } from "./types";

function App() {
  const [data, setData] = useState<SavingsFormData | null>(null);
  const [result, setResult] = useState<CalculationResult | null>(null);

  const handleCalculate = (formData: SavingsFormData, calcResult: CalculationResult) => {
    setData(formData);
    setResult(calcResult);
    console.log("Datos recibidos:", formData, "Resultado:", calcResult);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <FormPage onCalculate={handleCalculate} />
      {data && (
        <div className="p-4 bg-slate-900 text-center text-xs text-slate-500 border-t border-slate-800">
          Formulario enviado: {JSON.stringify(data)}
        </div>
      )}
    </div>
  );
}

export default App;

